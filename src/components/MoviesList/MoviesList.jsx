import { List, ListItem } from '@mui/material';
import { StyledLink } from 'pages/Home/Home.styled';
import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/api';

function MoviesList() {
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
    <List>
      {trendingMovies.map(
        movie =>
          movie.title && (
            <ListItem key={movie.id}>
              <StyledLink to={`/movies/${movie.id}`}>{movie.title}</StyledLink>
            </ListItem>
          )
      )}
    </List>
  );
}

export default MoviesList;
