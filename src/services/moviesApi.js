import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/movies`,
    mode: 'cors',
    credentials: 'include'
  }),
  tagTypes: ['Movies'],
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => '/',
      providesTags: ['Movies']
    }),
    addMovie: builder.mutation({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Movies']
    }),
    deleteMovie: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Movies']
    })
  })
});

export const { useGetMoviesQuery, useAddMovieMutation, useDeleteMovieMutation } = moviesApi;
