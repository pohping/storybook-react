import { useCallback, useState } from 'react';
import { type BaseEntity, type JsonApiParams } from '@/types/jsonapi';

type FilterOperators =
   | 'eq'
   | 'ne'
   | 'lt'
   | 'lte'
   | 'gt'
   | 'gte'
   | 'like'
   | 'in'
   | 'nin'
   | 'contains'
   | 'startsWith'
   | 'endsWith';

type Page = 'size' | 'number';

type NonNullableType<T> = { [K in keyof T]-?: NonNullableType<T[K]> };

type RelationKeys<T extends any> = {
   [K in keyof T]-?: NonNullableType<T[K]> extends BaseEntity
      ? K
      : NonNullableType<T[K]> extends Array<infer R>
        ? R extends BaseEntity
           ? K
           : never
        : never;
}[keyof T];

type Include<T> =
   T extends Array<infer T0>
      ? RelationKeys<NonNullableType<T0>>
      : RelationKeys<NonNullableType<T>>;

type IncludeConcat<T> =
   Include<NonNullableType<T>> extends infer RK
      ? RK extends string
         ? `.${RK}${
              | (T extends Array<infer T0>
                   ? RK extends keyof T0
                      ? Include<T0[RK]> extends string
                         ? `.${Include<T0[RK]>}`
                         : RK extends keyof T
                           ? Include<T[RK]> extends string
                              ? `.${Include<T[RK]>}`
                              : ''
                           : ''
                      : ''
                   : '')
              | ''}`
         : never
      : never;

type NestedInclude<T> =
   Include<T> extends infer RK0
      ? RK0 extends string
         ? `${RK0}${RK0 extends keyof T ? IncludeConcat<T[RK0]> : never}`
         : never
      : never;

// Options for initializing query parameters
export interface JsonApiParamsOptions<T extends BaseEntity> {
   include?: Array<Include<T> | NestedInclude<T>>;
   sort?: Array<Extract<keyof T, string> | `-${Extract<keyof T, string>}`>;
   filter?: {
      field: Extract<keyof T, string>;
      operator: FilterOperators;
      value: string | boolean;
   };
   page?: Array<{ type: Page; value: string | number }>;
   fields?: { entity: Extract<keyof T, string>; attribute: string };
}

// Helper methods returned by the hook to update the query params
export interface JsonApiQueryHelpers<T extends BaseEntity> {
   filter(
      field: Extract<keyof T, string>,
      operator: FilterOperators,
      value: string,
   ): JsonApiQueryHelpers<T>;
   sort(
      fields:
         | Array<Extract<keyof T, string> | `-${Extract<keyof T, string>}`>
         | string[],
   ): JsonApiQueryHelpers<T>;
   page(type: Page, value: string | number): JsonApiQueryHelpers<T>;
   setFields(
      entity: Extract<keyof T, string>,
      fields: string,
   ): JsonApiQueryHelpers<T>;
   include(
      fields: Array<Include<T> | NestedInclude<T>>,
   ): JsonApiQueryHelpers<T>;
   reset(): JsonApiQueryHelpers<T>;
}

// Custom hook to manage JSON:API query parameters.
export function useJsonApiParams<T extends BaseEntity>(
   initialOptions: JsonApiParamsOptions<T> = {},
): [JsonApiParams, JsonApiQueryHelpers<T>] {
   const [queryParams, setQueryParams] = useState(() => {
      const params: JsonApiParams = {};

      if (initialOptions.include?.length) {
         params.include = initialOptions.include.join(',');
      }
      if (initialOptions.sort?.length) {
         params.sort = initialOptions.sort.join(',');
      }
      if (initialOptions.filter) {
         const { field, operator, value } = initialOptions.filter;
         params[`filter[${field}][${operator}]`] = String(value);
      }
      if (initialOptions.fields) {
         const { entity, attribute } = initialOptions.fields;
         params[`fields[${entity}]`] = attribute;
      }
      if (initialOptions.page) {
         initialOptions.page.forEach(({ type, value }) => {
            params[`page[${type}]`] =
               typeof value === 'number' ? String(value) : value;
         });
      }

      return params;
   });

   // Helper to add or remove a single param; removes the key if value is empty
   const setParam = useCallback((key: string, value: string) => {
      setQueryParams((prev) => {
         const newParams: JsonApiParams = { ...prev };
         if (value) {
            newParams[key] = value;
         } else {
            delete newParams[key];
         }
         return newParams;
      });
   }, []);

   // Define helper methods for chaining updates
   const helpers: JsonApiQueryHelpers<T> = {
      filter: (field, operator, value) => {
         setParam(`filter[${field}][${operator}]`, value);
         return helpers;
      },
      sort: (fieldsArray) => {
         setParam('sort', fieldsArray.join(','));
         return helpers;
      },
      page: (type, value) => {
         setParam(
            `page[${type}]`,
            typeof value === 'number' ? value.toString() : value,
         );
         return helpers;
      },
      setFields: (entity, fields) => {
         setParam(`fields[${entity}]`, fields);
         return helpers;
      },
      include: (fieldsArray) => {
         setParam('include', fieldsArray.join(','));
         return helpers;
      },
      reset: () => {
         setQueryParams({});
         return helpers;
      },
   };

   return [queryParams, helpers];
}
