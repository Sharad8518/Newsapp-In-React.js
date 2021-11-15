
import './App.css';

import React, { Component } from 'react'

import Navbar from './component/Navbar';
import News from './component/News';
import Header from './component/Header'
import Bottomnavbar from './component/Bottomnavbar';



export default class App extends Component {
 
  render() {
    return (

    
    <div className="home" >

 
  <Header/>
 <Navbar/>
  <News country="in" category="science"/>


<Bottomnavbar/>

     
  </div>
     
     
    )
  }
}

