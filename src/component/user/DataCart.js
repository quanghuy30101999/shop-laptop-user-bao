import React, { Component } from 'react';

class DataCart extends Component {
    render() {
        return (
            <div className="container pt-2 card card-block col-sm-8" id="noidung">
        <div className="row tieude col-sm-12">
          <div className>
            <a href style={{color: 'blue'}}> &lt; Mua thêm sản phẩm khác</a>
          </div>
          <div className style={{marginLeft: '480px'}}>
            Giỏ hàng của bạn
          </div>
        </div>
        <hr />
        <div className="row dssanpham col-sm-12">
          <div className="card card-block">
            <div className="row motsanpham">
              <div className="col-sm-3">
                <img src="images/1.jpg" alt="" className="img-fluid myimage" />
                <div className="btn-group pt-2">
                  <div className="btn btn-outline-danger xoasp" style={{marginLeft: '40px'}}>Delete</div>
                </div>
              </div>
              <div className="col-sm-4">
                <a href className="tieude">Apple Macbook Air 2020 - 13 Inchs (i3-10th/ 8GB/ 256GB) - Gold</a>
                <div className="noidungsp " style={{fontWeight: 'bold'}}>
                  Balo laptop 13"3 inch Tucano WOV-MB133 <br />
                  Giam giá 1.000.000đ <br />
                  Pin sạc dự phòng giảm 30% khi mua kèm <br />
                  Mua kèm microfosft 365 Personal giá chỉ 690.00đ <br />
                </div>
              </div>
              <div className="col-sm-2">
                <div className="gia1">129.000đ</div>
                <div className="badge badge-danger">-12%</div>
              </div>
              <div className="col-sm-3">
                <input type="number" name id className="soluongsp" min={1} defaultValue={1} />
              </div>
            </div>
            {/* hết 1 sản phẩm */}
            <div className="row motsanpham">
              <div className="col-sm-3">
                <img src="images/1.jpg" alt="" className="img-fluid myimage" />
                <div className="btn-group pt-2">
                  <div className="btn btn-outline-danger xoasp" style={{marginLeft: '40px'}}>Delete</div>
                </div>
              </div>
              <div className="col-sm-4">
                <a href className="tieude">Apple Macbook Air 2020 - 13 Inchs (i3-10th/ 8GB/ 256GB) - Gold</a>
                <div className="noidungsp " style={{fontWeight: 'bold'}}>
                  Balo laptop 13"3 inch Tucano WOV-MB133 <br />
                  Giam giá 1.000.000đ <br />
                  Pin sạc dự phòng giảm 30% khi mua kèm <br />
                  Mua kèm microfosft 365 Personal giá chỉ 690.00đ <br />
                </div>
              </div>
              <div className="col-sm-2">
                <div className="gia1">129.000đ</div>
                <div className="badge badge-danger">-12%</div>
              </div>
              <div className="col-sm-3">
                <input type="number" name id className="soluongsp" min={1} defaultValue={1} />
              </div>
            </div>
          </div>
          <div className="col-sm-12" id="tinhgia">
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
            <a href="#" className="btn btn-block btn-danger">Tiến hành đặt hàng</a>
          </div>
          <div className="row sanphamkhac">
            <div className="col-sm-12 py-2">
              <h3 className="tdto">Sản phẩm khác</h3>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <img src="images/1.jpg" alt="" className="img-fluid" />
                <div className="card-block">
                  <a href className="tdspkhac">Apple Macbook Air 2020 - 13 Inchs (i3-10th/ 8GB/ 256GB) - Gold</a>
                  <p className="card-text mota">Sản phẩm của apple</p>
                  <b>129.000đ</b>
                  <a href="#" className="btn btn-outline-info btn-block">Mua ngay</a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <img src="images/1.jpg" alt="" className="img-fluid" />
                <div className="card-block">
                  <a href className="tdspkhac">Apple Macbook Air 2020 - 13 Inchs (i3-10th/ 8GB/ 256GB) - Gold</a>
                  <p className="card-text mota">Sản phẩm của apple</p>
                  <b>129.000đ</b>
                  <a href="#" className="btn btn-outline-info btn-block">Mua ngay</a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <img src="images/1.jpg" alt="" className="img-fluid" />
                <div className="card-block">
                  <a href className="tdspkhac">Apple Macbook Air 2020 - 13 Inchs (i3-10th/ 8GB/ 256GB) - Gold</a>
                  <p className="card-text mota">Sản phẩm của apple</p>
                  <b>129.000đ</b>
                  <a href="#" className="btn btn-outline-info btn-block">Mua ngay</a>
                </div>
              </div>
            </div>
          </div>
          {/* Hết cột trái */}
        </div>
      </div>
        );
    }
}

export default DataCart;