import React from "react";
import "../Styles/Products.css";
import Accordian from "../Components/Accordian";
import ProductCard from "../Components/ProductCard";
import AccessoriesProducts from "../Components/AccessoriesProducts";
import { FaGripLinesVertical} from "react-icons/fa";


function Products() {
  return (
    <div className="container pt-5 ">
      <div className="row  mb-5">
        {/*----- col-4 start left------ */}
        <div className="col-md-4 bg-succes">
          <Accordian />

          <div className="pt-4">
            <input type="text" className="search_box" placeholder="Search" />
          </div>

          <ProductCard />
        </div>
        {/* -------col-4 end--------- */}

        {/* -------col-8 start--------- */}
        <div className="col-md-8 bg-dange">
          <div className="new_arrival">
            <h1 className="new_arrival_head">New Arrivals</h1>
            <h6 className="new_arrival_getupto text-muted">
              Get up to 20% off
            </h6>
            <p className="new_arrival_ptag">
              <a href="#" className="">
                SHOP NOW
              </a>
            </p>
          </div>


   {/* --------row start 1---------*/}
          <div class="row mt-5 ">
            <h1 className="text-center mb-5">Accessories</h1>
            <div className="col-md-2">
              <p className="text-muted">Filter:</p>
            </div>
            <div className="col-md-2 ">
           
                <select class="form-select product_form_select text-muted" aria-label="Default select example">
                  <option selected>Availability</option>
                  <option value="1">one </option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              
            </div>
              
            <div className="col-md-2 ">
          
                <select class="form-select product_form_select text-muted" aria-label="Default select example">
                  <option selected>Price</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
             
            </div>

            <div className="col-md-2">
            
                <select class="form-select product_form_select text-muted" aria-label="Default select example">
                  <option selected>Product Type</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
            
            </div>

            <div className="col-md-2">
             
                <select class="form-select product_form_select text-muted" aria-label="Default select example">
                  <option selected>Brand</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
           
            </div>

            <div className="col-md-2">
            
                <select class="form-select product_form_select text-muted" aria-label="Default select example">
                  <option selected>Color</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
           
            </div>
          </div>
          {/* -------row end 1------ */}


  {/* ----Row 2 start---- */}
<div className="row pt-5">
  <div className="col-md-4">
    <h6>Sort By:  </h6>
  </div>

  <div className="col-md-4">
<h6 className="text-muted">11 Products</h6>
  </div>

  <div className="col-md-4 d-flex justify-content-end">
    <p><FaGripLinesVertical className="vertical_logo text-muted"/></p>
    <p><FaGripLinesVertical className="vertical_logo text-muted"/ ></p>
    <p><FaGripLinesVertical className="vertical_logo text-muted"/></p>
    <p><FaGripLinesVertical className="vertical_logo text-muted"/></p>
  </div>
</div>


   {/* ----Row 2 End---- */}

{/* row-3 start accessoris Product */}
<AccessoriesProducts/>
{/* row-3 start accessoris Product */}


        </div>
        {/* col-8 end */}
      </div>
    </div>
  );
}

export default Products;
