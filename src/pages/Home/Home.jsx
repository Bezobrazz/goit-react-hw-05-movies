import { Typography } from '@mui/material';
import { StyledContainer } from './Home.styled';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/api';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTrendingMovies();
        console.log('API Response:', data);
        setTrendingMovies(data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <StyledContainer>
      <Typography variant="h4" gutterBottom>
        Trending Movies
      </Typography>
      <MoviesList movies={trendingMovies} />
    </StyledContainer>
  );
}

export default Home;
