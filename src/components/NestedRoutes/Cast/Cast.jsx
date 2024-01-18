import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCastById } from 'services/api';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const castData = await fetchMovieCastById(movieId);
        setCast(castData);
      } catch (error) {
        console.error('Error fetching movie cast details:', error);
      }
    };
    fetchData();
  }, [movieId]);

  if (!cast) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container spacing={2}>
      {cast.cast &&
        cast.cast.map(actor => (
          <Grid item key={actor.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : defaultImg
                }
                alt="actor_photo"
                style={{ objectFit: 'contain', borderRadius: '8px' }}
              />
              <CardContent>
                <Typography variant="h6">{actor.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Character: {actor.character}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
}

export default Cast;
