import { List, ListItem } from '@mui/material';
import { StyledLink } from 'pages/Home/Home.styled';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/api';

function MoviesList() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

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
              <StyledLink state={{ from: location }} to={`/movies/${movie.id}`}>
                {movie.title}
              </StyledLink>
            </ListItem>
          )
      )}
    </List>
  );
}

export default MoviesList;
