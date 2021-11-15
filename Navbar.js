import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Navbar extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/1600x600/?Dubai" className="d-block w-100" alt="..."/>
     
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/1600x600/?switzerland" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/1600x600/?india" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


            </div>
        )
    }
}
