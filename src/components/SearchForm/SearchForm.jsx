import React, { useState } from 'react';
import { TextField, Button, Box, Paper } from '@mui/material';

function SearchForm({ handleSetQuery }) {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    handleSetQuery(query);
    setQuery('');
  };

  return (
    <Box component="div" mt={2} display="flex" alignItems="center">
      <Paper
        component="form"
        elevation={3}
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexGrow: 1,
          borderRadius: 1,
        }}
      >
        <TextField
          value={query}
          onChange={e => setQuery(e.target.value)}
          type="text"
          name="query"
          variant="outlined"
          fullWidth
          label="Search Movie"
          sx={{ borderRadius: 1, width: '400px' }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ borderRadius: 1 }}
        >
          Search
        </Button>
      </Paper>
    </Box>
  );
}

export default SearchForm;
