import React from "react";
import "../Styles/ProductCard.css";


function ProductCard() {
  return (
    <div className="container pt-5 ">
      <div className="row bg-dange ">
           <h5 className="mb-4 fw-bold">PRODUCTS</h5>
           <div className="col-md-5 bg-inf mb-5">
           <div className="Product_img_box"></div>
        </div>

        <div className="col-md-7 bg-warnin ">
          <div className="pt-4">
            <p className="para_text text-center bg-dark">New</p>
            <h6>
              Dark Red Plain Short <br />
              Sleeve T Shirt{" "}
            </h6>
            <h6>$99.00</h6>
          </div>
        </div>

        <div className="col-md-5 bg-inf mb-5">
          <div className="Product_img_box"></div>
        </div>

        <div className="col-md-7 bg-warnin ">
          <div className="">
            <div className="d-flex justify-content-between">
              <p className="para_text text-center bg-dark ">New</p>
              <p className="para_text text-center bg-danger ">Sale</p>
              <p className="para_text text-center bg-danger">-8%</p>
            </div>

            <h6>
              Blue Floral Mini Smock <br />
              Dress
            </h6>
            <h6 className="text-danger">$99.00</h6>
            <p className="text-muted text-decoration-line-through">$125.00</p>
          </div>
        </div>


        <div className="col-md-5 bg-inf mb-5">
        <div className="Product_img_box"></div>
        </div>

        <div className="col-md-7 bg-warnin ">
          <div className="pt-4">
            <p className="para_text text-center bg-dark">New</p>
            <h6>
              Dark Red Plain Short <br />
              Sleeve T Shirt
            </h6>
            <h6>$99.00</h6>
          </div>
        </div>

     <div className="pt-4 mb-4">
     <div className=" final_sale">
         <h2 className="ms-4 pt-4 text-light">Final Sale! <br/> -15% OFF</h2>
       <p className="mt-4"><a href="#" className="final_sale_anchor">SHOP NOW</a></p>
         </div>
     </div>


      </div>
    </div>
  );
}

export default ProductCard;
