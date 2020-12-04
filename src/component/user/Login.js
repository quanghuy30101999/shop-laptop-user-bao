import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './css/login.css'
import axios from 'axios'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            email : '',
            passsword : '',
            isRed : false
        }
    }
    
    isChange = (e) =>{
        const name=e.target.name;
        const value=e.target.value;
        this.setState({
            [name] : value
        })
    }
    login() {
        axios({
            method: 'POST',
            url: 'https://shop-laptop-2020.herokuapp.com/v1/login',
            data: {
                email: this.state.email,
                password: this.state.password
            },
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => {
            localStorage.setItem('token', JSON.stringify(res.data['token']))
            localStorage.setItem('idUser', JSON.stringify(res.data['user'].id))
            this.setState({
                isRed : true
            })
        }).catch(error => {
            console.log(error);
        });
    }
    render() {
        if(this.state.isRed === true){
            return <Redirect to='/' / >
        }
        return (
            <div className="wrapper">
                <div className="upup">
                    <a href="/" className="trai">
                    <i className="fa fa-home" />
                    <span>BKLaptop</span>
                    </a>
                    <span className="dangnhap">Đăng Nhập</span>
                </div>
                <div className="backgr">
                    <div className="formdn">
                    <div className="card border-primary ">
                        <div className="card-header text-center">Đăng Nhập</div>
                        <div className="card-body ">
                        <input onChange={(e)=>this.isChange(e)} type="text" className="form-control mb-4" name="email" placeholder="Email/Số điện thoại/Tên đăng nhập" />
                        <input onChange={(e)=>this.isChange(e)} type="password" className="form-control " name="password" placeholder="Mật khẩu" />
                        </div>
                        <div className="btn btn-block btn-danger dn mb-2" onClick={()=>this.login()}>Đăng Nhập</div>
                        <a href="/" className="quenmk">Quên mật khẩu</a>
                        <span className="ffff mb-2">------------- HOẶC --------------</span>
                        <div className="dktk mb-4">Bạn chưa có tài khoản ?<Link to="/register" className="dndn">Đăng Ký</Link></div>
                    </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Login;