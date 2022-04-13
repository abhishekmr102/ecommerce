import React from 'react'
import "../Styles/Footwear.css";
import { AiOutlineHeart } from "react-icons/ai";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Footwear() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };



  return (
    <div className="container pt-5">
    <div className="mt-5 text-center ">
    </div>

    {/* <Slider {...settings}> */}
    <div className="row justify-content-md-evenly">
    <Slider {...settings}>
      <div className="col-md-3 bg-primar">
        <div className="tab_footwear_box">
          <p className="bg-dark w-25 text-light text-center">New</p>
          <div>
             <p className="float-end me-4 "><AiOutlineHeart /> </p>
            <p className="bg-dark text-light w-25">Outstock</p>
          </div>
        </div>
        <div className="mt-3">
        <h6 className="text-center ">Black Tiered Mini Dress</h6>
        <h6 className="text-center ">$50.00 </h6>
        </div>
      </div>

      <div className="col-md-3">
        <div className="tab_footwear_box">
          <p className="bg-danger w-25 text-light text-center ">-15%</p>
          <div>
             <p className="float-end me-4 "><AiOutlineHeart /> </p>
            <p className="bg-dark text-light w-25 text-center">New</p>
          </div>
          <p className="bg-danger w-25 text-light text-center">Sale</p>
        </div>
        <div className="mt-3">
        <h6 className="text-center">Black Tiered Mini Dress</h6>
        <h6 className="text-center">$150.00 </h6>
        </div>
      </div>

      <div className="col-md-3">
        <div className="tab_footwear_box">
          <p className="bg-danger w-25 text-light text-center ">-15%</p>
          <div>
             <p className="float-end me-4 "><AiOutlineHeart /> </p>
            <p className="bg-dark text-light w-25 text-center">New</p>
          </div>
          <p className="bg-danger w-25 text-light text-center">Sale</p>
        </div>
        <div className="mt-3">
        <h6 className="text-center">Black Tiered Mini Dress</h6>
        <h6 className="text-center">$150.00 </h6>
        </div>
      </div>

      <div className="col-md-3">
        <div className="tab_footwear_box">
          <p className="bg-dark w-25 text-light text-center">New</p>
          <p className="float-end me-4">
            <AiOutlineHeart />
          </p>
        </div>
        <div className="text-center d-md-flex">
        <div className="tab_footwear_small_img ms-5"></div>
         <div className="tab_footwear_small_img"></div>
        </div>

        <div className="mt-1">
        <h6 className="text-center">Black Tiered Mini Dress</h6>
        <h6 className="text-center">$150.00 </h6>
        </div>
      </div>

      <div className="col-md-3">
        <div className="tab_footwear_box">
          <p className="bg-danger w-25 text-light text-center ">-15%</p>
          <div>
             <p className="float-end me-4 "><AiOutlineHeart /> </p>
            <p className="bg-dark text-light w-25 text-center">New</p>
          </div>
          <p className="bg-danger w-25 text-light text-center">Sale</p>
        </div>
        <div className="text-center d-md-flex">
         <div className="tab_footwear_small_img ms-3"></div>
         <div className="tab_footwear_small_img"></div>
         <div className="tab_footwear_small_img"></div>
         <div className="tab_footwear_small_img"></div>
        </div>
        <div className="mt-3">
        <h6 className="text-center">Black Tiered Mini Dress</h6>
        <h6 className="text-center">$150.00 </h6>
        </div>
      </div>
      </Slider>
    </div>
  </div>
 
  )
}

export default Footwear