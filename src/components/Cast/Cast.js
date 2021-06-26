import { Component } from 'react';
import API from '../../services/moviesApi';
import PropTypes from 'prop-types';
import './Cast.scss';
import defaultImage from '../../img/default.png';
import Loader from 'react-loader-spinner';

export default class Cast extends Component {
  state = {
    cast: null,
    isLoaded: false,
    base_url: 'https://image.tmdb.org/t/p/w500',
  };

  async componentDidMount() {
    const movieId = this.props.id;

    console.log(movieId);

    this.setState({ isLoaded: true });

    const response = await API.getMovieCast(movieId);

    this.setState({ cast: response.data.cast, isLoaded: false });
  }

  render() {
    const { cast, base_url, isLoaded } = this.state;

    return (
      <div className="Cast-container">
        {isLoaded && (
          <Loader type="Audio" color="#00BFFF" height={80} width={80} />
        )}

        <ul className="CastList">
          {cast &&
            cast.map(({ id, name, character, profile_path }) => (
              <li className="CastList-item" key={id}>
                <img
                  src={
                    profile_path ? `${base_url}${profile_path}` : defaultImage
                  }
                  alt={name}
                />

                <div className="Cast-text-container">
                  <p className="Cast-name">{name}</p>
                  <span className="Cast-text">Character: {character}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

Cast.defaultProps = {
  profile_path: defaultImage,
};

Cast.propTypes = {
  movieId: PropTypes.number.isRequired,
};
