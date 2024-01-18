import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCastById } from 'services/api';

function Cast() {
  const { movieId } = useParams();
  const [cast, setcast] = useState(null);
  console.log(cast);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const castData = await fetchMovieCastById(movieId);
        setcast(castData);
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
    <div>
      {cast.cast && (
        <ul>
          {cast.cast.map(actor => (
            <li key={actor.id}>{actor.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cast;
