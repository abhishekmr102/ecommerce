import React from "react";
import "../Styles/Accordian.css"

function Accordian() {
  return (
    <div className="conatiner">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button accordian_btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              COLLECTIONS
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
             <p className=""><a className="accordian_acce" href="#">Accessories</a></p>
             <p><a className="accordian_anchor" href="#">Bracelets</a> </p>
             <p><a className="accordian_anchor" href="#">Clothing</a> </p>
             <p><a className="accordian_anchor" href="#">Coats & Jackets</a> </p>
             <p><a className="accordian_anchor" href="#">Earrings</a> </p>
             <p><a className="accordian_anchor" href="#">Mens</a> </p>
             <p><a className="accordian_anchor" href="#">New In</a> </p>
             <p><a className="accordian_anchor" href="#">Rings</a> </p>
             <p><a className="accordian_anchor" href="#">Sale</a> </p>
             <p><a className="accordian_anchor" href="#">Shoes</a> </p>
             <p><a className="accordian_anchor" href="#">Watches</a> </p>
             <p><a className="accordian_anchor" href="#">Womens</a> </p>
             
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed accordian_btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              SIDEBAR LINKLIST
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            <p><a className="accordian_anchor" href="#">FAQ's</a> </p>
             <p><a className="accordian_anchor" href="#">Terms</a> </p>
             <p><a className="accordian_anchor" href="#">Delivery Info</a> </p>
             <p><a className="accordian_anchor" href="#">Refund Policy</a> </p>
             <p><a className="accordian_anchor" href="#">Size Guide</a> </p>
            </div>
          </div>
        </div>
 
      </div>
    </div>
  );
}

export default Accordian;
