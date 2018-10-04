import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Axios from 'axios';

class detail_search extends Component {

  state={
    searchmovie:[],
    seriesName:'',
  }

  componentDidMount(){
    var link = this.props.location.state.link
    this.setState({searchmovie: link})
  }


  onSeriesInputChange = e =>{
    Axios.get(`http://api.tvmaze.com/search/shows?q=${e.input.value}`)
    .then((response)=>{
      if(response.data !== undefined){
        this.setState({searchmovie:response.data})
      }
    })

  }




  render() {

        // start POPULARITY
        var data = this.state.searchmovie.map((item, index) => {
          if(item.show.image === null){
            var image = "http://nulldefinition.com/wp-content/uploads/2016/09/null_logo-300x300.png"
          }else{
            image = item.show.image.medium
          }
            var link = item.show._links.self.href // dipakai untuk pindah ke halaman berikutnya
            var title_all =item.show.name.substr(0, 20)
            var title = title_all
            var rating = item.show.rating.average
            var genres = item.show.genres[1]
            
             return <div key={index} className="col-md-3 col-sm-6">
              <span className="thumbnail">
                <center>
                <h4><b>{title}</b></h4>
                <Link  to={{pathname: '/detail', state: {link:link}}}> <img src={image} alt="..." /></Link>
                  <hr className="line" />
                  <div className="ratings">
                   <span>{genres}</span>  || <span className="glyphicon glyphicon-star" /> <span>{rating}</span>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                    <Link  to={{pathname: '/detail', state: {link:link}}}><button className="btn btn-success col-md-12">Details</button></Link>
                    </div>
                  </div>
                </center>
              </span>
            </div>  

          })
    
          // end POPULARITY
    
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
                    ref="input" />
               <button onClick={()=>this.onSeriesInputChange(this.refs)} type="submit" className="btn btn-default">Submit</button>
              </div>
          </div>
        </div>
      </nav>

        <div className="container">
        <hr/><h1>Search Result</h1>

          <div className="row">
            {/* BEGIN  */}
            {data}
            {/* END  */}
          </div>
        </div>



        <section className="container-fluid" style={{ backgroundColor: "green" }} id="foot5">
          <h4 className="text-center text-muted" style={{ color: "white" }}>Copyrights © 2018 </h4>
        </section>
      </div>
    )
  }
}
export default detail_search;