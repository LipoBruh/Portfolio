import React from 'react'
//img
import photo1 from '../assets/TEMP_PHOTO.png'

export const Carousel = ({ children }) => {
    return (


    <div id="carouselExampleIndicators" className="carousel slide">

      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      </div>

      <div className="carousel-inner">
        <div 
            className="carousel-item active"
            style={{"width":200,"height":200,}}    
        >

          <img 
            src={photo1} 
            className="d-block w-100" 
            alt="Slide 1" 
            style={{}}
          />


          <div className="carousel-caption d-none d-md-block">
            <h5>Slide 1</h5>
            <p>Description for slide 1.</p>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

    </div>




      );
}

