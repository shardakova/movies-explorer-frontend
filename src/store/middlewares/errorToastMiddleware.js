import { isRejectedWithValue } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const errorToastMiddleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    if (action.payload?.status === 429) {
      toast.error('Слишком много запросов, попробуйте позже.');
    }
    if (!action.payload?.data?.hideToast && action.payload?.status !== 401) {
      toast.error(action.payload?.data?.message);
    }
  }

  return next(action);
};

export default errorToastMiddleware;
