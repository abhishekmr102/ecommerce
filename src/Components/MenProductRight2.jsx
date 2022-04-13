import React, { useState } from "react";
import "../Styles/MenProductRight2.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";

function MenProductRight2() {
  const [increment, setIncrement] = useState(0);

  const inc = () => {
    setIncrement(increment + 1);
  };

  const dec = () => {
    if (increment > 1) {
      setIncrement(increment - 1);
    } else {
      alert(" Limit ");
      setIncrement(increment);
    }
  };

  return (
    <div className=" pt-5">
      
      <div className="row">
        <div className="col-md-9 bg-succes">
          <div className="row">
            <div className="col-md-4">
              <div className="img_men_products_left ">
                <p className="p_tag_men  bg-danger text-light text-center">
                  5%
                </p>
                <p className="p_tag_men_new bg-dark text-light text-center">
                  New{" "}
                </p>
                <p className="p_tag_men_sale bg-danger text-light text-center">
                  Sale
                </p>
              </div>
            </div>

            <div className="col-md-7">
              <h5 className="">Blue Overdyed Munich Logo T Shirt</h5>
              <p className="text-muted">
                Subtitle Adipiscing elit, sed do eiusmod tempor incididunt ut,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo conse...
              </p>
            </div>

            <div className="col-md-1">
              <div className="verticalLine"></div>
            </div>
          </div>
        </div>

        <div className="col-md-3 bg-dange">
          <div className="float-end">
            <h4 className="text-danger">$340.00</h4>
            <h5 className="text-muted ms-3 text-decoration-line-through">
              $340.00
            </h5>
            <p className="text-muted ms-4">6% OFF</p>
            <p>
              <AiOutlineHeart className="fs-4 ms-3" />
              <span>
                <AiOutlineHeart className="fs-4 ms-2" />
              </span>
            </p>
          </div>
          <div className="d-flex justify-content-around btn_men_product float-end ">
            <p className=" fs-3" onClick={dec}>
              -
            </p>
            <p className=" fs-3 text-success">{increment}</p>
            <p className="fs-3" onClick={inc}>
              +
            </p>
          </div>
          <button
            type="button"
            className="Btn_men_product_addtoCart float-end mt-3"
          >
            <BsBag className="me-2 logo_addtocart" />
            ADD TO CART
          </button>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default MenProductRight2;
