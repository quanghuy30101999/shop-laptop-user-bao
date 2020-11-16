import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
import Product from '../component/Product/Product'
  
class DieuhuongURL extends Component {
    render() {
        return (
                        <Route exact path="/" component={Product} />
        );
    }
}

export default DieuhuongURL;