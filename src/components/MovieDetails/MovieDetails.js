import s from './MovieDetails.module.scss';
import PropTypes from 'prop-types';
import defaultImage from '../../img/default.png'

const MovieDetails = ({
  title,
  date,
  votea,
  votec,
  desc,
  genres,
  url,
  baseUrl,
}) => (
  <div className={s.container}>
    <h1 className={s.title}>{title}</h1>

    <div className={s.content}>
      <img src={
                    profile_path ? `${base_url}${profile_path}` : defaultImage
                  } alt={title} />

      <div className={s.textContainer}>
        <h2 className={s.subtitle}>Overview:</h2>

        <p className={s.text}>{desc}</p>

        <p className={s.score}>
          Rating: {votea} ({votec})
        </p>

        <h2 className={s.subtitle}>Genres:</h2>

        <ul className={s.list}>
          {genres &&
            genres.map(({ id, name }) => (
              <li className={s.item} key={id}>
                {name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  </div>
);


MovieDetails.defaultProps = {
  poster: defaultIm
    
  budget: 0,
  revenue: 0,
  average: 0,
  count: 0,
  date: '00-00-0000',
};

MovieDetails.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  votea: PropTypes.number,
  votec: PropTypes.number,
  desc: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.shape).isRequired,
  url: PropTypes.string,
  baseUrl: PropTypes.string,
};

export default MovieDetails;
