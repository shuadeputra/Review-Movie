import React, { Component } from 'react'
import Navbar from './Navbar';
import axios from 'axios';

class ListProduct extends Component {
  
  componentDidMount(){

    axios.get('http://localhost:8000/')
    .then((respone) => {
      console.log(respone.data)
        // self.setState({ dataKu1: respone.data, })
        
      })
    }

  
  
  render() {
    
    return (
      <div>
        <Navbar />

        <div className="container">
          <div className="col-md-10 col-md-offset-1">

            <table className="table table-striped table-hover ">
              <thead>
                <tr>
                  <th>Nomor</th>
                  <th>Nama</th>
                  <th>Harga</th>
                  <th>Jumlah</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Sempak</td>
                  <td>Rp.5000</td>
                  <td>
                    <button className="btn btn-danger btn-md">Tambah</button>
                  </td>
                  <td style={{ margin: '0 auto' }}>
                    <input type="number" style={{width:"40px"}} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    )
  }
}
export default ListProduct;