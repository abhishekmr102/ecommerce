import React from 'react'
import "../Styles/Testimonial.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from './TestimonialCard';



function Testimonial() {
  return (
    <div className="container-fluid bg-light Slidercontainer ">
    <div className='text-center pt-5'> <h2 >Testimonials</h2>
    
      <Slider>
    
  <TestimonialCard />
  <TestimonialCard />
  <TestimonialCard />

      </Slider>
      </div>
    </div>
  )
}

export default Testimonial 