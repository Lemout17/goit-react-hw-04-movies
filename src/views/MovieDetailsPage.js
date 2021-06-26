import { Component, Suspense, lazy } from 'react';
import { Route, NavLink } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails';
import routes from '../routes';
import './MovieDetailsPage.scss';
import API from '../services/moviesApi';
import Loader from 'react-loader-spinner';

const Cast = lazy(() =>
  import('../components/Cast' /* webpackChunkName: "cast-view" */),
);
const Reviews = lazy(() =>
  import('../components/Reviews' /* webpackChunkName: "reviews-view" */),
);

export default class MovieDetailsPage extends Component {
  state = {
    id: null,
    original_title: null,
    overview: null,
    imdb_id: null,
    genres: null,
    poster_path: null,
    release_date: null,
    vote_count: null,
    vote_average: null,
    budget: null,
    revenue: null,
    tagline: null,
    base_url: 'https://image.tmdb.org/t/p/w500',
  };

  async componentDidMount() {
    const movieId = this.props.match.params.movieId;

    const response = await API.getMoviesDetail(movieId);

    this.setState({
      ...response.data,
    });
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    history.push(location?.state?.from || routes.home);
  };

  render() {
    const { match } = this.props;

    const movieId = Number(match.params.movieId);

    const { from } = this?.props?.location?.state || {
      from: { pathname: routes.home },
    };

    const {
      release_date,
      budget,
      original_title,
      tagline,
      vote_average,
      vote_count,
      overview,
      genres,
      poster_path,
      base_url,
      revenue,
      popularity,
    } = this.state;

    return (
      <div className="MovieDetailsPage-container">
        <button
          className="MovieDetails-button"
          type="button"
          onClick={this.handleGoBack}
        >
          {'<< Previous page'}
        </button>

        {original_title && (
          <MovieDetails
            title={original_title}
            date={release_date}
            votea={vote_average}
            votec={vote_count}
            desc={overview}
            genres={genres}
            url={poster_path}
            baseUrl={base_url}
            budget={budget}
            revenue={revenue}
            tag={tagline}
            popularity={popularity}
          />
        )}

        <ul className="MovieCast-list">
          <li className="MovieCast-item">
            <NavLink
              exact
              to={{
                pathname: `${match.url}/cast`,
                state: {
                  from: from,
                },
              }}
              className="MovieDetails-link"
              activeClassName="MovieDetails-link--active"
            >
              Cast
            </NavLink>
          </li>
          <li className="MovieCast-item">
            <NavLink
              to={{
                pathname: `${match.url}/review`,
                state: {
                  from: from,
                },
              }}
              className="MovieDetails-link"
              activeClassName="MovieDetails-link--active"
            >
              Review
            </NavLink>
          </li>
        </ul>

        <Suspense
          fallback={
            <Loader type="Audio" color="#00BFFF" height={80} width={80} />
          }
        >
          <Route
            path={`${match.path}/cast`}
            render={() => <Cast id={movieId} />}
          />
          <Route
            path={`${match.path}/review`}
            render={() => <Reviews id={movieId} />}
          />
        </Suspense>
      </div>
    );
  }
}
