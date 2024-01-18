import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieInformationById } from 'services/api';
import {
  Container,
  Typography,
  Paper,
  CircularProgress,
  ListItem,
} from '@mui/material';
import {
  MovieInfoContainer,
  MovieDetailsContainer,
  MovieGenresContainer,
  ListContainer,
} from './MovieDetails.styled';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

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
      <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
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
            <Typography variant="h4" gutterBottom>
              {movie.title}
            </Typography>
            <Typography variant="body1" paragraph>
              {movie.overview}
            </Typography>
            {movie.genres && (
              <MovieGenresContainer>
                <Typography variant="subtitle1" fontWeight="bold">
                  Genres:
                </Typography>

                <ListContainer>
                  {movie.genres.map(genre => (
                    <ListItem key={genre.id}>{genre.name}</ListItem>
                  ))}
                </ListContainer>
              </MovieGenresContainer>
            )}
            {movie.vote_average && (
              <Typography
                sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}
                variant="subtitle1"
                fontWeight="bold"
              >
                Rating:{' '}
                <Typography variant="body1">
                  {movie.vote_average.toFixed(1)}
                </Typography>
              </Typography>
            )}
          </MovieDetailsContainer>
        </MovieInfoContainer>
      </Paper>
    </Container>
  );
}

export default MovieDetails;
