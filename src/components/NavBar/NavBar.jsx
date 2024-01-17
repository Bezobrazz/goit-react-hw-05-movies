import React from 'react';

import { AppBar, Divider, Toolbar, Typography } from '@mui/material';
import { StyledNavLink } from './NavBar.styled';

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <StyledNavLink
          to="/"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
        </StyledNavLink>
        <Divider orientation="vertical" variant="middle" sx={{ mx: 2 }} />
        <StyledNavLink
          to="/movies"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Movies
          </Typography>
        </StyledNavLink>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
