import { Component } from 'react';
import './HomeView.scss';
import MovieTrends from '../components/MovieTrends';
import Loader from 'react-loader-spinner';
import API from '../services/moviesApi';

export default class HomeView extends Component {
  state = {
    movies: [],
    isLoaded: false,
    base_url: 'https://image.tmdb.org/t/p/w500',
    error: null,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoaded: true });

      const response = await API.getMovieTrends();

      this.setState({
        movies: response.data.results,
        isLoaded: false,
      });
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    const { movies, base_url, isLoaded, error } = this.state;

    return (
      <div className="HomeView-content">
        {error && `Oops ${error.message}`}
        <MovieTrends movies={movies} baseUrl={base_url} />
        {isLoaded && (
          <Loader type="Audio" color="#00BFFF" height={80} width={80} />
        )}
      </div>
    );
  }
}
