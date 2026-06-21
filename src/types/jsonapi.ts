export interface BaseEntity {
   id: string;
}

export interface Meta {
   [key: string]: unknown;
}

export type Link = string | { href: string; meta?: Meta };

export interface Links {
   self?: Link;
   related?: Link;
   [key: string]: Link | undefined;
}

export interface PaginationLinks {
   first?: Link;
   last?: Link;
   prev?: Link;
   next?: Link;
}

export interface JsonApiInfo {
   version?: string;
   meta?: Meta;
}

export interface JsonApiDocument {
   jsonapi?: JsonApiInfo;
   links?: Links & PaginationLinks;
   meta?: Meta;
}

export interface JsonApiError {
   id?: string | number;
   links?: Links;
   status?: string;
   code?: string;
   title?: string;
   detail?: string;
   source?: {
      pointer?: string;
      parameter?: string;
   };
   meta?: Meta;
}

export interface ResourceObject<T extends BaseEntity = BaseEntity> {
   type: string;
   id: string;
   attributes?: Partial<Omit<T, 'id' | 'type'>>;
   relationships?: Relationships;
   links?: Links;
   meta?: Meta;
}

export type ResourceIdentifier = Pick<ResourceObject, 'type' | 'id'>;

export interface Relationships {
   [key: string]: Relationship;
}

export interface Relationship {
   data?: ResourceIdentifier | ResourceIdentifier[] | null;
   links?: Links;
   meta?: Meta;
}

export type TopLevelLinks = Links & PaginationLinks;

export interface JsonApiResponse<T extends BaseEntity = BaseEntity> {
   data: ResourceObject<T> | ResourceObject<T>[] | null;
   errors?: JsonApiError[];
   included?: ResourceObject[];
   links?: TopLevelLinks;
   meta?: Meta;
}

export interface JsonApiPayload<T extends BaseEntity = BaseEntity> {
   data: ResourceObject<T> | ResourceObject<T>[] | null;
   included?: ResourceObject[];
   meta?: Meta;
}

export type JsonApiParams = Record<string, string>;

export type Response<
   T extends BaseEntity | BaseEntity[] | null,
   MetaObject extends Meta = {},
> = {
   data: T;
   meta?: MetaObject;
   links?: TopLevelLinks;
};
