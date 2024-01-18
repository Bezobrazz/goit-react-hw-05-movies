import { Typography } from '@mui/material';
import { StyledContainer } from './Home.styled';
import MoviesList from 'components/MoviesList/MoviesList';

function Home() {
  return (
    <StyledContainer>
      <Typography variant="h4" gutterBottom>
        Trending Movies
      </Typography>
      <MoviesList />
    </StyledContainer>
  );
}

export default Home;
