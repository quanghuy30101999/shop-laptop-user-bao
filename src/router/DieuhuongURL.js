import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
import Header from '../component/user/home/Header';
import InforUser from '../component/user/InforUser';
import Login from '../component/user/Login';
import Register from '../component/user/Register';
  
class DieuhuongURL extends Component {
    render() {
        return (
                <div>
                    <Route exact path="/" component={Header} />
                    <Route  path="/login" component={Login} />
                    <Route  path="/register" component={Register} />
                    <Route  path="/infor" component={InforUser} />
                </div>
        );
    }
}

export default DieuhuongURL;