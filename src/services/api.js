import axios from 'axios';

const moviesDb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '9fbcd18861474c40784b1f7f4f21e949',
  },
});

export const fetchTrendingMovies = async () => {
  const { data } = await moviesDb.get('/trending/movie/day');

  return data;
};

export const fetchMovieInformationById = async id => {
  const response = await moviesDb.get(`/movie/${id}`);

  return response.data;
};

export const fetchMovieCastById = async id => {
  const response = await moviesDb.get(`/movie/${id}/credits`);

  return response.data;
};

export const fetchMovieReviewsById = async id => {
  const response = await moviesDb.get(`/movie/${id}/reviews`);

  return response.data;
};

export const fetchMoviesByQuery = async query => {
  try {
    const { data } = await moviesDb.get('/search/movie', {
      params: {
        query,
      },
    });
    return data;
  } catch (error) {
    console.error('Error fetching movies by query:', error);
    throw error;
  }
};
