import { List, ListItem } from '@mui/material';
import { StyledLink } from 'pages/Home/Home.styled';

import { useLocation } from 'react-router-dom';

function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <List>
      {movies.map(movie => (
        <ListItem key={movie.id}>
          <StyledLink state={{ from: location }} to={`/movies/${movie.id}`}>
            {movie.title || movie.name}
          </StyledLink>
        </ListItem>
      ))}
    </List>
  );
}

export default MoviesList;
