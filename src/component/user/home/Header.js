import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css'
import axios from 'axios'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state={
            trangThaiDangNhap : false,
            hienThiUser : false
        }
    }
    componentDidMount(){
        if(localStorage.getItem('idUser') !== null){
            const id=JSON.parse(localStorage.getItem('idUser'));
            axios.get(`https://shop-laptop-2020.herokuapp.com/v1/users/${id}`)
            .then(res => {
              this.setState({
                  user: res.data.user,
                  trangThaiDangNhap: true
              })
            })
            .catch(error => console.log(error));
          }
            
        }
   
    
    kiemTraDangNhap(){
        if(this.state.trangThaiDangNhap === false)
            return (
                <div className="up">
                    <Link to="/login"  >Đăng Nhập</Link> |
                    <Link to="/register" > Đăng Ký </Link>
                </div>
            )
        else return (
            <a href="/" className="user" onClick={(e)=>this.hienThiThongTinUser(e)}>
                <span>Hi, {this.state.user.name}</span>
                <i className="fa fa-user-circle"></i>
            </a>
        )
    }
    hienThiThongTinUser(e){
        e.preventDefault();
        this.setState({
            hienThiUser : !this.state.hienThiUser
        })
    }
    logOut(e){
        e.preventDefault();
        localStorage.removeItem('idUser')
        localStorage.removeItem('token')
        this.setState({
            hienThiUser : !this.state.hienThiUser,
            trangThaiDangNhap : false
        })
    }
    checkHienThiUser(){
        if(this.state.hienThiUser === true){
            return (
                <ul className="inforUser">
                    <li onClick={(e) =>this.hienThiThongTinUser(e)}><Link to="/infor">Thông tin tài khoản</Link></li>
                    <li onClick={(e) =>this.hienThiThongTinUser(e)}><Link to="/infor">Đơn hàng của tôi</Link></li>
                    <li onClick={(e) =>this.logOut(e)}>Đăng xuất</li>
                </ul>
            )
        }
    }
    render() {
        return (
            <div className="header">
                {   this.kiemTraDangNhap()
                }
                {
                    this.checkHienThiUser()
                }
                <div className="bottom">
                    <a href="/" className="traii">
                        <i className="fa fa-home" />
                        <span>BKLaptop</span>
                    </a>
                    <div className="search">
                    <input type="text" placeholder="Nhập từ khóa cần tìm" className="txtSearch" />
                    <a href="/"><i className="fa fa-search" /></a>
                    </div>
                    <a href="/" className="cart">
                    <i className="fa fa-shopping-cart"> Giỏ hàng</i>
                    <span className="soluong">0</span>
                    </a>
                </div>
            </div>

        );
    }
}

export default Header;