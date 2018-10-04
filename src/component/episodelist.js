import React, { Component } from 'react';
import Axios from "axios";
import {Link} from "react-router-dom";
import Navbar from './Navbar';

class episodelist extends Component {

  state={
    episode_list:[]
  }
  componentDidMount(){
    var link = this.props.location.state.link+"/episodes"

    
    Axios.get(`${link}`)
    .then((response)=>{
      this.setState({episode_list:response.data})
    })
  }

  render() {

    const data = this.state.episode_list.map((item, index) => {
      var link = item._links.self.href
      var episode = item.number
      var season = item.season      
      var name = item.name
      return <tr key={index}>
        <td>{index + 1}</td>
        <td>{name}</td>
        <td>{episode}</td>
        <td>{season}</td>
        <td><Link to={{pathname: '/episode', state: {link:link,back:this.props.location.state.link}}}>View</Link></td>
      </tr>
    })

    return (
      <div>
        <Navbar />


      <div className="container">
  <u><h2>Episode List</h2></u>
  <div className="table-responsive">          
  <table className="table">
    <thead>
      <tr>
        <th>No</th>
        <th>Title</th>
        <th>Season</th>
        <th>Number</th>
        <th>View</th>
      </tr>
    </thead>
    <tbody>
        {data}
    </tbody>
  </table>
  </div>
</div>




      <section className="container-fluid" style={{ backgroundColor: "green" }} id="foot5">
          <h4 className="text-center text-muted" style={{ color: "white" }}>Copyrights © 2018 </h4>
        </section>
      </div>
    )
  }
}
export default episodelist