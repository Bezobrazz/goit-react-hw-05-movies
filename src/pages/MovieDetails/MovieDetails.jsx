import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchMovieInformationById } from 'services/api';
import {
  Container,
  Typography,
  Paper,
  CircularProgress,
  Button,
  Box,
  ListItem,
} from '@mui/material';
import {
  MovieInfoContainer,
  MovieDetailsContainer,
  MovieGenresContainer,
  ListContainer,
  StyledMovieTitleWrapper,
} from './MovieDetails.styled';
import { NavLink, Outlet } from 'react-router-dom';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const goBackLink = useRef(location.state?.from || '/');

  const handleBackButtonClick = () => {
    navigate(goBackLink.current);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await fetchMovieInformationById(movieId);
        setMovie(movieData);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchData();
  }, [movieId]);

  if (!movie) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container>
      <Button
        onClick={handleBackButtonClick}
        sx={{ marginTop: 2 }}
        color="success"
        variant="contained"
      >
        Go Back
      </Button>
      <Paper elevation={3} sx={{ padding: 2, marginTop: 2, marginBottom: 2 }}>
        <MovieInfoContainer>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultImg
            }
            width={250}
            alt="poster"
          />
          <MovieDetailsContainer>
            <StyledMovieTitleWrapper>
              <Typography sx={{ margin: '0' }} variant="h4" gutterBottom>
                {movie.title}
              </Typography>
              {movie.vote_average && (
                <Typography
                  sx={{
                    display: 'flex',
                    gap: '5px',
                    alignItems: 'center',
                    padding: '5px',
                    backgroundColor:
                      movie.vote_average >= 7.5
                        ? 'lightgreen'
                        : movie.vote_average >= 6
                        ? 'gold'
                        : 'lightcoral',
                    borderRadius: '3px',
                  }}
                  variant="subtitle1"
                  fontWeight="bold"
                >
                  Rating:
                  <Typography variant="body1">
                    {movie.vote_average.toFixed(1)}
                  </Typography>
                </Typography>
              )}
            </StyledMovieTitleWrapper>

            <Typography variant="body1" paragraph>
              {movie.overview}
            </Typography>
            {movie.genres && (
              <MovieGenresContainer>
                <ListContainer>
                  {movie.genres.map(genre => (
                    <ListItem
                      sx={{
                        padding: '5px',
                        backgroundColor: 'teal',
                        borderRadius: '3px',
                        fontSize: '10px',
                        color: 'white',
                        justifyContent: 'center',
                      }}
                      key={genre.id}
                    >
                      {genre.name}
                    </ListItem>
                  ))}
                </ListContainer>
              </MovieGenresContainer>
            )}
          </MovieDetailsContainer>
        </MovieInfoContainer>
      </Paper>
      <div>
        <Typography variant="h4">Additional information</Typography>
        <Box sx={{ display: 'flex', gap: 2, marginTop: 2, marginBottom: 2 }}>
          <Button
            component={NavLink}
            to="cast"
            variant="contained"
            color="primary"
          >
            Show Cast
          </Button>
          <Button
            component={NavLink}
            to="reviews"
            variant="contained"
            color="primary"
          >
            Show Reviews
          </Button>
        </Box>
        <Outlet />
      </div>
    </Container>
  );
}

export default MovieDetails;
