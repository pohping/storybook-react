import { baseApi } from '@/services/base-api';
import { configureStore } from '@reduxjs/toolkit';
// import { routeSlice, authSlice } from 'features';
// import { baseApi } from 'services';

export const store = configureStore({
   reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
      //   [authSlice.name]: authSlice.reducer,
      //   [routeSlice.name]: routeSlice.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
