import type { JsonApiError } from '@/types/jsonapi';

export type ApiError = {
   status: number;
   data: {
      errors: JsonApiError[];
   };
};

function isErrorObject(obj: unknown): obj is JsonApiError {
   if (!obj || typeof obj !== 'object') {
      return false;
   }

   return 'source' in obj || 'title' in obj || 'detail' in obj;
}

function isResponseShape(error: unknown): error is {
   status: number;
   data: { errors: unknown[] };
} {
   if (!error || typeof error !== 'object') {
      return false;
   }

   if (!('status' in error) || !('data' in error)) {
      return false;
   }

   const { status, data } = error as { status: unknown; data: unknown };

   if (typeof status !== 'number') {
      return false;
   }

   if (!data || typeof data !== 'object' || !('errors' in data)) {
      return false;
   }

   return Array.isArray((data as { errors: unknown }).errors);
}

export function isApiError(error: unknown): error is ApiError {
   if (!isResponseShape(error)) {
      return false;
   }

   if (error.data.errors.length === 0) {
      return false;
   }

   return error.data.errors.every(isErrorObject);
}
