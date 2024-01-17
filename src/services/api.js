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
