import React, { Component } from 'react'
import Navbar from './Navbar';

class aboutus extends Component {

  

  render() {

    return (
      <div>
        <Navbar />
        <div className="aboutus-area">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="col-md-6 col-sm-6 col-xs-12">    
                <div className="aboutus-image float-left hidden-sm"><img src="http://www.googlereviewwidget.com/img/customer-reviews.png" alt="..." /></div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="aboutus-content ">
                  <h1>ABOUTUS <span>Green review</span></h1>

                  <u><h4>Review Star</h4></u>
                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has oots in a piece of classitin literature from 45 BC, making it over 2000 years old. Richard McClint professor at Hamden dney College irginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.</p>
                
                  <u><h4>Movie Details</h4></u>
                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has oots in a piece of classitin literature from 45 BC, making it over 2000 years old. Richard McClint professor at Hamden dney College irginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.</p>
                 
                  <u><h4>Actor in Movie</h4></u>
                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has oots in a piece of classitin literature from 45 BC, making it over 2000 years old. Richard McClint professor at Hamden dney College irginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.</p>
                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has oots in a piece of classitin literature from 45 BC, making it over 2000 years old. Richard McClint professor at Hamden dney College irginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.</p>
                 
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
export default aboutus