import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div className="col-12 side-menu">
  {/*- Sidemenu */}
  <div id="sidebar-menu" className="active">
    <ul className="metismenu in" id="side-menu" style={{listStyle: 'none'}}>
      <li>
        <a href="index.html">
          <img src="admin.png" alt="" style={{width: '50px', marginRight: '10px'}} />
          <span style={{fontWeight: 'bold'}}>Admin </span>
        </a>
      </li>
      <li>
        <a href="/">
          <i className="fi-air-play" /> <span> Trang chủ </span>
        </a>
      </li>
      <li>
        <a href="#"><i className="fi-layers" /> <span> Quản lí </span> <span className="menu-arrow" /></a>
        <ul className="nav-second-level collapse" aria-expanded="false">
          <li><a href="apps-calendar.html">Đơn hàng</a></li>
          <li><a href="apps-tickets.html">Sản phẩm</a></li>
          <li><a href="apps-taskboard.html">Danh mục</a></li>
        </ul>
      </li>
      <li>
        <a href="#"><i className="fi-layout" /><span> Tài khoản </span> <span className="menu-arrow" /></a>
        <ul className="nav-second-level collapse" aria-expanded="false">
          <li><a href="email-inbox.html">Người dùng</a></li>
          <li><a href="email-read.html">Read Email</a></li>
          <li><a href="email-compose.html">Compose Email</a></li>
        </ul>
      </li>
      <li>
        <a href="widgets.html">
          <i className="fi-command" /> <span> Thống kê </span>
        </a>
      </li>
      <li>
        <a href="#"><i className="fi-mail" /><span className="badge badge-info float-right">10</span> <span> Liên hệ </span></a>
        <ul className="nav-second-level collapse" aria-expanded="false">
          <li><a href="form-elements.html">Form Elements</a></li>
          <li><a href="form-advanced.html">Form Advanced</a></li>
          <li><a href="form-validation.html">Form Validation</a></li>
          <li><a href="form-pickers.html">Form Pickers</a></li>
          <li><a href="form-wizard.html">Form Wizard</a></li>
          <li><a href="form-mask.html">Form Masks</a></li>
          <li><a href="form-summernote.html">Summernote</a></li>
          <li><a href="form-wysiwig.html">Wysiwig Editors</a></li>
          <li><a href="form-x-editable.html">X Editable</a></li>
          <li><a href="form-uploads.html">Multiple File Upload</a></li>
        </ul>
      </li>
    </ul>
  </div>
  {/* Sidebar */}
</div>

        );
    }
}

export default Menu;