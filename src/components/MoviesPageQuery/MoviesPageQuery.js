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
