import React, { Component } from 'react';
import axios from 'axios'
import './css/listproduct.css'
class DataCart extends Component {
    data={
        quantity : 1
    }
    tongtien =0;
    constructor(props) {
        super(props);
        this.state={
            tongtien : localStorage.getItem('tongtien')
        }
    }
    deleteItem(id){
        axios({
            method: 'Delete',
            url: `https://shop-laptop-2020.herokuapp.com/v1/order_items/${id}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': JSON.parse(localStorage.getItem('token'))
            }
          }).then( res =>{
              window.location.reload()

          }).catch( error =>{
            return error;
        }
          )
          this.props.getCart();
    }
    tinhTongTien(e,id,price){
        this.data.quantity=e.target.value;
        axios({
            method: 'PUT',
            url: `https://shop-laptop-2020.herokuapp.com/v1/order_items/${id}/quantity`,
            data : this.data,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': JSON.parse(localStorage.getItem('token'))
            }
          }).then( res =>{
            console.log(res);
          }).catch( error =>{
            return error;
        }
          )
          this.props.getCart();
          this.tongtien=0;
          this.props.items.map((x)=>{
             if(x.id !==id){
                     this.tongtien+= x.quantity*x.unit_price
             }
          })
          this.tongtien+=this.data.quantity*price;
          this.setState({
              tongtien : this.tongtien
          })
    }
    tinhTienThamThoi(){
        this.props.items.map((x)=>{
                    this.tongtien+= x.quantity*x.unit_price
         })
         this.setState({
             tongtien : this.tongtien
         })
    }
    componentDidMount(){
    }
    render() {
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
               
                {
                 this.props.items.map((x,y)=>{
                     console.log(x);
                    return(
                        <div className="row motsanpham" key={y}>
                    <div className="col-sm-3">
                        <img src="images/1.jpg" alt="" className="img-fluid myimage" />
                        <div className="btn-group pt-2">
                        <div className="btn btn-outline-danger xoasp" onClick={()=>this.deleteItem(x.id)} style={{marginLeft: '40px'}}>Delete</div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <a href="/" className="tieude">{x.product_name}</a>
                        <div className="noidungsp " style={{fontWeight: 'bold'}}>
                        Balo laptop 13"3 inch Tucano WOV-MB133 <br />
                        Giam giá 1.000.000đ <br />
                        Pin sạc dự phòng giảm 30% khi mua kèm <br />
                        Mua kèm microfosft 365 Personal giá chỉ 690.00đ <br />
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="gia1">{x.unit_price}</div>
                    </div>
                    <div className="col-sm-3">
                        <input type="number" onChange={(e)=>this.tinhTongTien(e,x.id,x.unit_price)} name="quantity" id="" className="soluongsp" min={1} defaultValue={x.quantity} />
                    </div>
                    </div>
                    )
                })
            }
            
            </div>
            </div>

            <div className="col-sm-4" id="tinhgia">
                <div className="divtrang card card-block">
                <div className="thanhtien">
                    <div className="phai float-xs-right">
                    <div className="trai">Thành tiền</div>
                    <div className="todo">{this.state.tongtien}</div>
                    <div className="gom">(Đã bao gồm VAT nếu có)</div>
                    </div>
                </div>
                </div>
                <a href="/" className="btn btn-block btn-danger" >Tiến hành đặt hàng</a>
            </div>
            </div>
            
      </div>
        );
    }
}

export default DataCart;