import React, { Component } from 'react'
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import Axios from 'axios';

class detail extends Component {

  state={
    judul:"",
    genres:"",
    rating:"",
    summary:"",
    image:"",
    language:"",
    premiered:"",
    bestmovie:[],
    bestmovie_left:[],
  }

  componentDidMount(){
    var link = this.props.location.state.link
    
    Axios.get(`${link}`)
    .then((response)=>{
      if(response.data.image === null){
        this.setState({
          judul:response.data.name,
          genres:response.data.genres[1],
          rating:response.data.rating.average,
          summary:response.data.summary,
          image: "http://nulldefinition.com/wp-content/uploads/2016/09/null_logo-300x300.png",
          language:response.data.language,
          premiered:response.data.premiered,
        })
      } else {
      this.setState({
        judul:response.data.name,
        genres:response.data.genres[1],
        rating:response.data.rating.average,
        summary:response.data.summary,
        image: response.data.image.original,
        language:response.data.language,
        premiered:response.data.premiered,
      })
    }
    })

    Axios.get("http://api.tvmaze.com/shows")
    .then((response)=>{
      var bestmovie = []
      for(var i=15; i<19; i++){
        bestmovie.push(response.data[i])
      }

      var bestmovie_left=[]
      for(i=19; i<23; i++){
        bestmovie_left.push(response.data[i])
      }

      this.setState({bestmovie:bestmovie, bestmovie_left:bestmovie_left})
    })

  }

  pick (obj){
    if(obj !== undefined){
    Axios.get(`${obj}`)
    .then((response)=>{
      if(response.data.image === null){
        this.setState({
          judul:response.data.name,
          genres:response.data.genres[1],
          rating:response.data.rating.average,
          summary:response.data.summary,
          image: "http://nulldefinition.com/wp-content/uploads/2016/09/null_logo-300x300.png",
          language:response.data.language,
          premiered:response.data.premiered,
        })
      } else {
      this.setState({
        judul:response.data.name,
        genres:response.data.genres[1],
        rating:response.data.rating.average,
        summary:response.data.summary,
        image: response.data.image.original,
        language:response.data.language,
        premiered:response.data.premiered,
      })
    }
    })
  }
  }

  render() {

    const data = this.state.bestmovie.map((item, index) => {
      var image = item.image.medium
      var link = item._links.self.href // dipakai untuk pindah ke halaman berikutnya
      var title = item.name
      var rating = item.rating.average
      var genres = item.genres[2]
    
      return <div key={index} className="col-sm-3">
      <div className="col-item">
        <div className="photo">
          <img onClick={()=>this.pick(link)} src={image} className="img-responsive" alt="a" />
        </div>
        <div className="info">
          <div className="row">
            <div className="price col-md-12">
            <h5><b>{title}</b></h5>
             <span>{genres}</span>  || <span className="glyphicon glyphicon-star" /> <span>{rating}</span>
            </div>
        </div>
        </div>
      </div>
    </div>
    })

    const data2 = this.state.bestmovie_left.map((item, index) => {
      var image = item.image.medium
      var link = item._links.self.href // dipakai untuk pindah ke halaman berikutnya
      var title = item.name
      var rating = item.rating.average
      var genres = item.genres[2]
    
      return <div key={index} className="col-sm-3">
      <div className="col-item">
        <div className="photo">
          <img onClick={()=>this.pick(link)} src={image} className="img-responsive" alt="a" />
        </div>
        <div className="info">
          <div className="row">
            <div className="price col-md-12">
            <h5><b>{title}</b></h5>
             <span>{genres}</span>  || <span className="glyphicon glyphicon-star" /> <span>{rating}</span>
            </div>
        </div>
        </div>
      </div>
    </div>
    })



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
              <h4>Genres : <span>{this.state.genres}</span></h4>
              <h4>language : <span>{this.state.language}</span></h4>
              <div className="rating">
                <span className="glyphicon glyphicon-star" />
                <span> ({this.state.rating} rating)</span>
                <span> ({this.state.premiered})</span>
            </div><br/>
            <p dangerouslySetInnerHTML={{__html:  this.state.summary }} ></p>
           <Link to={{pathname: '/episodelist', state: {link:this.props.location.state.link}}}> <button className="btn btn-success">Episode List</button></Link>
            </div>
          </div>
        </div>


<div className="container">
        <div className="row">
          <div className="row">
            <div className="col-md-9">
              <h3>You May Also Like</h3>
            </div>
            <div className="col-md-3">
              {/* Controls */}
              <div className="controls pull-right hidden-xs">
                <span className="left fa fa-chevron-left btn btn-success" href="#carousel-example" data-slide="prev">Back</span> &nbsp;<span className="right fa fa-chevron-right btn btn-success" href="#carousel-example" data-slide="next">Next</span>
              </div>
            </div>
          </div>
          <div id="carousel-example" className="carousel slide hidden-xs" data-ride="carousel">
            {/* Wrapper for slides */}
            <div className="carousel-inner">
              <div className="item active">
                <div className="row">

                  {data}
                </div>
              </div>
              
              <div className="item">
                <div className="row">
                 
                 {data2}
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <section className="container-fluid" style={{ backgroundColor: "green" }} id="foot5">
          <h4 className="text-center text-muted" style={{ color: "white" }}>Copyrights © 2018 </h4>
        </section>
      </div>
    )
  }
}
export default detail;