import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import transformValidationErrorResponse from '../utils/transformValidationErrorResponse';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/users`,
    mode: 'cors',
    credentials: 'include'
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => 'me',
      providesTags: ['User']
    }),
    editMe: builder.mutation({
      query: ({ name, email, password }) => ({
        url: 'me',
        method: 'PATCH',
        body: {
          name,
          email,
          password
        }
      }),
      invalidatesTags: ['User'],
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
      }
    })
  })
});

export const { useGetMeQuery, useEditMeMutation } = userApi;
