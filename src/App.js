import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import test from './component/test'; 
import ListProduct from './component/ListProduct'; 
import detail from './component/detail'; 
import detail_search from './component/detail_search'; 
import aboutus from './component/aboutus'; 
import episodelist from './component/episodelist'; 
import episode from './component/episode'; 


 class App extends Component { 
   
  render() { 
    
    return ( 
  <div> 
    <Route exact path="/" component={test}/> 
    <Route path="/ListProduct" component={ListProduct}/> 
    <Route path="/detail" component={detail}/> 
    <Route path="/detail_search" component={detail_search}/> 
    <Route path="/aboutus" component={aboutus}/> 
    <Route path="/episodelist" component={episodelist}/> 
    <Route path="/episode" component={episode}/> 
    
    </div>
    );
  } 
} 
export default App; 