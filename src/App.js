import './App.scss';
import { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import HomeView from './views/HomeView';

export default class App extends Component {
  state = {};

  render() {
    return <Route exact path="/" component={HomeView} />;
  }
}
