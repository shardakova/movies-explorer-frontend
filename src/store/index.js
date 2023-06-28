import { configureStore } from '@reduxjs/toolkit';
import { beatfilmApi } from '../services/beatfilmApi';
import { moviesApi } from '../services/moviesApi';
import { authApi } from '../services/authApi';
import { userApi } from '../services/userApi';
import errorToastMiddleware from './middlewares/errorToastMiddleware';

export default configureStore({
  reducer: {
    [beatfilmApi.reducerPath]: beatfilmApi.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      errorToastMiddleware,
      beatfilmApi.middleware,
      moviesApi.middleware,
      authApi.middleware,
      userApi.middleware
    ]);
  }
});
