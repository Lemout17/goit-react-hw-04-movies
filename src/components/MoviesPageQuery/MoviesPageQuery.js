import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MoviesPageQuery.scss';
import defaultImage from '../../img/default.png';

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
                <div>
                  <div>
                    <img
                      src={
                        poster_path ? `${baseUrl}${poster_path}` : defaultImage
                      }
                      alt={title}
                    />
                  </div>

                  <h3 className="MoviesPageQuery-title">{title}</h3>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

MoviesPageQuery.defaultProps = {
  poster_path: defaultImage,
};

MoviesPageQuery.propTypes = {
  poster_path: PropTypes.string,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.shape().isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default withRouter(MoviesPageQuery);
