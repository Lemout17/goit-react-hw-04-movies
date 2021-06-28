import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MoviesPageQuery.scss';
import MoviesPageQueryItem from './MoviesPageQueryItem';

const MoviesPageQuery = ({ movies, location, baseUrl }) => {
  return (
    <div className="MoviesPageQuery-container">
      <ul className="MoviesPageQuery-list">
        {movies &&
          movies.map(({ id, title, poster_path }) => (
            <li className="MoviesPageQuery-item" key={id}>
              <Link
                to={{
                  pathname: `/movies/${id}`,
                  state: {
                    from: location,
                  },
                }}
              >
                <MoviesPageQueryItem
                  poster={poster_path}
                  title={title}
                  baseUrl={baseUrl}
                />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

MoviesPageQuery.propTypes = {
  id: PropTypes.number,
  location: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
};

export default withRouter(MoviesPageQuery);
