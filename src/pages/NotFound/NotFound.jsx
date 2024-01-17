import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>Sorry, page is not found!</h1>
      <Link to={'/'}>Go home</Link>
    </div>
  );
}

export default NotFound;
