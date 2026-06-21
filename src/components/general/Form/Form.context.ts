import { createContext } from 'react';
import type { FormContextProps, FormItemContextProps } from './Form.types';

export const FormContext = createContext<FormContextProps | undefined>(
   undefined,
);
export const FormItemContext = createContext<FormItemContextProps | undefined>(
   undefined,
);
