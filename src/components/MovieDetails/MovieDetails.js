import s from './MovieDetails.module.scss';
import PropTypes from 'prop-types';
import defaultImage from '../../img/default.png';

const MovieDetails = ({
  title,
  date,
  votea,
  votec,
  desc,
  genres,
  url,
  baseUrl,
  budget,
  revenue,
  tag,
}) => {
  const normalizedBudget = budget
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  const normalizedRevenue = revenue
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  return (
    <div className={s.container}>
      <h1 className={s.title}>{title}</h1>

      <div className={s.content}>
        <img src={url ? `${baseUrl}${url}` : defaultImage} alt={title} />

        <div className={s.textContainer}>
          <h2 className={s.tagline}>{tag}</h2>
          <h2 className={s.subtitle}>Overview:</h2>

          <p className={s.text}>{desc}</p>

          <p className={s.score}>
            Rating: {votea} ({votec})
          </p>

          <p className={s.score}>Release date: {date}</p>

          <p className={s.score}>Budget: {normalizedBudget}$</p>

          <p className={s.score}>Revenue: {normalizedRevenue}$</p>

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
};

MovieDetails.defaultProps = {
  bydget: 0,
  revenue: 0,
  votea: 0,
  data: 0,
  votec: 0,
  url: defaultImage,
  tag: null,
  title: 'Nothing found',
  desc: '',
};

MovieDetails.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  tag: PropTypes.string,
  votea: PropTypes.number,
  votec: PropTypes.number,
  desc: PropTypes.string,
  genres: PropTypes.array,
  url: PropTypes.string,
  baseUrl: PropTypes.string,
  budget: PropTypes.number,
  revenue: PropTypes.number,
};

export default MovieDetails;
