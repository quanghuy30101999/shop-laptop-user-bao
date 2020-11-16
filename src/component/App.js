import './../App.css';
import React, { Component } from 'react';
import Menu from './Menu';
import DieuhuongURL from '../router/DieuhuongURL';
import { BrowserRouter} from 'react-router-dom';
class App extends Component {
  render() {
    return (
        <BrowserRouter >
        <div className="row">
          <div className="col-2">
            <Menu />
          </div>
          <DieuhuongURL />

        </div>
        </BrowserRouter >
    );
  }
}

export default App;

