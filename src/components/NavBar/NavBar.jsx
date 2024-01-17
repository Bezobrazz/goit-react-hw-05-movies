import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Divider, Toolbar, Typography } from '@mui/material';

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
        </NavLink>
        <Divider orientation="vertical" variant="middle" sx={{ mx: 2 }} />
        <NavLink
          to="/movies"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Movies
          </Typography>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
