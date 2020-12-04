import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './css/register.css'
import axios from 'axios'
class Register extends Component {
    constructor(props) {
        super(props);
        this.state={
            isRed: false
        }
    }
    
    isChange = (e) =>{
        const name=e.target.name;
        const value=e.target.value;
        this.setState({
            [name] : value
        })
    }
    registerUser(){
        axios({
            method: 'post',
            url: 'https://shop-laptop-2020.herokuapp.com/v1/users',
            data: this.state
          }).then( res =>{
            this.setState({
                isRed : true
            })
          })
    }
    render() {
        if(this.state.isRed === true){
            return <Redirect to="/login" />
        }
        return (
            <div className="wrapper">
                <div className="upup">
                    <a href="/" className="trai">
                    <i className="fa fa-home" />
                    <span>BKLaptop</span>
                    </a>
                    <span className="dangnhap">Đăng Ký</span>
                </div>
                <div className="backgr">
                    <div className="formdn">
                    <div className="card border-primary ">
                        <div className="card-header text-center">Đăng Ký</div>
                        <div className="card-body ">
                        <input type="text" onChange={(e)=>this.isChange(e)} className="form-control mb-2" name="name" placeholder="Nhập tên" />
                        <input type="text" onChange={(e)=>this.isChange(e)} className="form-control mb-2" name="email" placeholder="Nhập email" />
                        <input type="text" onChange={(e)=>this.isChange(e)} className="form-control mb-2" name="phone" placeholder="Số điện thoại" />
                        <input type="text" onChange={(e)=>this.isChange(e)} className="form-control mb-2" name="address" placeholder="Nhập địa chỉ" />
                        <input type="password" onChange={(e)=>this.isChange(e)} className="form-control " name="password" placeholder="Mật khẩu" />
                        </div>
                        <div className="btn btn-block btn-danger dk mb-2" onClick={(e)=>this.registerUser(e)}>Đăng Ký</div>
                        <span className="ffff mb-2">------------- HOẶC --------------</span>
                        <div className="dktk mb-4">Bạn đã có tài khoản ?<Link to="/login" className="dndn">Đăng Nhập</Link></div>
                    </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Register;