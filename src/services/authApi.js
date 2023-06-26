import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { userApi } from './userApi';
import { moviesApi } from './moviesApi';
import transformValidationErrorResponse from '../utils/transformValidationErrorResponse';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    mode: 'cors',
    credentials: 'include'
  }),
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: ({ email, password }) => ({
        url: 'signin',
        method: 'POST',
        body: {
          email,
          password
        }
      }),
      transformErrorResponse: response => {
        if (response.status === 401) {
          response.data.error = {
            password: 'Неверный e-mail или пароль.'
          };
        }
        if (response.status === 400) {
          response = transformValidationErrorResponse(response);
        }
        return response;
      },
      async onQueryStarted (arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(userApi.util.resetApiState());
        } catch (err) {
          // Ignore
        }
      }
    }),
    signup: builder.mutation({
      query: ({ name, email, password }) => ({
        url: 'signup',
        method: 'POST',
        body: {
          name,
          email,
          password
        }
      }),
      transformErrorResponse: response => {
        if (response.status === 409) {
          response.data.error = {
            email: 'Такой e-mail уже существует.'
          };
          response.data.hideToast = true;
        }
        if (response.status === 400) {
          response = transformValidationErrorResponse(response);
        }
        return response;
      },
      async onQueryStarted (arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(userApi.util.resetApiState());
        } catch (err) {
          // Ignore
        }
      }
    }),
    signout: builder.mutation({
      query: () => ({
        url: 'signout',
        method: 'POST'
      }),
      async onQueryStarted (arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(userApi.util.resetApiState());
          dispatch(moviesApi.util.resetApiState());
        } catch (err) {
          // Ignore
        }
      }
    })
  })
});

export const { useSigninMutation, useSignupMutation, useSignoutMutation } = authApi;
