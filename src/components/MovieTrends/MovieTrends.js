import { Link, withRouter } from 'react-router-dom';
import defaultImage from '../../img/default.png';

const MovieTrends = ({ movies, baseUrl, location }) => {
  return (
    <div>
      <h1 className="Home-title">Trending today</h1>
      <ul className="HomeList">
        {movies.map(({ title, id, poster_path }) => (
          <li key={id} className="HomeList-item">
            <Link
              to={{
                pathname: `/movies/${id}`,
                state: {
                  from: location,
                },
              }}
            >
              <h3 className="HomeList-title">{title}</h3>
              <img
                src={poster_path ? `${baseUrl}${poster_path}` : defaultImage}
                alt={title}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

MovieTrends.defaultProps = {
  poster_path: defaultImage,
};

export default withRouter(MovieTrends);