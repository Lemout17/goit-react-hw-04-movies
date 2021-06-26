import { Component } from 'react';
import MoviesPageQuery from '../components/MoviesPageQuery';
import API from '../services/moviesApi';
import SearchBar from '../components/SearchBar';
import queryString from 'query-string';

class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
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

    API.getMovieByQuery(query).then(data => {
      this.setState({
        movies: data,
      });
    });
  }

  onChangeQuery = query => {
    this.setState({
      query,
      movies: [],
    });
  };

  getQueryFromProps = props => queryString.parse(props.location.search);

  render() {
    const { movies, base_url } = this.state;

    return (
      <div className="Movies-container">
        <SearchBar onSubmit={this.onChangeQuery} />

        {movies && <MoviesPageQuery movies={movies} baseUrl={base_url} />}
      </div>
    );
  }
}

export default MoviesPage;
