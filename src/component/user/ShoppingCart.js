import React, { Component } from 'react';
import DataCart from './DataCart';
import Header from './home/Header';

class ShoppingCart extends Component {
    render() {
        return (
            <div>
                <Header />
                <DataCart />
            </div>
        );
    }
}

export default ShoppingCart;