import React, { Component } from 'react';
import AddUser from './AddUser';

class SearchForm extends Component {
  a={};
  isChange = (e) =>{
    this.a =e.target.value;
    console.log(this.a);
  }
    render() {
        return (
          <div>
              <div className="col-12">
                <div className="row">
                  <div className="form-group ">
                  <div className="btn-group " >
                    <input type="text" className="form-control"  placeholder="Nhập từ khóa " onChange={(e) =>this.isChange(e)}/>
                    <div className="btn btn-info tauchinh" onClick={()=>this.props.findProduct(this.a)}><i className="fa fa-search" aria-hidden="true" >  Tìm</i> </div>
                    
                  </div>
                  </div>
                  <AddUser getProduct={()=>this.props.getProduct()}/>
                </div>
               <hr />
              </div>
              </div>
        );
    }
}

export default SearchForm;