import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviewsById } from 'services/api';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reviewsData = await fetchMovieReviewsById(movieId);
        setReviews(reviewsData);
      } catch (error) {
        console.error('Error fetching movie reviews details:', error);
      }
    };
    fetchData();
  }, [movieId]);

  if (!reviews) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
      <Typography variant="h6">
        Total Reviews: {reviews.total_results}
      </Typography>
      {reviews.results.length > 0 ? (
        <Grid container spacing={2}>
          {reviews.results.map(review => (
            <Grid item key={review.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {review.author}
                  </Typography>
                  <div
                    style={{
                      maxHeight: '150px',
                      overflowY: 'auto',
                      paddingRight: '15px',
                    }}
                  >
                    <Typography variant="body2">{review.content}</Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body2">
          We don't have any reviews for this movie
        </Typography>
      )}
    </Box>
  );
}

export default Reviews;
