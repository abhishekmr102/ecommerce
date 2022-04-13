import React from "react";
import "../Styles/AboutUsSimple.css";
import EmailSection from "./EmailSection";
import Footer from "./Footer";
import Testimonial from "./Testimonial";

function AboutUsSimple() {
  return (
    <>
      <div className="container mt-5 pt-5 mb-5">
        <div className="row">
          <div className="col-md-6">
            <div className="about_simple_img"></div>
          </div>

          <div className="col-md-6">
            <div className="mt-5 pt-5 ms-5">
              <h1 className="aboutsimple_ourstory_h1">About Us</h1>
              <h6 className="pt-2">
                We guarantee the highest quality of <br /> the products we sell.
              </h6>
              <p className="text-muted pt-2">
                Our company is dedicated to creating unique and comfortable
                clothing for men and women. Since our establishment in 2010,
                Fashion's activity has extended from developing designer clothes
                to training new designers and stylists at our school,
                participation of our trainees at the world's leading fashion
                shows and writing articles about fashion.
              </p>
            </div>
          </div>
        </div>

        {/* ----2nd row----- */}
        <div className="row mt-3 pt-5 ">
          <div className="col-md-6">
            <div className="mt-5 pt-5 ">
              <h1 className="aboutsimple_ourstory_h1">Our Story</h1>
              <h5 className="pt-2">
                Catering to your requirements, handling your needs with care.
              </h5>
              <p className="text-muted pt-2">
                Our store is more than just another average online retailer. We
                sell not only top quality products, but give our customers a
                positive online shopping experience.
              </p>
              <p className="text-muted pt-2">
                Forget about struggling to do everything at once: taking care of
                the family, running your business, walking your dog, cleaning
                the house, doing the shopping, etc.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="about_simple_img_2"></div>
          </div>
        </div>
      </div>
      <Testimonial/>
      <EmailSection/>
      <Footer/>
    </>
  );
}

export default AboutUsSimple;
