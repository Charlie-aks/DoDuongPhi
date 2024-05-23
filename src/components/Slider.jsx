import React from 'react'
import lag from "../assets/lag.webp";
import slider2 from "../assets/slider2.webp";
import slider3 from "../assets/slider3.webp";
const Slider =()=>{
  return (
    <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={lag} class="d-block w-100" alt="lag"/>
      </div>
      <div class="carousel-item">
        <img src={slider2} class="d-block w-100" alt="slider2"/>
      </div>
      <div class="carousel-item">
        <img src={slider3} class="d-block w-100" alt="slider3"/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}
export default Slider