import React, { Component } from 'react'
import Navbar from './Navbar';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class episode extends Component {

  
  state={
    judul:"",
    genres:"",
    summary:"",
    image:"",
    premiered:"",
    season:"",
  }
  
  componentDidMount(){
    var link = this.props.location.state.link

    Axios.get(`${link}`)
    .then((response)=>{

      if(response.data.image == null){
        this.setState({
          image:"http://nulldefinition.com/wp-content/uploads/2016/09/null_logo-300x300.png",
          judul:response.data.name,
          premiered:response.data.airdate,
          summary:response.data.summary,
          runtime:response.data.runtime,
          season:response.data.season,
        })
      } else{
      this.setState({
        image:response.data.image.original,
        judul:response.data.name,
        premiered:response.data.airdate,
        summary:response.data.summary,
        runtime:response.data.runtime,
        season:response.data.season,
      })
    }
    })

  }

  render() {

    return (
      <div>
        <Navbar />

        <div className="modal-body container">
          <div className="row">
            <div className="col-md-4 product_img">
              <img style={{width:"80%", height:"100%"}} src={this.state.image} className="img-responsive" alt='....' />
            </div>
            <div className="col-md-6 product_content">
            <h1>{this.state.judul}</h1>
              <h4>Runtime : <span>{this.state.runtime}</span></h4>
              <h4>Season : <span>{this.state.season}</span></h4>
              <div className="rating">
                <span> ({this.state.premiered})</span>
            </div><br/>
            <p dangerouslySetInnerHTML={{__html:  this.state.summary }} ></p>
            <Link to={{pathname: '/episodelist', state: {link:this.props.location.state.back}}}> <button className="btn btn-success">Episode List</button></Link>
            </div>
          </div>
        </div> 
        
        <br/><br/><br/><br/>
        <br/><br/><br/><br/>
        <br/><br/><br/><br/>

      <section className="container-fluid" style={{ backgroundColor: "green" }} id="foot5">
          <h4 className="text-center text-muted" style={{ color: "white" }}>Copyrights © 2018 </h4>
        </section>
      </div>
    )
  }
}
export default episode