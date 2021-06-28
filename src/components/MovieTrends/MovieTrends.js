import { Link, withRouter } from 'react-router-dom';
import MovieTrendsItem from './MovieTrendsItem';

import PropTypes from 'prop-types';

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
              <MovieTrendsItem
                title={title}
                poster={poster_path}
                baseUrl={baseUrl}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

MovieTrends.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape).isRequired,
  id: PropTypes.number,
  location: PropTypes.object.isRequired,
};

export default withRouter(MovieTrends);
