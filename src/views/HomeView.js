import { Component } from 'react';
import './HomeView.scss';
import MovieTrends from '../components/MovieTrends';
import API from '../services/moviesApi';

export default class HomeView extends Component {
  state = {
    movies: [],

    base_url: 'https://image.tmdb.org/t/p/w500',
    error: null,
  };

  async componentDidMount() {
    const response = await API.getMovieTrends();

    this.setState({
      movies: response.data.results,
    });
  }

  render() {
    const { movies, base_url } = this.state;

    return (
      <div className="HomeView-content">
        <MovieTrends movies={movies} baseUrl={base_url} />
      </div>
    );
  }
}
