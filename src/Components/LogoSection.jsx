import React from 'react'
import "../Styles/LogoSection.css";
import { BsArrowCounterclockwise ,BsCreditCard } from "react-icons/bs";
import { IoAirplaneOutline } from "react-icons/io5";

function LogoSection() {
  return (
   <div className="pt-5 mb-5  cntnr">
      <div className='row row_padding'>
          <div className="col-md-4 text-center ">
          <h1><IoAirplaneOutline/></h1>
          <h5>FREE SHIPPING</h5>
          <p className='text-muted'>On all orders over $50.00</p>
          </div>

          <div className="col-md-4 text-center  ">
          <h1><BsCreditCard/></h1>
          <h5>100% PAYMENT SECURE</h5>
          <p className='text-muted'>We ensure secure payment with PEV</p>
          </div>

          <div className="col-md-4 text-center">
          <h1><BsArrowCounterclockwise/></h1>
          <h5>30 DAYS GUARANTEE</h5>
          <p className='text-muted'>30-days free return policy</p>
          </div>

        
      </div>
   </div>
  )
}

export default LogoSection