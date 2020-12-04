import React, { Component } from 'react';
import Header from './Header'
import SearchForm from './SearchForm'
import TableData from './TableData'
import axios from 'axios'
class Product extends Component {
  state = {
    persons: [],
  }
 a={}
  getProduct(){
    axios.get(`https://shop-laptop-2020.herokuapp.com/v1/products`)
      .then(res => {
        const persons = res.data;
        this.setState({persons : persons.data})
      })
      .catch(error => console.log(error));
}
  findProduct(e){
    axios.get(`https://shop-laptop-2020.herokuapp.com/v1/products`,
                    {
                        params: {
                            search: e
                        }
                    }
                )
                .then(res => {
                  const persons = res.data;
                  this.setState({persons : persons.data})
                  console.log(persons);
                })
  }


componentDidMount(){
  this.getProduct();
}
    render() {
      console.log(this.state.persons);
        return (
          <div className="col-9">
            <Header />
            <div className="container">
                <SearchForm getProduct={()=>this.getProduct()}  findProduct={(e)=>this.findProduct(e)}/>
                <TableData  getProduct={()=>this.getProduct()} products={this.state.persons}/>
                {console.log(this.state.persons)}
            </div>
          </div>
        );
    }
}

export default Product;