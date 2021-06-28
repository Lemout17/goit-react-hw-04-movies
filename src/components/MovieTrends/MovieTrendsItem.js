import PropTypes from 'prop-types';
import defaultImage from '../../img/default.png';

const MovieTrendsItem = ({ title, poster, baseUrl }) => {
  return (
    <>
      <h3 className="HomeList-title">{title}</h3>
      <img src={poster ? `${baseUrl}${poster}` : defaultImage} alt={title} />
    </>
  );
};

MovieTrendsItem.defaultProps = {
  title: 'Nothing Found',
  poster: defaultImage,
};

MovieTrendsItem.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  baseUrl: PropTypes.string,
};

export default MovieTrendsItem;
