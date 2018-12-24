import React, { Component } from 'react';
import SearchBar from './containers/SearchBar';
import WeatherList from './containers/WeatherList';
import style from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={style.main}>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default App;
