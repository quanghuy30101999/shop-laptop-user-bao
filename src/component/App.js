import './../App.css';
import React, { Component } from 'react';
import Menu from './Menu';
import DieuhuongURL from '../router/DieuhuongURL';
import { BrowserRouter} from 'react-router-dom';
import Header from './user/home/Header';
class App extends Component {
  render() {
    return (
        <BrowserRouter >
          <DieuhuongURL />
        </BrowserRouter >
    );
  }
}

export default App;

