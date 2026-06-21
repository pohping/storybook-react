import { useToastContext } from '../Toast.context';

export const useToast = () => {
   const { showToast } = useToastContext();

   return showToast;
};
