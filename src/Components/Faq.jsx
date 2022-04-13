import React from "react";
import EmailSection from "./EmailSection";
import Footer from "./Footer";

function Faq() {
  return (
    <>
      <div className="container pt-5">
        <div className="text-center">
          <h1>FAQ's</h1>
          <p>Frequently Asked Questions</p>
        </div>
        <div className="row  mt-5 pt-5">
          <div className="col-md-8  mx-auto">
            <h3>How can we help you?</h3>
            <hr className="mt-5" />
            {/* accordian */}
            <div className="mb-5">
              <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      YOUR ACCOUNT & ORDERS
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <ul className="text-muted">
                        <li>
                          With the great pleasure we are offering you our goods
                        </li>
                        <li>
                          {" "}
                          Fashion satisfies our willingness to be attractive
                        </li>
                        <li>
                          {" "}
                          That is why we are offering you the result of great
                          market and technological r
                        </li>
                        <li>
                          {" "}
                          The unique combination of fair price, extraordinary
                          style and perfect quality
                        </li>
                        So, this circumstance forced all leading successful
                        companies to explore all needs and wishes of different
                        groups of potential clients very deeply.
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      PAYMENTS
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p className="text-muted">
                        Yes, you can! After placing your order you will receive
                        an order confirmation via email. Each order starts
                        production 24 hours after your order is placed. Within
                        72 hours of you placing your order, you will receive an
                        expected delivery date. When the order ships, you will
                        receive another email with the tracking number and a
                        link to trace the order online with the carrier.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      SHIPPING & RETURNS
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p className="text-muted">
                        Yes, you can! After placing your order you will receive
                        an order confirmation via email. Each order starts
                        production 24 hours after your order is placed. Within
                        72 hours of you placing your order, you will receive an
                        expected delivery date. When the order ships, you will
                        receive another email with the tracking number and a
                        link to trace the order online with the carrier.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                      SHOPPING INFORMATION
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingFour"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p className="text-muted">
                        Yes, you can! After placing your order you will receive
                        an order confirmation via email. Each order starts
                        production 24 hours after your order is placed. Within
                        72 hours of you placing your order, you will receive an
                        expected delivery date. When the order ships, you will
                        receive another email with the tracking number and a
                        link to trace the order online with the carrier.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EmailSection />
      <Footer />
    </>
  );
}

export default Faq;
