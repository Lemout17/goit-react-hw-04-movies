import { Component } from 'react';
import './HomeView.scss';
import MovieTrends from '../components/MovieTrends';
import API from '../services/moviesApi';
import Button from '@material-ui/core/Button';

export default class HomeView extends Component {
  state = {
    movies: [],
    page: 1,
    base_url: 'https://image.tmdb.org/t/p/w500',
  };

  async componentDidMount() {
    const { page } = this.state;

    const response = await API.getMovieTrends(page);

    this.setState({
      movies: response.data.results,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { movies } = this.state;

    if (movies.length > 20) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  fetchMovies = page => {
    API.getMovieTrends(page).then(response =>
      this.setState(prevState => ({
        movies: [...prevState.movies, ...response.data.results],
        page: prevState.page + 1,
      })),
    );
  };

  render() {
    const { movies, base_url, page } = this.state;

    return (
      <div className="HomeView-content">
        <MovieTrends movies={movies} baseUrl={base_url} />
        {movies.length > 0 && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.fetchMovies(page + 1)}
          >
            More movies
          </Button>
        )}
      </div>
    );
  }
}
