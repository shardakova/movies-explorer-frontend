import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const beatfilmApi = createApi({
  reducerPath: 'beatfilmApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BEATFILMS_API_URL }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => 'beatfilm-movies',
      transformResponse (response) {
        return response.map((movie) => ({
          movieId: movie.id,
          country: movie.country,
          director: movie.director,
          duration: movie.duration,
          year: movie.year,
          description: movie.description,
          image: movie.image.url,
          trailerLink: movie.trailerLink,
          thumbnail: movie.image.formats.thumbnail.url,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN
        }));
      }
    })
  })
});

export const { useGetMoviesQuery } = beatfilmApi;
