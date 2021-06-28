import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MoviesPageQuery.scss';
import defaultImage from '../../img/default.png';
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
                  defaultImage={defaultImage}
                />
              </Link>
            </li>w
          ))}
      </ul>
    </div>
  );
};

MoviesPageQuery.defaultProps = {
  poster_path: defaultImage,
  title: 'Nothing Found',
};

MoviesPageQuery.propTypes = {
  poster_path: PropTypes.string,
  id: PropTypes.number,
  title: PropTypes.string,
  location: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
};

export default withRouter(MoviesPageQuery);
