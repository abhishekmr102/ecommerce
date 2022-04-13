import React from 'react'
import "../Styles/CardSlider1.css";
import { AiOutlineHeart } from "react-icons/ai";
// import imgsde from '..//../public/Assests/Images/imgsde.jpg'



function Shoes() {
  return (
    <div className="container pt-5">
    <div className="mt-5 text-center ">

    </div>

    <div className="row justify-content-md-evenly">
      <div className="col-md-3 bg-primar">
        <div className="  box-2">
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
        <div className="  box-2">
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
        <div className="  box-2">
          <p className="bg-dark w-25 text-light text-center">New</p>
          <p className="float-end me-4">
            <AiOutlineHeart />
          </p>
        </div>
        <div className="text-center">
          <img src="D:\eComm\ecomm\public\Assests\Images\imgsde.jpg" alt="image" className="imgsde"/>
          <img src="D:\eComm\ecomm\public\Assests\Images\imgsde.jpg" alt="image" className="imgsde"/>
          
        </div>

        <div className="mt-1">
        <h6 className="text-center">Black Tiered Mini Dress</h6>
        <h6 className="text-center">$150.00 </h6>
        </div>
      </div>

      <div className="col-md-3">
        <div className="  box-2">
          <p className="bg-danger w-25 text-light text-center ">-15%</p>
          <div>
             <p className="float-end me-4 "><AiOutlineHeart /> </p>
            <p className="bg-dark text-light w-25 text-center">New</p>
          </div>
          <p className="bg-danger w-25 text-light text-center">Sale</p>
        </div>
        <div className="text-center">
          <img src="D:\eComm\ecomm\public\Assests\Images\imgsde.jpg" alt="image" className="imgsde"/>
          <img src="D:\eComm\ecomm\public\Assests\Images\imgsde.jpg" alt="image" className="imgsde"/>
          <img src="D:\eComm\ecomm\public\Assests\Images\imgsde.jpg" alt="image" className="imgsde"/>
          <img src="D:\eComm\ecomm\public\Assests\Images\imgsde.jpg" alt="image" className="imgsde"/>
        </div>
        <div className="mt-3">
        <h6 className="text-center">Black Tiered Mini Dress</h6>
        <h6 className="text-center">$150.00 </h6>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Shoes