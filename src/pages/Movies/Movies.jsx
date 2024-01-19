import { List, ListItem } from '@mui/material';
import SearchForm from 'components/SearchForm/SearchForm';
import { StyledLink } from 'pages/Home/Home.styled';
import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'services/api';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedMovie, setSearchedMovie] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      fetchMoviesByQuery(query).then(data => {
        setSearchedMovie(data.results);
      });
    }
  }, [searchParams]);

  const handleSetQuery = query => {
    setSearchParams({ query });
  };
  console.log(searchedMovie);
  return (
    <div>
      <SearchForm handleSetQuery={handleSetQuery} />
      <List>
        {searchedMovie.map(
          movie =>
            movie.title && (
              <ListItem key={movie.id}>
                <StyledLink
                  state={{ from: location }}
                  to={`/movies/${movie.id}`}
                >
                  {movie.title}
                </StyledLink>
              </ListItem>
            )
        )}
      </List>
    </div>
  );
}

export default Movies;
