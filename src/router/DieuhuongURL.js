import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
import Home from '../component/user/Home';
import InforUser from '../component/user/InforUser';
import Login from '../component/user/Login';
import Register from '../component/user/Register';
import ShoppingCart from '../component/user/ShoppingCart';
  
class DieuhuongURL extends Component {
    render() {
        return (
                <div>
                    <Route exact path="/" component={Home} />
                    <Route  path="/login" component={Login} />
                    <Route  path="/register" component={Register} />
                    <Route  path="/infor" component={InforUser} />
                    <Route  path="/shoppingCart" component={ShoppingCart} />
                </div>
        );
    }
}

export default DieuhuongURL;