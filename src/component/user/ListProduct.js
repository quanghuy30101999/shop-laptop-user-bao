import React, { Component } from 'react';
import './css/listproduct.css'
import axios from 'axios'
class ListProduct extends Component {
    constructor(props) {
        super(props);
    }
    datHang(id,name,price,card_id){
        console.log(id + " " +name + " " + price + " " + card_id)
        
        this.setState({
            product_id : id,
            product_name : name,
            quantity : 1,
            unit_price : price,
            cart_id : card_id
        })
        axios({
            method: 'Post',
            url: 'https://shop-laptop-2020.herokuapp.com/v1/order_items/',
            data: this.state,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': JSON.parse(localStorage.getItem('token'))
            }
          }).then( res =>{
              console.log(res.status);
              console.log(res.message);

          }).catch( error =>{
            return error;
        }
          )
    }
    render() {
        console.log(this.props.products);
        
        return (
                 <div className="container card card-block col-sm-8" id="noidung">
                    <div className="row dssanpham col-sm-12">
                    <div className="row sanphamkhac">
                        <div className="col-sm-12 ">
                        <h3 className="tdto">Danh sách sản phẩm</h3>
                        </div>
                        {
                            this.props.products.map((x,y)=>{
                                return(
                                <div className="col-sm-4 mb-2 motsp" key={y}>
                                    <div className="card ">
                                        <img src="images/1.jpg" alt="" className="img-fluid myimamge" />
                                        <div className="card-block ttsp">
                                         <a href="/" className="tdspkhac">{x.name}</a>
                                        <b>{x.price}đ</b>
                                        <div className="btn btn-outline-info btn-block addCart" onClick={()=>this.datHang(x.id,x.name,x.price,JSON.parse(localStorage.getItem('data_user')).user.cart.id)}>Thêm vào giỏ hàng</div>
                                        </div>
                                    </div>
                                </div>
                                )
                            }
                            )
                        }
                    </div>
                    </div>
                </div>
        );
    }
}

export default ListProduct;