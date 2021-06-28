import PropTypes from 'prop-types';
import defaultImage from '../../img/default.png';

const MoviesPageQueryItem = ({ poster, baseUrl, title }) => {
  return (
    <div>
      <div>
        <img src={poster ? `${baseUrl}${poster}` : defaultImage} alt={title} />
      </div>

      <h3 className="MoviesPageQuery-title">{title}</h3>
    </div>
  );
};

MoviesPageQueryItem.defaultProps = {
  poster: defaultImage,
  title: 'Nothing Found',
};

MoviesPageQueryItem.propTypes = {
  poster: PropTypes.string,
  baseUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default MoviesPageQueryItem;
