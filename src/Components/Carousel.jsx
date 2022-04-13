import React from "react";
import "../Styles/Carousel.css";
import { Link } from "react-router-dom";

// import bann1 from "..//../public/Assests/Images/bann1.jpg";
// import bann2 from "..//../public/Assests/Images/bann2.jpg";
// import bann4 from "..//../public/Assests/Images/bann4.jpg";

function Carousel() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active "
            style={{
              width: "13px",
              height: "13px",
              borderRadius: "59%",
              backgroundColor: "black",
            }}
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            style={{
              width: "13px",
              height: "13px",
              borderRadius: "59%",
              backgroundColor: "black",
            }}
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            style={{
              width: "13px",
              height: "13px",
              borderRadius: "59%",
              backgroundColor: "black",
            }}
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active bann-img_1">
            {/* <img
              src="D:\eComm\ecomm\public\Assests\Images\bann1.jpg"
              className="d-block w-100"
              alt="..."
              style={{ height: "600px" }}
            /> */}
            <div className="carousel-caption d-none d-md-block carousel-left">
              <p className="collection text-dark">2022 COLLECTION</p>
              <h2 className="heading-left1 text-dark">New Arrivals</h2>
              <p className="para-left1 text-dark text-muted" >
               Shop the latest clothing, shoes, and handbags from top <br/>
          
              </p>
           <Link to="/accessories">   <button type="button " className="text-light btn-crsel"> 
                DISCOWER NOW
              </button>
              </Link>
            </div>
          </div>

          <div className="carousel-item  bann-img_2">
            <div className="carousel-caption d-none d-md-block carousel-center  ">
              <h2 className="heading-center text-dark">
                Get your <br /> Fashion style
              </h2>
              <p className="para-center text-dark text-muted">
                Shop the latest clothing,shoes,and handbags from top fashion{" "}
                <br />
                brands,style,icons, and celebrities
              </p>
              <button type="button " className="text-light btn-crsel ">
                SHOP NOW
              </button>
            </div>
          </div>
          
          <div className="carousel-item  bann-img_3">
            <div className="carousel-caption d-none d-md-block carousel-left">
              <p className="fashion text-dark">FASHION GUIDE</p>
              <h5 className="heading-left2 text-dark">DenimPerfect</h5>
              <p className="p-left2 text-dark text-muted">
                Some representative placeholder content for the third slide.
              </p>
              <button type="button " className="text-light btn-crsel">
                DISCOWER NOW
              </button>
            </div>
          </div>
        </div>
        {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> */}
      </div>
    </>
  );
}

export default Carousel;
