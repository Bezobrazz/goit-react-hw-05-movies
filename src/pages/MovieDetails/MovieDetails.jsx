import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieInformationById } from 'services/api';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
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
    return <div>Loading...</div>; // Додано відображення поки дані завантажуються
  }

  return (
    <div>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : defaultImg
        }
        width={250}
        alt="poster"
      />
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      {movie.genres && (
        <div>
          <p>Genres:</p>
          <ul>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      )}
      {movie.vote_average && <p>Rating: {movie.vote_average.toFixed(1)}</p>}
    </div>
  );
}

export default MovieDetails;
