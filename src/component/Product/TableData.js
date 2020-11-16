import React, { Component } from 'react';
import axios from 'axios';
class TableData extends Component {
  dem=0;
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
 
  async isDeleteProduct(x){
    axios.delete(`https://shop-laptop-2020.herokuapp.com/v1/products/${x}`);
    await this.sleep(1000);
    this.props.getProduct();
    
  }
    render() {

        return (
            <div className="col-12">
          <table className="table table-hover table-striped table-inverse ">
            <thead className="thead-inverse">
              <tr>
                <th>Mã</th>
                <th>Hãng</th>
                <th>Tên Sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.products.map((x,y)=>{
                  
                  return (
                    <tr key={y}>
                      <td >{x.id}</td>
                      <td>{x.category.name}</td>
                      <td>{x.name}</td>
                      <td>{x.price}</td>
                      <td>{x.quantity}</td>
                      <td>
                        <div className="btn btn-warning mr-1 sua">
                          <i className="fa fa-edit ">  Sửa </i>
                        </div>
                        <div className="btn btn-danger sua" onClick={() => this.isDeleteProduct(x.id)}>
                          <i className="fa fa-edit ">  Xóa</i>
                        </div>
                      </td>
                    </tr>
                  )
                }
                )
              }
            </tbody>
          </table>
        </div>

                );
            }
        }

        export default TableData;