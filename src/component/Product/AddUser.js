import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

class AddUser extends Component {
  data={

  }
  cate = {};
  constructor(props) {
    super(props);
    this.state={
      trangThaiChinhSua : false,
      themThanhCong : false
    }
  }
  componentDidMount(){
    axios.get(`https://shop-laptop-2020.herokuapp.com/v1/categories`)
      .then(res => {
        this.cate = res.data;
      })
      .catch(error => console.log(error));
}
      setTrangThai  = () =>{
      if(this.state.trangThaiChinhSua ===false){
        this.setState({
          trangThaiChinhSua : true
        })
      }
      else{
        this.setState({
          trangThaiChinhSua : false
        })
      }
      }
      isChange = (e) =>{
        const name =e.target.name;
        const value =e.target.value;
        this.setState({
          [name] : value
        })
        
      }
      
      
      isFileChange = (e) =>{
        const value=e.target.files
        this.setState({
         picture : {url : value}
        })
        console.log(value)
      }
      sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      async addProduct (){
        this.setTrangThai();
        axios({
          method: 'post',
          url: 'https://shop-laptop-2020.herokuapp.com/v1/products',
          data: this.state
        });
        await this.sleep(1000);
        this.props.getProduct();
      }
      
  check = () =>{
    if(this.state.trangThaiChinhSua ===true){
       return (

         <div className="adduser col-7">
          <div className="card border-primary " >
            <div className="card-header text-center">Thêm sản phẩm hệ thống</div>
            <div className="card-body ">
              <div className="btn-group mb-2">
                <label className="label_input" htmlFor="" >Nhập tên :</label>
                <input type="text"
                  className="form-control nhapvao" onChange={(e) =>this.isChange(e)} name="name"   placeholder="Nhập tên" />
              </div>
              <div className="btn-group mb-2">
                <label className="label_input" htmlFor="">Nhập giá :</label>
                <input type="text" onChange={(e) =>this.isChange(e)}
                  className="form-control nhapvao" name="price"   placeholder="Nhập điện thoại" />
              </div>
              <div className="btn-group mb-2">
                <label className="label_input" htmlFor="">Nhập số lượng:</label>
                <input type="text" onChange={(e) =>this.isChange(e)}
                  className="form-control nhapvao" name="quantity"   placeholder="Nhập điện thoại" />
              </div>
              <div className="btn-group mb-2">
                <label className="label_input" htmlFor="">Nhập ram :</label>
                <input type="text" onChange={(e) =>this.isChange(e)}
                  className="form-control nhapvao" name="ram"   placeholder="Nhập điện thoại" />
              </div>
              <div className="btn-group mb-2">
                <label className="label_input" htmlFor="">Nhập bộ nhớ :</label>
                <input type="text" onChange={(e) =>this.isChange(e)}
                  className="form-control nhapvao" name="memory"   placeholder="Nhập điện thoại" />
              </div>
              <div className="btn-group mb-2">
                <label className="label_input" htmlFor="">Chọn ảnh :</label>
                <input type="file" onChange={(e) =>this.isFileChange(e)} className="form-control-file" name="picture"  placeholder=""  />
              </div>
              <div className="btn-group nhapvao mb-2">
                <label className="label_input " htmlFor="">Chọn hãng :</label>
                <select  onChange={(e) =>this.isChange(e)}  className="form-control selcet" name="category_id" >
                  {this.cate.data.map((x,y) => (
                     <option key={y} value={x.id}>{x.name}</option>
                  ))
                  }
                </select>
              </div>
              <div className="container text-center">
                <button className="btn btn-primary mr-4" onClick={() => this.addProduct()}>Thêm mới</button>
                <button className="btn  btn-danger cancle" onClick={()=>this.setTrangThai()}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
       )
     }
    }
    render() {
      console.log(this.state);
        return (
          <div>
            <div className="btn  btn-success them cuatau"  onClick={()=>this.setTrangThai()}><i className="fa fa-plus " aria-hidden="true" > Thêm mới</i> </div>
          {
            this.check()
          }
          </div>
        )
    }
  }

export default AddUser;