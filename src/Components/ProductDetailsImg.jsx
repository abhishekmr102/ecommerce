import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/ProductDetailsImg.css";
import { AiOutlineCompress } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsPinterest } from "react-icons/bs";
import { FcShipped } from "react-icons/fc";
import ProductDetailAccordian from "./ProductDetailAccordian";

// import ReactImageMagnify from "react-image-magnify";
// import watchImg1200 from "../Assests/Images/watch.jpg";
// import watch300 from "../Assests/Images/watch300.jpg";

function ProductDetailsImg() {
  const [increment, setIncrement] = useState(0);

  const inc = () => {
    setIncrement(increment + 1);
  };

  const dec = () => {
    if (increment > 1) {
      setIncrement(increment - 1);
    } else {
      alert("1 Limit ");
      setIncrement(increment);
    }
  };

  return (
    <div className="container">
      <div className="row pt-5 justify-content-evenly">
        {/* -------left div start------- */}
        <di className="col-md-7 bg-warnin">
          <div className="row mb-5">
            <div className="col-md-6 bg-succes">
              <div className="bg-light product_detail_img">

                {/* <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "Wristwatch by Ted Baker London",
                      isFluidWidth: true,
                      src: watch300,
                    },
                    largeImage: {
                      src: watchImg1200,
                      width: 1200,
                      height: 1800,
                    },
                  }}
                /> */}

                <p className="bg-dark text-light text-center new_outstock_detail">
                  New
                </p>
                <div>
                  <p className="float-end me-4 ">
                    <AiOutlineCompress className="logo_img" />
                  </p>
                  <p className="bg-danger text-center text-light new_outstock_detail ">
                    Sale
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 bg-inf">
              <div className="bg-light product_detail_img2">
                <p className="float-end me-4 pt-4">
                  <AiOutlineCompress className="logo_img" />
                </p>
              </div>
            </div>

            <div className="col-md-6 pt-3 bg-succes">
              <div className="bg-light product_detail_img">
                <p className="float-end me-4 pt-4">
                  <AiOutlineCompress className="logo_img" />
                </p>
              </div>
            </div>

            <div className="col-md-6 pt-3 bg-inf">
              <div className="bg-light product_detail_img">
                <p className="float-end me-4 pt-4">
                  <AiOutlineCompress className="logo_img" />
                </p>
              </div>
            </div>
          </div>
        </di>
        {/* -------left div end------- */}




        {/* -------right div start------ */}
        <div className="col-md-5 bg-succes">
          <div className="bg-ligh right_div">
            <p className="text-light text-center right_inStock">In Stock</p>
            <div className="right_head pt-4">
              <h2>
                Little mistress black studded <br /> stiletto heel sandals
              </h2>
            </div>

            <div className="pt-3">
              <h6 className="fw-bol text-danger ">
                <span className="fs-4"> $42.00 </span>
                <span className="text-decoration-line-through ms-2 fw-bol text-muted">
                  $52.00
                </span>
                <span className="ms-2 text-dark text-muted">19% OFF</span>
              </h6>
            </div>

            <div className="">
              <p className="text-muted">
                {" "}
                <span>logo</span> Size Guide{" "}
              </p>
            </div>

            <div className="">
                <p className="pt-2 text-muted">Color: Black</p>
                <div className=" d-flex">
                  <div className="img_small_detail "></div>
                  <div className="img_small_detail ms-2"></div>
                  <div className="img_small_detail ms-2"></div>
               </div>
            </div>

            <div className="pt-5 text-muted">
              <p>
                Subtitle Adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip...
              </p>
            </div>

            <p>Qty:</p>
            <div className="d-flex Qty_detail justify-content-around ">
              <p className=" fs-3" onClick={dec}>
                -
              </p>
              <p className=" fs-3 text-success">{increment}</p>
              <p className="fs-3" onClick={inc}>
                +
              </p>
            </div>

            <div className="pt-4">
              <button type="button" className="Add_to_cart_btn">
                ADD TO CART
              </button>
            </div>

            <div className="pt-3">
              <button type="button" className="but_it_now_btn">
                BUY IT NOW
              </button>
            </div>

            <div className="pt-5">
              <p className="">
                <AiOutlineHeart className="fs-3" /> ADD TO WISHLIST
              </p>
            </div>

            {/* -----divider----- */}
            <hr className="mt-4 text-muted" />

            <div className="">
              <p className="text-muted">
                SKU: <span className="text-dark fw-bold">17272</span>
              </p>
              <p className="text-muted">
                Vender: <span className="text-dark fw-bold">Vendy</span>
              </p>
              <p className="text-muted">
                Product type: <span className="text-dark fw-bold">Shoes</span>
              </p>
              <p className="text-muted"> Barcode:</p>
              <p className="text-muted">Tags: - </p>
              <p className="text-muted">
                Collections:{" "}
                <span className="text-dark fw-bold">New In,Shoes,Womens</span>
              </p>
            </div>

            <div className="text-muted pt-4">
              <p className="fw-bold ">
                Share: <BsFacebook className="ms-3 insta_fb_print" />{" "}
                <BsInstagram className="ms-2 insta_fb_print" />{" "}
              <Link to="/pinterest"> <BsPinterest className="ms-2 insta_fb_print" /></Link> 
              </p>
            </div>

            <div className="delivery_info bg-light mt-4">
              <p className="text-center pt-1 ">
                <FcShipped className="fs-3" /> Delivery Information
              </p>
            </div>

            <hr className="mt-5" />

            {/* -----Accordian product details start------ */}

            <ProductDetailAccordian />
            {/* -----Accordian product details end------ */}
          </div>
        </div>
        {/* -------right div end------ */}
      </div>
    </div>
  );
}

export default ProductDetailsImg;
