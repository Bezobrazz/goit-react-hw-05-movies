import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from '@mui/material';
import { StyledLink } from 'pages/Home/Home.styled';
import { useLocation } from 'react-router-dom';
import { StyledImageList } from './MovieList.styled';

function MoviesList({ movies }) {
  const location = useLocation();

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <ImageList
      sx={{
        width: '100%',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      }}
      cols={4}
    >
      {movies.map(movie => (
        <ImageListItem key={movie.id}>
          <StyledLink state={{ from: location }} to={`/movies/${movie.id}`}>
            <img
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              srcSet={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : defaultImg
              }
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : defaultImg
              }
              alt={movie.title || movie.name}
              loading="lazy"
            />

            <Typography
              variant="body2"
              sx={{
                position: 'absolute',
                top: '3px',
                right: '3px',
                display: 'block',
                padding: '5px',
                borderRadius: '3px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                backgroundColor:
                  movie.vote_average >= 7.5
                    ? 'lightgreen'
                    : movie.vote_average >= 6
                    ? 'gold'
                    : 'lightcoral',
              }}
            >
              {movie.vote_average.toFixed(1)}
            </Typography>
          </StyledLink>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default MoviesList;
