import './App.scss';
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import HomeView from './views/HomeView';
import MoviesDetailView from './views/MovieDetailsPage';
import MoviesPage from './views/MoviesPage';
import AppBar from './components/AppBar';

export default class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <AppBar />
        <Switch>
          <Route exact path={routes.home} component={HomeView} />

          <Route path={routes.movieId} component={MoviesDetailView} />

          <Route path={routes.movies} component={MoviesPage} />
        </Switch>
      </div>
    );
  }
}
