import SearchForm from 'components/SearchForm/SearchForm';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSetQuery = query => {
    console.log(query);
    setSearchParams({ query });
  };

  return (
    <div>
      Movies
      <SearchForm handleSetQuery={handleSetQuery} />
    </div>
  );
}

export default Movies;
