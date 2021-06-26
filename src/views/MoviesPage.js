import { Component } from 'react';
import MoviesPageQuery from '../components/MoviesPageQuery';
import API from '../services/moviesApi';
import SearchBar from '../components/SearchBar';
import queryString from 'query-string';
import Loader from 'react-loader-spinner';

class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
    isLoaded: false,
    base_url: 'https://image.tmdb.org/t/p/w500',
  };

  componentDidMount = () => {
    const { query } = this.getQueryFromProps(this.props);

    if (query) {
      this.setState({ query });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;

    if (prevState.query !== this.state.query) {
      this.fetchMovies();
      this.props.history.push({ search: `query=${query}` });
    }
  }

  async fetchMovies() {
    const { query } = this.state;

    this.setState({ isLoaded: true });

    API.getMovieByQuery(query)
      .then(data => {
        this.setState({
          movies: data,
        });
      })
      .finally(() => this.setState({ isLoaded: false }));
  }

  onChangeQuery = query => {
    this.setState({
      query,
      movies: [],
    });
  };

  getQueryFromProps = props => queryString.parse(props.location.search);

  render() {
    const { movies, base_url, isLoaded } = this.state;

    return (
      <div className="Movies-container">
        <SearchBar onSubmit={this.onChangeQuery} />

        {isLoaded && (
          <Loader type="Audio" color="#00BFFF" height={80} width={80} />
        )}

        {movies && <MoviesPageQuery movies={movies} baseUrl={base_url} />}
      </div>
    );
  }
}

export default MoviesPage;
