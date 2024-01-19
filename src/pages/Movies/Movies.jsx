import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'services/api';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedMovie, setSearchedMovie] = useState([]);

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

  return (
    <div>
      <SearchForm handleSetQuery={handleSetQuery} />
      <MoviesList movies={searchedMovie} />
    </div>
  );
}

export default Movies;
