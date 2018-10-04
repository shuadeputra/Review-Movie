import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

class Navbar extends Component {

  state={
    seriesName:'',
    search:[]
  }
  onSeriesInputChange = e =>{
    
    Axios.get(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
    .then((response)=>{
      this.setState({search:response.data})
    })
  }


  render() {
    return (
      <div>
      <nav style={{backgroundColor:"green"}} className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link to="/" style={{color:"white"}} className="navbar-brand" href="#">Green Review</Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
            <ul className="nav navbar-nav">
              <li style={{color:"white"}}><Link to="/aboutus">ABOUTUS</Link></li>
            </ul>
              <div className="form-group navbar-form navbar-right" role="search">
                  <input
                    className="form-control"
                    placeholder="Search"
                    defaultValue={this.state.seriesName}
                    type="text"
                    onChange={this.onSeriesInputChange} />
              <Link to={{pathname: '/detail_search', state: {link:this.state.search}}}> <button type="submit" className="btn btn-default">Submit</button></Link>
              </div>
          </div>
        </div>
      </nav>
      </div>
    )
  }
}
export default Navbar