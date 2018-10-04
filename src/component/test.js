import React, { Component } from 'react'
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import Axios from 'axios';

class test extends Component {
  state = {
    bestmovie: [],
    slider1:"",
    title_slider1:"",
    slider2:"",
    title_slider2:"",
    slider3:"",
    title_slider3:"",
    link_1:'',
    link_2:"",
    limk_3:"",
    three:[]

  }
  componentDidMount(){
    Axios.get("http://api.tvmaze.com/shows")
    .then((response)=>{

      var best = []
      for(var i=0; i<8; i++){
        best.push(response.data[i])
      }
      this.setState({bestmovie: best})

      //  start slider
      var slider = []
      for(i=9; i<12; i++){
        slider.push(response.data[i])
      }

      // console.log(slider[0])
      this.setState({
        slider1:slider[0].image.original,slider2:slider[1].image.original,slider3:slider[2].image.original,
        title_slider1:slider[0].name,title_slider2:slider[1].name,title_slider3:slider[2].name,
        link_1:slider[0]._links.self.href,link_2:slider[1]._links.self.href,link_3:slider[2]._links.self.href
      })
      //  End slider

      // start 3 best 
        var three=[]
        for(i=12; i<15; i++){
          three.push(response.data[i])
        }

        this.setState({three:three})
      // end 3 best
    })
  }


  


  render() {

    // start POPULARITY
    const data = this.state.bestmovie.map((item, index) => {
      var image = item.image.medium
      var link = item._links.self.href // dipakai untuk pindah ke halaman berikutnya
      var title = item.name
      var rating = item.rating.average
      var genres = item.genres[2]

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

      // start fourbase
      const data2 = this.state.three.map((item, index) => {
        var image = item.image.medium
        var link = item._links.self.href // dipakai untuk pindah ke halaman berikutnya
        var title = item.name
        var rating = item.rating.average
        var genres = item.genres[2]
  
         return <div key={index} className="col-md-4 col-sm-3">
          <span className="thumbnail">
            <center>
            <h4><b>{title}</b></h4>
              <Link  to={{pathname: '/detail', state: {link:link}}}><img style={{width:"100%", height:"30%"}} src={image} alt="..." /></Link>
              <hr className="line" />
              <div className="ratings">
               <span>{genres}</span>  || <span className="glyphicon glyphicon-star" /> <span>{rating}</span>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12">
                <Link  to={{pathname: '/detail', state: {link:link}}}> <button className="btn btn-success col-md-12 col-sm-12">Details</button></Link>
                </div>
              </div>
            </center>
          </span>
        </div>
        }) 


      // end fourbase


    return (
      <div>
        <Navbar />

        <section className="banner-sec float-left w-100 pt-4 pb-5 container">
          <div className="container-fluid">
            <div className="row px-3">
            <div className="col-md-8">
            <h1>The Most Popularity Movie</h1>
               {/* BEGIN  */}
               {data2}
             {/* END  */}
             </div>

              <div id="themeSlider" className="carousel slide col-md-4" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#themeSlider" data-slide-to={0} className="active" />
                  <li data-target="#themeSlider" data-slide-to={1} />
                  <li data-target="#themeSlider" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                  <div className="item active">
                    <div className="imgOverlay" />
                    <Link  to={{pathname: '/detail', state: {link:this.state.link_1}}}><img style={{width:"380px", height:"500px"}} src={this.state.slider1} alt="First slide" /></Link>
                    <div className="carousel-caption">
                      <h3>{this.state.title_slider1}</h3>
                    </div>
                  </div>
                  <div className="item">
                    <div className="imgOverlay"/>
                    <Link  to={{pathname: '/detail', state: {link:this.state.link_2}}}> <img style={{width:"380px", height:"500px"}} src={this.state.slider2} alt="Second slide" /></Link>
                    <div className="carousel-caption">
                      <h3>{this.state.title_slider2}</h3>
                    </div>
                  </div>
                  <div className="item">
                    <div className="imgOverlay" />
                    <Link  to={{pathname: '/detail', state: {link:this.state.link_3}}}><img style={{width:"380px", height:"500px"}} src={this.state.slider3} alt="Third slide" /></Link>
                    <div className="carousel-caption">
                      <h3>{this.state.title_slider3}</h3>
                    </div>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </section>



        <div className="container">
        <hr/><h1>Popularity</h1>

          <div className="row">
            {/* BEGIN  */}
            {data}
            {/* END  */}
          </div>
        </div>

        <section className="container-fluid" style={{backgroundColor:"green"}} id="foot5">
          <h4 className="text-center text-muted" style={{color:"white"}}>Copyrights © 2018</h4>
        </section>
      </div>
    )
  }
}
export default test