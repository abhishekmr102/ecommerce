import React from "react";
import "../Styles/ProductDetailAccordian.css";


function ProductDetailAccordian() {
  return (
    <div className="">

      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed proDetail_accordian"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              DESCRIPTION
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <h6 className="text-muted">Subtitle</h6>
              <p className="text-muted">
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
              <p className="text-muted">
                Dolor sit amet, consectetur adipiscing elit Sed do eiusmod
                tempor ncididunt ut labore et dolore magna aliqua Enim ad minim
                veniam
              </p>
                
                <div className="pro_acc_img"></div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed proDetail_accordian"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              REVIEWS
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <h5 className="pt-5">CUSTUMER REVIEWS</h5>
              <p className=" text-muted">NO reviews yet</p>
              <p
                className="text-center pt-2 review_btn"
                style={{
                  width: "180px",
                  height: "40px",
                  border: "1px solid black",
                  borderRadius: "5px",
                  fontWeight: "500",
                }}
              >
                WRITE A REVIEW
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed proDetail_accordian"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              DELIVERY INFO
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <div className="">
                <h5>Delivery Info</h5>
                <p className="text-muted">
                  So you’ve done your shopping; just how long will it be till
                  you can rock that swanky new Axolotl-themed laptop skin? The
                  calculator below will give you the average amount of days it
                  takes to ship a product to your door and the best time to
                  contact our support team.
                </p>
                <p className="text-muted">
                  Please note that every order at Redbubble is custom printed
                  just for you, and will take 1-3 business days to print prior
                  to shipping.
                </p>

                <h6>
                  Here Are A Few Things To Consider While You Wait For
                  <br />
                  Your Order:
                </h6>
                <ul className="text-muted">
                  <li>
                    We ship in business days. Monday - Friday, excluding
                    national holidays.
                  </li>
                  <li>
                    Shipping starts from the date you received the “Your Order
                    Has Shipped!” email.
                  </li>
                  <li>
                    The estimate above does not include manufacturing time - we
                    need 1-3 business days to make sure your custom order is
                    everything you hoped it would be.
                  </li>
                </ul>

                <p className="text-muted">
                  Redbubble is a global company - we work with production and
                  shipping partners all over the world to get your things to
                  your doorstep, wherever that may be. Although the vast
                  majority of our customers will get their orders by the day
                  listed above, actual timeframes may vary from region to
                  region.
                </p>

                <p className="text-muted">
                  So when do you contact Redbubble? The calculator above lets
                  you know the best time to message us. When that day rolls
                  around. Even if your order hasn’t arrived by the listed date,
                  it’s probably still on its way (and worth the wait).
                </p>

                <h6>1. So when do you contact Redbubble?</h6>
                <p className="text-muted">
                  The calculator above lets you know the best time to message
                  us. When that day rolls around. Even if your order hasn’t
                  arrived by the listed date, it’s probably still on its way
                  (and worth the wait).
                </p>

                <h6>2. How much is shipping?</h6>
                <p className="text-muted">
                  Once you’ve clicked through to Secure Checkout, you can enter
                  your delivery address and choose a shipping method. Shipping
                  costs are then calculated and tacked on to your subtotal at
                  the bottom of the page.
                </p>

                <h6>3. Can I track my order?</h6>
                <p className="text-muted">
                  We rely on a global network of shipping partners (UPS, FedEx,
                  DHL) as well as local postal services (USPS) to get your order
                  to your doorstep as soon as possible. For this reason,
                  tracking is not always available. If your order is being sent
                  by a trackable service, these details will be included on your
                  orders page as well as on the shipping email we send you.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFour">
            <button
              className="accordion-button collapsed proDetail_accordian"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              PRODUCT DETAILS
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <div className="bg-light fw-bold fit_and_style_div  p-2 text-dark">
                Fit and style
                <span className="ms-4 text-muted">
                  Sweatshirts, Straight fit
                </span>
              </div>

              <div className="fw-bold fit_and_style_div  p-2 text-dark">
              Composition
                <span className="ms-4 text-muted">
                  {" "}
                  70% cotton, 30% polyester
                </span>
              </div>

              <div className="bg-light fw-bold fit_and_style_div  p-2 text-dark">
              Clarity
                <span className="ms-4 text-muted">        
                     Vs2
                </span>
              </div>

              <div className="fw-bold fit_and_style_div  p-2 text-dark">
              Diamond weight
                <span className="ms-4 text-muted">        
                1.50 ct
                </span>
              </div>

              <div className="bg-light fw-bold fit_and_style_div  p-2 text-dark">
              Total number
                <span className="ms-4 text-muted">        
                    1
                </span>
              </div>

              <div className="fw-bold fit_and_style_div  p-2 text-dark">
              Care
                <span className="ms-4 text-muted">        
                Wash at 40°C delicate
                </span>
              </div>

            </div>
          </div>
        </div>
        <hr className="text-muted " style={{ backgroundColor: "white" }} />
      </div>
    </div>
  );
}

export default ProductDetailAccordian;
