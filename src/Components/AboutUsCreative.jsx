import React from "react";
import "../Styles/AboutUsCreative.css";
import EmailSection from "./EmailSection";
import Footer from "./Footer";
import { BsFillStarFill } from "react-icons/bs";

function AboutUsCreative() {

const cardData = [
    {
        id :1,
        para:"Add customer reviews and testimonials to showcase your store’s happy customers.",
        imgsmall:"https://media.istockphoto.com/photos/portrait-of-a-young-woman-outdoors-smiling-picture-id1135381120?k=20&m=1135381120&s=612x612&w=0&h=8utfDKWn-21DKO7bVKSANdfc2qqXZDVCtVFPlZf-yeE=",
        author:"Author's name",
        info:"Author's info"
    },
   
    {
        id :2,
        para:"Add customer reviews and testimonials to showcase your store’s happy customers.",
        imgsmall:"",
        author:"Author's name",
        info:"Author's info"
    },
   
    {
        id :3,
        para:"Add customer reviews and testimonials to showcase your store’s happy customers.",
        imgsmall:"",
        author:"Author's name",
        info:"Author's info"
    },
   
]



  return (
    <>
      <div className="container pt-5 mt-4 mb-5">
        <div className="row">
          <div className="col-6">
            <h1 className="">
              Style is a way to say <br /> who you are without <br /> having to
              speak
            </h1>
          </div>

          <div className="col-6">
            <h5>We guarantee the highest quality of the products we sell.</h5>
            <p className="text-muted">
              Several decades of successful operation and millions of happy
              customers let us feel certain about that. Besides, all items we
              sell pass thorough quality control, so no characteristics mismatch
              can escape the eye of our professionals.
            </p>
          </div>

          <div className="pt-5 mt-3 mb-3">
            <div className="about_creative-img"></div>
          </div>

          <div className="text-center pt-5 mt-3">
            <h2>Some facts About Us</h2>
            <p className="text-muted">
              Unlike product and catalog pages, which typically
            </p>
          </div>

          <div className="row pt-4 mt-4">
            <div className="col-md-3">
              <h1 className="about_creative_h1">24+</h1>
              <p className="text-muted fs-5 pt-3">Team members</p>
            </div>

            <div className="col-md-3">
              <h1 className="about_creative_h1">2010</h1>
              <p className="text-muted fs-5 pt-3">Year founded</p>
            </div>

            <div className="col-md-3">
              <h1 className="about_creative_h1">15k</h1>
              <p className="text-muted fs-5 pt-3">Customers</p>
            </div>

            <div className="col-md-3">
              <h1 className="about_creative_h1">$10m</h1>
              <p className="text-muted fs-5 pt-3">In total funding</p>
            </div>
          </div>
        </div>
      </div>

      {/* container-2nd start */}
      <div className="container-fluid img_container_about_creative  pt-5">
        <div className="row justify-content-around">
          <div className="col-md-5 pt-5 mt-5">
            <div className="ms-5">
              <h1 className="pt-5 Our_story">Our Story</h1>
              <h5 className="pt-3">
                Catering to your requirements, handling your needs with care.
              </h5>
              <p className="text-muted">
                Our store is more than just another average online retailer. We
                sell not only top quality products, but give our customers a
                positive online shopping experience.
              </p>

              <p className="text-muted">
                Forget about struggling to do everything at once: taking care of
                the family, running your business, walking your dog, cleaning
                the house, doing the shopping, etc.
              </p>
            </div>
          </div>

          <div className="col-md-5 pt-4 mt-1 mb-5 me-5">
            <div className="about_creative_img2 "></div>
          </div>
        </div>
      </div>
      {/* container-2nd end */}

      <div className=" pt-5 mt-4 text-center">
        <h2>Trusted by 15k users</h2>
        <p className="text-muted fs-5 pt-1">
          Create exactly what you need with our powerful bootstrap toolkit.
        </p>
      </div>

      <div className="container  pt-4 mb-3">
        <div className="row">

        {cardData.map((data)=>{
                return(
                    <div className="col-md-4 pt-4 mb-5">
            <div className="">
              <p className="logo">
                <BsFillStarFill className="about_creative_star_logo " />
                <BsFillStarFill className="about_creative_star_logo "/>
                <BsFillStarFill className="about_creative_star_logo "/>
                <BsFillStarFill className="about_creative_star_logo "/>
                <BsFillStarFill className="about_creative_star_logo "/>
              </p>
              <p className="pt-2 mb-5 small_card_h6">
              {data.para}
              </p>
              {/* small image */}
              <div className="row">
                <div className="col-md-3">
                  <div className="about_creative_small_img">{data.smallimg}</div>
                </div>
                <div className="col-md-9 pt-3">
                  <h5 className="fw-bold">{data.author}</h5>
                  <p className="">{data.info}</p>
                </div>
              </div>
            </div>
          </div>
                )
            })}


        

        </div>
      </div>

      {/* instagram */}

      <div className="container-fluid pt-3">
          <h2 className="text-center">@ Follow us on Instagram</h2>
          <div className="row pt-3 ">
              <div className="col-md-2 insta_img"></div>
              <div className="col-md-2  insta_img"></div>
              <div className="col-md-2  insta_img"></div>
              <div className="col-md-2  insta_img"></div>
              <div className="col-md-2  insta_img"></div>
              <div className="col-md-2  insta_img"></div>
          </div>
      </div>
      

      <EmailSection />
      <Footer />
    </>
  );
}

export default AboutUsCreative;
