import { Component } from 'react';
import './SearchBar.scss';

export default class SearchBar extends Component {
  state = {
    query: '',
  };

  handleInput = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSubmit = e => {
    const { query } = this.state;
    e.preventDefault();

    this.props.onSubmit(query);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="MoviesPage-form">
          <input
            className="MoviesPage-input"
            type="text"
            value={this.state.query}
            onChange={this.handleInput}
            placeholder="Search movie"
          ></input>
          <button className="MoviesPage-button" type="submit">
            Search
          </button>
        </form>
      </>
    );
  }
}
