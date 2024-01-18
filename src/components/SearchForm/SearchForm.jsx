import React, { useState } from 'react';

function SearchForm({ handleSetQuery }) {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    handleSetQuery(query);
    setQuery('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          type="text"
          name="query"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
