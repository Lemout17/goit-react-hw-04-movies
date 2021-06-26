import './App.scss';
import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import AppBar from './components/AppBar';
import Loader from 'react-loader-spinner';

const HomeView = lazy(() =>
  import('./views/HomeView.js' /* webpackChunkName: "home-page" */),
);
const MoviesDetailView = lazy(() =>
  import('./views/MovieDetailsPage.js' /* webpackChunkName: "movie-details" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage.js' /* webpackChunkName: "movies-page" */),
);

const App = () => (
  <div>
    <AppBar />
    <Suspense
      fallback={<Loader type="Audio" color="#00BFFF" height={80} width={80} />}
    >
      <Switch>
        <Route exact path={routes.home} component={HomeView} />

        <Route path={routes.movieId} component={MoviesDetailView} />

        <Route path={routes.movies} component={MoviesPage} />
      </Switch>
    </Suspense>
  </div>
);

export default App;
