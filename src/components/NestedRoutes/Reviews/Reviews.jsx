import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviewsById } from 'services/api';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  console.log(reviews);

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
    <div>
      <p>Total Reviews: {reviews.total_results}</p>
      {reviews.results.length > 0 ? (
        <ul>
          {reviews.results.map(review => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        'We don`t have any reviews for this movie'
      )}
    </div>
  );
}

export default Reviews;
