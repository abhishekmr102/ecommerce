import React from "react";
import "../Styles/BlogFashionTshirt.css";
import EmailSection from '../Components/EmailSection'
import Footer from '../Components/Footer'
import { BiChevronLeft,BiChevronRight } from "react-icons/bi";
import PostComment from "./PostComment";
import { Link } from "react-router-dom";


function BlogFashionTshirt() {
  return (
      <>
    <div className="container mt-5 pt-4">
      <div className="row justify-content-between">
        <div className="col-md-8">
          <h1 className="">
            Fashion T-shirts - the main <br />
            novelties of the season
          </h1>

          <div className="row pt-5">
            <div className="col-md-6">
              <p>MAR 12, 2022 | 0 COMMENTS</p>
            </div>
            <div className="col-md-6">
              <p className="text-muted float-end">
                POSTED BY <span className="text-dark">TONY STARK</span>
              </p>
            </div>
          </div>
          <hr />

          <div className="img_tshirt mb-4 pt-5 mt-5 "></div>

          <div className="pt-4">
            <p className="text-muted fs-5">
              A T-shirt can become part of a basic wardrobe, or it can decorate
              a stylish style image. We choose fashionable women's T-shirts,
              which have already become the main novelties of the season.
            </p>

            <p className="text-muted fs-5">
              Bright stylish women's T-shirts often appear in collections of
              popular brands. Trendsetters mix printed T-shirts from
              high-profile collaborations with artists and musicians with
              capsule kits. It looks fresh and stylish.
            </p>

            <p className="text-muted fs-5">
              The trend of double print has long been entrenched in street
              fashion and smoothly switched to everyday style. The original
              design begins in front - usually, it is a small inscription or
              tiny drawing, the continuation of which is on the back of the
              T-shirt. It is better to include such models in a sports image,
              for example, with wide pants and voluminous sneakers.
            </p>

            <p className="text-muted fs-5">
              If you can't afford luxury brand clothing, you don't have to be a
              hostage to the mass market - create unique things with your hands.
              Invent individual prints and print or paint them with special inks
              on a basic white or black T-shirt. In addition, you can decorate a
              thing with original decor, for example, beads or threads. In
              addition, this step is more than environmentally friendly, it is
              unlikely that you will want to throw away your own T-shirt in a
              year and change it to the next mass-market product.
            </p>
          </div>

            <div className="d-flex pt-3 text-muted justify-content-between ">
                <p className="text-dark fw-bold">BLOG TAGS:</p>
                <p className="blog_tags">Brand,</p>
                <p className="blog_tags">Casual,</p>
                <p className="blog_tags">Clothes,</p>
                <p className="blog_tags">Clothing,</p>
                <p className="blog_tags">Fashion,</p>
                <p className="blog_tags">Fashionable,</p>
                <p className="blog_tags">Garment,</p>
                <p className="blog_tags">Printing,</p>
                <p className="blog_tags">T-Shirts,</p>
            </div>

        <hr className="mt-5"/> 
            <div className="row">
                <div className="col-md-6 tshirt_box">
                   <div className="row mt-5 pt-3">
                       <div className="col-md-4 image_small_tshirt"></div>
                       <div className="col-md-8">
                           <p className="text-muted pointer">MAR 12, 2022 | 0 COMMENTS</p>
                           <p className="pointer">How to choose the right <br/>jeans?</p>
                           <p className="text-muted text-center PreviousPost"><BiChevronLeft className="fs-3"/>PREVIOUS POST</p>
                           <hr className="text-dark"/>
                       </div>
                   </div>
                </div>


                  <div className="col-md-6 tshirt_box">
                    <div className="row mt-5 pt-3">
                        <div className="col-md-8">
                           <p className="text-muted pointer">MAR 12, 2022 | 0 COMMENTS</p>
                           <p className="pointer">Fashion coats 2022:key <br/>trends</p>
                           <p className="text-muted text-center PreviousPost">NEXT POST<BiChevronRight className="fs-3"/></p>
                           <hr className="text-dark"/>
                       </div>
                       <div className="col-md-4 image_small_tshirt"></div>
                   </div>
                </div>
            </div>
        <hr className="mt-5"/> 
        
  {/* ----Post Commments start----- */}
        <PostComment/>
  {/* ----Post Commments end----- */}

        </div>

       {/* -----col-4 right side start----- */}
        <div className="col-md-3 ">
            <div className="">
              <input type="text" className="search_input " placeholder="Search"/>
           </div>

             <h5 className="pt-5 fw-bold">CATEGORIES LIST</h5>
             <div className="pt-2 ms-3 ">
               <p><a href="#" className="text-muted">Blog Grid</a></p>
               <p><a href="#" className="text-muted">Blog List</a></p>
               <p><a href="#" className="text-muted">Blog mansonry</a></p>
               <p><a href="#" className="text-muted">Blog With Sidebar</a></p>
               <p><a href="#" className="text-muted">Single Post page</a></p>
             </div>
             <hr className="mt-4"/>
       
            <div className="">
              <h5 className="fw-bold">RESENT POST</h5>
              <p className="text-muted pt-4">MAR 12, 2022 | 0 COMMENTS</p>
              <h6>Boots - novelties of the season</h6>

              <p className="text-muted pt-4">MAR 12, 2022 | 0 COMMENTS</p>
              <h6>Fashion coats 2022:key trends</h6>

              <p className="text-muted pt-4">MAR 12, 2022 | 0 COMMENTS</p>
              <h6>Fashion T-shirt - the main novelties <br/> of...</h6>
            </div>
            <hr className="mt-4"/>

            <div className="">
              <h5 className="fw-bold">BLOG TAGS</h5>
              <p className="mt-3 ms-3 text-muted blog_tags">
              Accessories, Bag, Blazer, Boots,<br/>
              Brand, Cap, Cardigan, Casual, <br/>
              Clothes, Clothing, Coat, Coats, <br/>
              Denim, Dress, Eyeglasses, <br/>
              Eyewear, Fashion, Fashionable, <br/>
              Footwear, Garment, Hat,<br/>
              Haedgear, Heels, Jacket, Jeans,<br/>
              Jewellery, Leather, OutWear, Pants,<br/>
              Printing, Shoes, Skirt, Sneakers, <br/>
              Sportswear, Summer, Sunglasses,<br/>
              T-Shirts, Trend, Trousers, Watch,<br/>
              Wristwatch
              </p>
            </div>
            <hr className="mt-4"/>

            <div className="blog_side_img mt-5">
              <h2 className="ms-4 pt-4">Final Sale! <br/> -15% OFF</h2>
              <p className="ms-5 pt-3 fw-bold"><Link to="collection">SHOP NOW</Link></p>
            </div>

        </div>
        {/* -----col-4 right side end----- */}
      </div>
    </div>
      <EmailSection/>
      <Footer/>
    </>
  );
}

export default BlogFashionTshirt;
