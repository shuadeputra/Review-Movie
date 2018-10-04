import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';   

// Redux store
function mapStateToProps(state){
  return {
  user: state.user,
  pass: state.pass
  };
}

class login extends Component {

klik = (apa) => {    
    this.props.dispatch({
    type:'KLIK',
     input1: apa.nama.value, 
     input2: apa.pass.value
    });    
   }



render(){  
  return (
<div>
  <Navbar/>
    <center>

 <h1>Username: {this.props.user}!</h1>        
 <h1>password: {this.props.pass}!</h1>   


  <input ref='nama' type="text" placeholder="username" required/>   
  <input ref="pass" type="password" placeholder="password" required/>   
  <Link onClick={() => this.klik(this.refs)} to="/masuk"> Tekan saya gan</Link>


    </center>



</div>
  );
  }
}

export default connect(mapStateToProps)(login)

