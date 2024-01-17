import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import { Toolbar } from '@mui/material';

function Layout() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <Toolbar>
        <Outlet />
      </Toolbar>
    </div>
  );
}

export default Layout;
