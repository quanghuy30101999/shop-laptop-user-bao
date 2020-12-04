import React, { Component } from 'react';
import axios from 'axios'
import './css/listproduct.css'
class DataCart extends Component {

    constructor(props) {
        super(props);
        this.cart_id = JSON.parse(localStorage.getItem('idUser'));
        this.state={
            products: []
        }
    }
    
    
    componentDidMount(){
        axios({
            method: 'get',
            url: `https://shop-laptop-2020.herokuapp.com/v1/users/${this.cart_id}/cart`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': JSON.parse(localStorage.getItem('token'))
            }
          }).then( res =>{
                this.setState({
                    products : {...res.data.cart.order_items}
                })

          }).catch( error =>{
            return error;
        }
          )
    }
    render() {
        console.log(this.state.products)
        return (
            <div className="container pt-2 card card-block col-sm-10" id="noidunggiohang">
            <div className="row tieude col-sm-12">
            <div>
                <a href="/" style={{color: 'blue'}}> &lt; Mua thêm sản phẩm khác</a>
            </div>
            <div style={{marginLeft: '480px'}}>
                Giỏ hàng của bạn
            </div>
            </div>
            <hr />
            <div className="row col-sm-12">
                
            <div className="row dssanpham col-sm-8">
            <div className="card card-block">
               
                {/* {
                    this.state.products.order_items.map((x,y)=>{
                        return(
                            <div className="row motsanpham">
                        <div className="col-sm-3">
                            <img src="images/1.jpg" alt="" className="img-fluid myimage" />
                            <div className="btn-group pt-2">
                            <div className="btn btn-outline-danger xoasp" style={{marginLeft: '40px'}}>Delete</div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <a href="/" className="tieude">{x.name}</a>
                            <div className="noidungsp " style={{fontWeight: 'bold'}}>
                            Balo laptop 13"3 inch Tucano WOV-MB133 <br />
                            Giam giá 1.000.000đ <br />
                            Pin sạc dự phòng giảm 30% khi mua kèm <br />
                            Mua kèm microfosft 365 Personal giá chỉ 690.00đ <br />
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="gia1">{x.price}</div>
                        </div>
                        <div className="col-sm-3">
                            <input type="number" name="" id="" className="soluongsp" min={1} defaultValue={1} />
                        </div>
                        </div>
                        )
                    })
                }
             */}
            </div>
            </div>

            <div className="col-sm-4" id="tinhgia">
                <div className="divtrang card card-block">
                <div className="dongtinhgia">
                    <div className="phai float-xs-right">453.000đ</div>
                    <div className="trai">Tạm tính</div>
                </div>
                <div className="thanhtien">
                    <div className="phai float-xs-right">
                    <div className="todo">453.000đ</div>
                    <div className="gom">(Đã bao gồm VAT nếu có)</div>
                    </div>
                    <div className="trai">Thành tiền</div>
                </div>
                </div>
                <a href="#" className="btn btn-block btn-danger" >Tiến hành đặt hàng</a>
            </div>
            </div>
            
      </div>
        );
    }
}

export default DataCart;