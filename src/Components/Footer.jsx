import React from 'react'
import "../Styles/Footer.css"
import { BsFacebook,BsInstagram,BsLinkedin,BsPinterest,BsPlayBtnFill ,BsTelephone,BsFillChatLeftTextFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (

    <>
        {/*  <!-- Footer --> */}
<div className="text-center text-lg-start bg-ligh ">


  {/* <!-- Section: Links  --> */}
  <div className="">
    <div className="container text-center text-md-start mt-5 ">
      {/* <!-- Grid row --> */}
      <div className="row mt-3">
        {/* <!-- Grid column --> */}
        <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4 justify-content-evenly  ">
          {/* <!-- Content --> */}
          <h6 className="text-dark  mb-4 vendyfooter">
           VENDY
          </h6>
          <p>
          Our company is dedicated to creating unique and comfortable
          </p>
          <p><BsTelephone className="me-2"/> Call Us:
            <a href="#" className="f_anchor ">7379529250</a>
          </p>
          <p>
            <a href="#" className="f_email "><BsFillChatLeftTextFill className="me-3"/>Send us an email</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}


        {/* <!-- Grid column --> */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            COMPANY
          </h6>
          <p>
            <a href="#" className="f_anchor ">About Us</a>
          </p>
          <p>
            <a href="#" className="f_anchor ">Contact Us</a>
          </p>
          <p>
            <a href="#" className="f_anchor ">Blog</a>
          </p>
          <p>
            <a href="#" className="f_anchor ">Privacy Policy</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4 ">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4 ">
            INFORMATION
          </h6>
          <p>
            <a href="#" className="f_anchor">FAQ's</a>
          </p>
          <p>
            <a href="#" className="f_anchor ">Terms</a>
          </p>
          <p>
            <a href="#" className="f_anchor ">Delivery Info</a>
          </p>
          <p>
            <a href="#" className="f_anchor ">Refund Policy</a>
          </p>
          <p>
            <a href="#" className="f_anchor">Size Guide</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-2 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4  ">
          <h6 className="text-uppercase fw-bold mb-4">
            ORDER
          </h6>
          <p className="f_anchor">My Account</p>
          <p className="f_anchor">View Cart </p>
          <p className="f_anchor"> Wishlist</p>
          <p className="f_anchor"> Checkout</p>
        </div>
      </div>
      {/* <!-- Grid row --> */}
    </div>
  </div>
  {/* <!-- Section: Links  --> */}


  <hr className="hr_tag"/>
  {/* <!-- Section: Social media --> */}
  <div className="container  d-flex justify-content-center justify-content-lg-between p-2 border-bottom">
    {/* <!-- Left --> */}
  
    <div className="me-5 d-none d-lg-block">
      <span className="text-muted">  ©2022 - E-commerce by Shopify</span>
    </div>
    {/* <!-- Left --> */}

    {/* <!-- Right --> */}
    <div className="">
      <a href="" className="me-3 log_anchor ">
      <BsFacebook className="f_logo"/>
      </a>
      <a href="" className="me-3 log_anchor">
      <BsPlayBtnFill className="f_logo"/>
      </a>
      <a href="" className="me-3 log_anchor">
      <BsInstagram className="f_logo"/>
      </a>
      <a href="" className="me-3 log_anchor">
      <BsLinkedin  className="f_logo"/>
      </a>
      <Link to="/pinterest" className="me-3 log_anchor">
      <BsPinterest className="f_logo"/>
      </Link>
    
    </div>
    {/* <!-- Right --> */}
  </div>
  {/* <!-- Section: Social media --> */}




</div>

</>  
  )
}

export default Footer