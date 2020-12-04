import React, { Component } from 'react';
import Header from './home/Header';
import ListProduct from './ListProduct';
import axios from 'axios'
class Home extends Component {
    state = {
        products: [],
      }
    getProduct(){
        axios.get(`https://shop-laptop-2020.herokuapp.com/v1/products`)
          .then(res => {
            const product = res.data;
            this.setState({products : product.data})
            console.log(product);
          })
          .catch(error => console.log(error));
    }
    componentDidMount(){
        this.getProduct();
      }
    render() {
        return (
            <div>
                <Header />
                <ListProduct products={this.state.products}/>
            </div>
        );
    }
}

export default Home;