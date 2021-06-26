import { Component } from 'react';
import API from '../../services/moviesApi';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import './Reviews.scss';

export default class Reviews extends Component {
  state = {
    reviews: null,
    isLoaded: false,
  };

  async componentDidMount() {
    const movieId = this.props.id;
    this.setState({ isLoaded: true });

    const response = await API.getMovieReview(movieId);

    this.setState({ reviews: response.data.results, isLoaded: false });
  }

  render() {
    const { reviews, isLoaded } = this.state;

    return (
      <div className="Reviews-container ">
        {isLoaded && (
          <Loader type="Audio" color="#00BFFF" height={80} width={80} />
        )}

        <ul className="ReviewsList">
          {reviews && reviews.length > 0
            ? reviews.map(({ id, author, content, url }) => (
                <li className="Reviews-item" key={id}>
                  <h3 className="Reviews-title">Author: {author}</h3>

                  <p className="Reviews-text">{content.slice(0, 730)}...</p>

                  <a href={url} target="_blank" rel="noopener noreferrer">
                    Read full review
                  </a>
                </li>
              ))
            : "We don't have any reviews for this movie"}
        </ul>
      </div>
    );
  }
}

Reviews.propTypes = {
  movieId: PropTypes.number.isRequired,
};
