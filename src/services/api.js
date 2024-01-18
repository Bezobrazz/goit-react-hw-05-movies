import axios from 'axios';

const moviesDb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '9fbcd18861474c40784b1f7f4f21e949',
  },
});

export const fetchTrendingMovies = async () => {
  try {
    const { data } = await moviesDb.get('/trending/all/day');
    return data;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

export const fetchMovieInformationById = async id => {
  try {
    const response = await moviesDb.get(`/movie/${id}`);

    if (response.status === 200) {
      return response.data;
    } else {
      console.error(
        'Error fetching movie information. Unexpected status:',
        response.status
      );
      throw new Error('Unexpected status');
    }
  } catch (error) {
    console.error('Error fetching movie information:', error.message || error);
    throw error;
  }
};

export const fetchMovieCastById = async id => {
  try {
    const response = await moviesDb.get(`/movie/${id}/credits`);

    if (response.status === 200) {
      return response.data;
    } else {
      console.error(
        'Error fetching movie cast information. Unexpected status:',
        response.status
      );
      throw new Error('Unexpected status');
    }
  } catch (error) {
    console.error(
      'Error fetching movie cast information:',
      error.message || error
    );
    throw error;
  }
};

export const fetchMovieReviewsById = async id => {
  try {
    const response = await moviesDb.get(`/movie/${id}/reviews`);

    if (response.status === 200) {
      return response.data;
    } else {
      console.error(
        'Error fetching movie reviews information. Unexpected status:',
        response.status
      );
      throw new Error('Unexpected status');
    }
  } catch (error) {
    console.error(
      'Error fetching movie reviews information:',
      error.message || error
    );
    throw error;
  }
};
