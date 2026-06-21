import type {
   BaseEntity,
   Relationships,
   ResourceObject,
   ResourceIdentifier,
   JsonApiResponse,
} from '@/types/jsonapi';

export type RecordsProps<T extends BaseEntity> = {
   attributes?: Array<keyof T & string>;
   relationships?: Record<string, string>;
};

/**
 * Creates a Map for fast lookup of included resources by type + id
 */
function createIncludedMap(
   included?: ResourceObject[],
): Map<string, ResourceObject> {
   const map = new Map<string, ResourceObject>();
   if (!included) return map;

   for (const item of included) {
      const key = `${item.type}:${item.id}`;
      map.set(key, item);
   }
   return map;
}

/**
 * Recursively denormalizes relationships with included resources (optimized)
 */
function parseRelationships(
   relationships: Relationships,
   includedMap: Map<string, ResourceObject>,
   visited = new Set<string>(),
): Record<string, any> {
   const result: Record<string, any> = {};

   for (const [name, rel] of Object.entries(relationships)) {
      const relData = rel.data;
      if (!relData) {
         result[name] = null;
         continue;
      }

      result[name] = Array.isArray(relData)
         ? relData.map((item) =>
              populateRelationship(item, includedMap, visited),
           )
         : populateRelationship(relData, includedMap, visited);
   }

   return result;
}

function populateRelationship(
   resource: ResourceIdentifier | null,
   includedMap: Map<string, ResourceObject>,
   visited: Set<string>,
): any {
   if (!resource) return null;

   const { type, id } = resource;
   const key = `${type}:${id}`;

   // Prevent infinite recursion on circular references
   if (visited.has(key)) {
      return resource; // Return identifier only
   }

   const includedResource = includedMap.get(key);
   if (!includedResource) {
      return resource; // Return identifier
   }

   visited.add(key);

   const { attributes, relationships, ...otherProps } = includedResource;

   const nested = relationships
      ? parseRelationships(relationships, includedMap, visited)
      : {};

   const denormalized = {
      ...attributes,
      ...nested,
      ...otherProps,
   };

   visited.delete(key); // Allow other branches to use it again

   return denormalized;
}

/**
 * Denormalizes a single resource
 */
function denormalizeItem(
   resource: ResourceObject | null,
   includedMap: Map<string, ResourceObject>,
): any {
   if (!resource) return null;

   const { id, type, attributes, relationships, ...otherProps } = resource;

   const result: Record<string, any> = { id, type, ...attributes };

   if (relationships) {
      const parsed = parseRelationships(relationships, includedMap);
      Object.assign(result, parsed);
   }

   return { ...result, ...otherProps };
}

/**
 * Main denormalize function
 */
function denormalize(response: unknown): any {
   if (!response) return null;

   const res = response as JsonApiResponse;
   if (!res || !('data' in res)) {
      throw new TypeError('Invalid JSON:API response: missing `data` property');
   }

   const { data, included, ...rest } = res;
   const includedMap = createIncludedMap(included);

   const denormData = Array.isArray(data)
      ? data.map((item) => denormalizeItem(item, includedMap))
      : denormalizeItem(data, includedMap);

   return { data: denormData, ...rest };
}

/* ==================== Normalization ==================== */

function extractAttributes(
   data: Record<string, any>,
   attributes?: string[],
): Record<string, any> | undefined {
   if (!attributes?.length) return undefined;

   return Object.fromEntries(
      Object.entries(data).filter(([key]) => attributes.includes(key)),
   );
}

function extractRelationships(
   data: Record<string, any>,
   config?: Record<string, string>,
): Record<string, any> | undefined {
   if (!config) return undefined;

   const entries: [string, any][] = [];

   for (const [attr, type] of Object.entries(config)) {
      const value = data[attr];
      if (!value) continue;

      if (Array.isArray(value)) {
         const dataArray = value
            .map((v) => (v?.id ? { type, id: v.id } : null))
            .filter(Boolean);

         if (dataArray.length) {
            entries.push([attr, { data: dataArray }]);
         }
      } else if (value?.id) {
         entries.push([attr, { data: { type, id: value.id } }]);
      }
   }

   return entries.length ? Object.fromEntries(entries) : undefined;
}

function normalize<T extends BaseEntity>(
   type: string,
   attributes?: string[],
   relationships?: Record<string, string>,
) {
   return (
      data: Partial<T> | null | undefined,
   ): { data: ResourceObject | null } => {
      if (!data) return { data: null };

      const resource: any = { type, id: data.id };

      const attrData = extractAttributes(
         data as Record<string, any>,
         attributes,
      );
      const relData = extractRelationships(
         data as Record<string, any>,
         relationships,
      );

      if (attrData) resource.attributes = attrData;
      if (relData) resource.relationships = relData;

      return { data: resource };
   };
}

/**
 * Returns tuple of [normalize, denormalize] for a resource type
 */
export function createJsonApiAdapter<T extends BaseEntity>(
   type?: string,
   records?: RecordsProps<T>,
) {
   const normalizeFn = normalize<T>(
      type || '',
      records?.attributes as string[] | undefined,
      records?.relationships,
   );

   return [normalizeFn, denormalize] as const;
}

export function denormalizeResponse<T = any>(response: unknown): T {
   const [, denorm] = createJsonApiAdapter();
   return denorm(response) as T;
}
