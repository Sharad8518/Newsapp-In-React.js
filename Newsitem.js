import './News.css'
import React, { Component } from 'react'

export default class Newsitem extends Component {
  
 

    render() {

           let {title,description,imageUri,newsUri} =this.props;


        return (
            <div>
            
             
            <div className="card" style={{width: "18rem"}}>
  <img src={!imageUri?'https://cdn5.vectorstock.com/i/1000x1000/73/49/404-error-page-not-found-miss-paper-with-white-vector-20577349.jpg':imageUri} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUri} className="btn btn-primary">See More</a>
  </div>
</div>




</div>
           
        )
    }
}
