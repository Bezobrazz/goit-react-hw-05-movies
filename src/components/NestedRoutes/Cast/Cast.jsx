import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCastById } from 'services/api';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  console.log(cast);

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
    <div>
      {cast.cast && (
        <ul>
          {cast.cast.map(actor => (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : defaultImg
                }
                width={150}
                alt="actor_photo"
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cast;
