import type { Callback, Constraint, Values } from '../Form.types';

export const isCallback = (constraint: Constraint): constraint is Callback =>
   typeof constraint === 'function';

export const isPatternConstraint = (
   constraint: Constraint,
): constraint is { pattern: RegExp; message: string } =>
   typeof constraint === 'object' &&
   constraint !== null &&
   'pattern' in constraint &&
   constraint.pattern instanceof RegExp &&
   'message' in constraint &&
   typeof constraint.message === 'string';

export const isRequiredConstraint = (
   constraint: Constraint,
): constraint is { required: boolean; message: string } =>
   typeof constraint === 'object' &&
   constraint !== null &&
   'required' in constraint &&
   typeof constraint.required === 'boolean';

export const validateConstraint = (
   name: string,
   values: Values,
   constraints: Constraint[] = [],
): string | null => {
   const requiredConstraint = constraints.find(isRequiredConstraint);
   const patternConstraint = constraints.find(isPatternConstraint);
   const callbackConstraint = constraints.find(isCallback);

   const value = values[name];
   const isEmpty = value === '' || value === undefined || value === null;

   if (requiredConstraint && isEmpty) {
      return requiredConstraint.message;
   }

   if (callbackConstraint) {
      const errorMsg = callbackConstraint(values);
      if (errorMsg) return errorMsg;
   }

   if (
      patternConstraint &&
      typeof value === 'string' &&
      !patternConstraint.pattern.test(value)
   ) {
      return patternConstraint.message;
   }

   return null;
};
