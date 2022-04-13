import React from "react";
import { Link } from "react-router-dom";
import "../Styles/AccessoriesProduct.css";
import { AiOutlineHeart } from "react-icons/ai";

function AccessoriesProducts() {
  return (
    <div className="row bg-succes pt-2 ">
      {/* ---------col-6 div first Start-------- */}
      <div className="col-md-6 bg-dange">
        <div className="accessories_div bg-warnin">
          {/* ---------inner div start----------- */}
          <div className="inner_img">
            <p className="access_new bg-danger text-light text-center">-8%</p>
            <div>
              <p className="float-end me-4 ">
                <AiOutlineHeart className="heart_logo" />{" "}
              </p>
              <p className="access_new  bg-dark text-light  text-center">New</p>
            </div>
            <p className="access_new bg-danger text-light text-center ">Sale</p>
          </div>
          {/* --------inner img div end ----------*/}

          <p className="access_new bg-danger text-light text-center">-8%</p>
          <div>
            <p className="float-end me-4 ">
              <AiOutlineHeart className="heart_logo" />
            </p>
            <p className="access_new  bg-dark text-light  text-center">New</p>
          </div>
          <p className="access_new bg-danger text-light text-center ">Sale</p>
        </div>

        <div className="text-center pt-3">
        <Link to="/productdetails" className="Link_details">
          <h6>Blue Floral Mini Smock Dress</h6>
         </Link>
          <p className="fw-bold text-danger">
            $115.00c
            <span className="text-decoration-line-through ms-2 fw-bold text-muted">
              $125.00
            </span>
          </p>
        </div>
      </div>
      {/* ---------col-6 div first end-------- */}


      {/* ----------col-6 second div Start------ */}
      <div className="col-md-6 bg-warnin">
        <div className="accessories_div2 bg-warnin">
          {/* -------innner img div2 start------- */}
          <div className="inner_img2">
            <p className="access_new bg-danger text-light text-center">-7%</p>
            <div>
              <p className="float-end me-4 ">
                <AiOutlineHeart className="heart_logo" />
              </p>
              <p className="access_new  bg-dark text-light  text-center">New</p>
            </div>
            <p className="access_new bg-danger text-light text-center ">Sale</p>
          </div>
          {/* -------innner img div2 end-------- */}
          <p className="access_new bg-danger text-light text-center">-7%</p>
          <div>
            <p className="float-end me-4 ">
              <AiOutlineHeart className="heart_logo" />
            </p>
            <p className="access_new  bg-dark text-light  text-center">New</p>
          </div>
          <p className="access_new bg-danger text-light text-center ">Sale</p>
        </div>

        <div className="text-center pt-3">
        <Link to="/productdetails" className="Link_details">
          <h6>Black Canvas Strip Sole trainer</h6>
          </Link>
          <p className="fw-bold text-danger">
            $65.00
            <span className="text-decoration-line-through ms-2 fw-bold text-muted">
              $70.00
            </span>
          </p>
        </div>
      </div>
      {/* ----------col-6 second div end------ */}


 {/* ----------col-6 second div Start------ */}
 <div className="col-md-6 bg-dange">
        <div className="accessories_div2 bg-warnin">
          {/* --------innner img div2 start------- */}
          <div className="inner_img2">
            <p className="access_new bg-danger text-light text-center">-7%</p>
            <div>
              <p className="float-end me-4 ">
                <AiOutlineHeart className="heart_logo" />
              </p>
              <p className="access_new  bg-dark text-light  text-center">New</p>
            </div>
            <p className="access_new bg-danger text-light text-center ">Sale</p>
          </div>
          {/* ---------innner img div2 end-------- */}
          <p className="access_new bg-danger text-light text-center">-7%</p>
          <div>
            <p className="float-end me-4 ">
              <AiOutlineHeart className="heart_logo" />
            </p>
            <p className="access_new  bg-dark text-light  text-center">New</p>
          </div>
          <p className="access_new bg-danger text-light text-center ">Sale</p>
        </div>

        <div className="text-center pt-3">
        <Link to="/productdetails" className="Link_details">
          <h6>Black Canvas Strip Sole trainer</h6>
         </Link>
          <p className="fw-bold text-danger">
            $65.00{" "}
            <span className="text-decoration-line-through ms-2 fw-bold text-muted">
              $70.00
            </span>
          </p>
        </div>
      </div>
      {/* ----------col-6 second div end------ */}


 {/* ---------col-6 div first Start-------- */}
 <div className="col-md-6 bg-dange">
        <div className="accessories_div bg-warnin">
          {/* ---------inner div start----------- */}
          <div className="inner_img">
            <p className="access_new bg-danger text-light text-center">-8%</p>
            <div>
              <p className="float-end me-4 ">
                <AiOutlineHeart className="heart_logo" />{" "}
              </p>
              <p className="access_new  bg-dark text-light  text-center">New</p>
            </div>
            <p className="access_new bg-danger text-light text-center ">Sale</p>
          </div>
          {/* --------inner img div end ----------*/}

          <p className="access_new bg-danger text-light text-center">-8%</p>
          <div>
            <p className="float-end me-4 ">
              <AiOutlineHeart className="heart_logo" />
            </p>
            <p className="access_new  bg-dark text-light  text-center">New</p>
          </div>
          <p className="access_new bg-danger text-light text-center ">Sale</p>
        </div>

        <div className="text-center pt-3">
        <Link to="/productdetails" className="Link_details">
          <h6>Blue Floral Mini Smock Dress</h6>
          </Link>
          <p className="fw-bold text-danger">
            $115.00{" "}
            <span className="text-decoration-line-through ms-2 fw-bold text-muted">
              $125.00
            </span>
          </p>
        </div>
      </div>
      {/* ---------col-6 div first end-------- */}


{/* ---------col-6 div first Start-------- */}
{/* ---For watch div-- */}
<div className="col-md-6 bg-dange">
        <div className="accessories_div3 bg-warnin">
          {/* ---------inner div start----------- */}
          <div className="inner_img3">
            <p className="access_new bg-dark text-light text-center">New</p>
            <div>
              <p className="float-end me-4 ">
                <AiOutlineHeart className="heart_logo" />{" "}
              </p>
            </div>
          </div>
          {/* --------inner img div end ----------*/}

          <p className="access_new bg-dark text-light text-center">New</p>
          <div>
            <p className="float-end me-4 ">
              <AiOutlineHeart className="heart_logo" />
            </p>
          </div>
        </div>

        <div className="text-center pt-3">
        <Link to="/productdetails" className="Link_details">
          <h6>Tag Heuer Farmula 1 Gulf Chronog...</h6>
          </Link>
          <p className="fw-bold text-da">
            $45.00
          </p>
        </div>
      </div>
      {/* ---------col-6 div first end-------- */}


    </div>
  );
}

export default AccessoriesProducts;
