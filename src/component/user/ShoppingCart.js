import React, { Component } from 'react';
import DataCart from './DataCart';
import Header from './home/Header';
import axios from 'axios'
class ShoppingCart extends Component {
    tongtien = 0;
    state={
        products: []
    }
    constructor(props) {
        super(props);
        this.cart_id = JSON.parse(localStorage.getItem('idUser'));
        
    }
    
    getCart(){
        axios({
            method: 'get',
            url: `https://shop-laptop-2020.herokuapp.com/v1/users/${this.cart_id}/cart`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': JSON.parse(localStorage.getItem('token'))
            }
          }).then( res =>{
                this.tongtien = 0;
                res.data.cart.order_items.map((x)=>{
                    this.tongtien+=x.quantity*x.unit_price;
                })
                localStorage.setItem('tongtien',this.tongtien)
                this.setState({
                    products : res.data.cart.order_items,
                })
                
                
          }).catch( error =>{
            return error;
        }
          )
    }
    componentDidMount(){
        this.getCart();
    }
    render() {
        return (
            <div>
                <Header soluong={this.state.products.length}/>
                <DataCart items={this.state.products} getCart={()=>this.getCart()} tongtien={this.state.tongtien}/>
            </div>
        );
    }
}

export default ShoppingCart;