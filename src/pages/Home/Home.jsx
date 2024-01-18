import React, { useEffect, useState } from 'react';

import { fetchTrendingMovies } from 'services/api';
import { Typography, List, ListItem } from '@mui/material';

import { StyledContainer, StyledLink } from './Home.styled';

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
      <List>
        {trendingMovies.map(
          movie =>
            movie.title && (
              <ListItem key={movie.id}>
                <StyledLink to={movie.id.toString()}>{movie.title}</StyledLink>
              </ListItem>
            )
        )}
      </List>
    </StyledContainer>
  );
}

export default Home;
