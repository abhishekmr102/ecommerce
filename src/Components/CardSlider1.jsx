import React, { useState, useEffect } from "react";
import "../Styles/CardSlider1.css";
import { AiOutlineHeart } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
// import Images from "../Tabs/Images";

const Images = [
  "https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg",
  "https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
  "https://www.hubspot.com/hubfs/Google%20Drive%20Integration/How%20to%20Nest%20Your%20CSS%20Selectors%20for%20Cleaner%20Code.jpeg",
];

// const CardSlider = [
// {
//   id: 1,
//   name: "Black Tiered Mini Dress sdvsgdt",
//   new: "New",
//   sale: "Sale",
//   discount: "-15%",
//   img: "https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY=",
//   smallimg:"https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY="
// },

// {
//   id: 2,
//   name: "Boots - novelties of this s...",
//   comment: "  MAR 12, 2022 | 0 COMMENTS | POSTED BY",
//   span: "TONY STARK",
//   anchor: " READ MORE",
//   img: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
// },

// {
//   id: 3,
//   name: "Fashion coats 2022: key trends",
//   comment: "  MAR 12, 2022 | 0 COMMENTS | POSTED BY",
//   span: "TONY STARK",
//   anchor: " READ MORE",
//   img: "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&w=1000&q=80",
// },
// ];

function CardSlider1() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const [selectImg, setSelectImg] = useState(Images[0]);
  const [cardSliderData, setCardSliderData] = useState([]);
 
  
console.log(cardSliderData)
console.log(selectImg);


  useEffect(() => {
    fetch("/api/cardSlider/cardSlider.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCardSliderData(data);
      });
  }, []);

  return (
    <>
      <div className="container  pt-5 mb-5">
        <div className="mt-5 text-center ">
          <h2 className="mb-3 ">Best sellers</h2>
          <h6 className="text-muted mb-5">Top sale in this week</h6>
        </div>

        <div className="row">
          <Slider {...settings}>
            {/* ------map 1st start---- */}
            {cardSliderData.map((card) => {
              return (
                <div className="col-md-3 ">
                  <div className="box-2">
                    <img src={selectImg} alt="" className="card_slider_img" />

                    {/* <div>
              <p className="bg-danger w-25 text-light text-center ">{card.discount}</p>
                <p className="float-end me-4 ">
                  <AiOutlineHeart />
                </p>
                <p className="bg-dark text-light w-25 text-center">{card.new}</p>
              </div>
              <p className="bg-danger w-25 text-light text-center">{card.sale}</p>
          */}
                  </div>

                  <div className="text-center d-md-flex pt-3 justify-content-center">
                    {/* ----inner map for images change--- */}
                    {Images.map((img, index) => (
                      <img
                        src={img}
                        key={index}
                        className="card_slider_small_img_1"
                        alt=""
                        onClick={() => setSelectImg(img)}
                      />
                    ))}
                    {/* ----inner map for images change end--- */}

                    {/* <img  src={card.smallimg}  className="card_slider_small_img_1 ms-4" alt="" onClick={()=> setCardSliderData(cardSliderData)}/>
               <img  src={card.smallimg2}  className="card_slider_small_img_1 " alt="" onClick={()=> setCardSliderData(cardSliderData)}/>
               <img  src={card.smallimg3}  className="card_slider_small_img_1 " alt="" onClick={()=> setCardSliderData(cardSliderData)}/>
               <img  src={card.smallimg4}  className="card_slider_small_img_1 " alt="" onClick={()=> setCardSliderData(cardSliderData)}/> */}
                    {/* <div className="card_slider_small_img_1 ms-4">{card.sale}</div>
              <div className="card_slider_small_img_1"></div>
              <div className="card_slider_small_img_1"></div>
              <div className="card_slider_small_img_1"></div> */}
                  </div>
                  <div className="pt-2">
                    <h6 className="text-center">{card.name}</h6>
                    <h6 className="text-center">$150.00 </h6>
                  </div>
                </div>
              );
            })}
            {/* ------map 1st end---- */}


            {/* ------map 2nd----- */}
            {cardSliderData.map((card, ind) => (
              <div className="col-md-3">
                <div className="box-2">
                  <img src={card.img} className="card_slider_img" alt="" />
                  {/* <p className="bg-dark w-25 text-light text-center">New</p>
              <p className="float-end me-4">
                <AiOutlineHeart />
              </p> */}
                </div>

                <div className="text-center d-md-flex pt-3">
                  <img
                    src={card.smallimg}
                    className="card_slider_small_img_1  ms-2"
                    alt=""
                  />
                  <img
                    src={card.smallimg}
                    className="card_slider_small_img_1 ms-2"
                    alt=""
                  />
                  {/* <div className="card_slider_small_img_1 ms-5"></div>
              <div className="card_slider_small_img_1 ms-2"></div> */}
                </div>

                <div className="pt-2">
                  <Link to="/productdetails">
                    <h6 className="text-center">Black Tiered Mini Dress</h6>
                  </Link>
                  <h6 className="text-center">$150.00 </h6>
                </div>
              </div>
            ))}
            {/* ------map 2nd end----- */}
          </Slider>
        </div>

        {/* <Slider {...settings}>
          <div className="col-md-3 bg-primar">
            <div className="  box-2">
              <p className="bg-dark w-25 text-light text-center">New</p>
              <div>
                <p className="float-end me-4 ">
                  <AiOutlineHeart />
                </p>
                <p className="bg-dark text-light w-25">Outstock</p>
              </div>
            </div>
            <div className="mt-3">
            <Link to="/productdetails">  <h6 className="text-center ">Black Tiered Mini Dress</h6></Link>
              <h6 className="text-center ">$50.00 </h6>
            </div>
          </div>

          <div className="col-md-3">
            <div className="  box-2">
              <p className="bg-danger w-25 text-light text-center ">-15%</p>
              <div>
                <p className="float-end me-4 ">
                  <AiOutlineHeart />
                </p>
                <p className="bg-dark text-light w-25 text-center">New</p>
              </div>
              <p className="bg-danger w-25 text-light text-center">Sale</p>
            </div>
            <div className="mt-3">
           <Link to="/productdetails">  <h6 className="text-center">Black Tiered Mini Dress</h6></Link>
              <h6 className="text-center">$150.00 </h6>
            </div>
          </div>

           <div className="col-md-3">
            <div className="  box-2">
              <p className="bg-dark w-25 text-light text-center">New</p>
              <p className="float-end me-4">
                <AiOutlineHeart />
              </p>
            </div>
            -------Small images--------
             <div className="text-center d-md-flex">
              <div className="card_slider_small_img_1 ms-5"></div>
              <div className="card_slider_small_img_1 ms-2"></div>
            </div>

            <div className="mt-1">
            <Link to="/productdetails">  <h6 className="text-center">Black Tiered Mini Dress</h6></Link>
              <h6 className="text-center">$150.00 </h6>
            </div>
          </div> 
-------Small images end--------

 
          <div className="col-md-3">
            <div className="  box-2">
              <p className="bg-danger w-25 text-light text-center ">-15%</p>
              <div>
                <p className="float-end me-4 ">
                  <AiOutlineHeart />{" "}
                </p>
                <p className="bg-dark text-light w-25 text-center">New</p>
              </div>
              <p className="bg-danger w-25 text-light text-center">Sale</p>
            </div> 
-------Small images--------
 
            <div className="text-center d-md-flex ">
              <div className="card_slider_small_img_1 ms-4"></div>
              <div className="card_slider_small_img_1"></div>
              <div className="card_slider_small_img_1"></div>
              <div className="card_slider_small_img_1"></div>
            </div>
            <div className="mt-3">
              <h6 className="text-center">Black Tiered Mini Dress</h6>
              <h6 className="text-center">$150.00 </h6>
            </div>
          </div> 
-------Small images end--------

           <div className="col-md-3">
            <div className="  box-2">
              <p className="bg-danger w-25 text-light text-center ">-15%</p>
              <div>
                <p className="float-end me-4 ">
                  <AiOutlineHeart />{" "}
                </p>
                <p className="bg-dark text-light w-25 text-center">New</p>
              </div>
              <p className="bg-danger w-25 text-light text-center">Sale</p>
            </div>
            <div className="mt-3">
          <Link to="/productdetails">   <h6 className="text-center">Black Tiered Mini Dress</h6></Link>
              <h6 className="text-center">$150.00 </h6>
            </div>
          </div> 

           <div className="col-md-3">
            <div className="  box-2">
              <p className="bg-danger w-25 text-light text-center ">-15%</p>
              <div>
                <p className="float-end me-4 ">
                  <AiOutlineHeart />{" "}
                </p>
                <p className="bg-dark text-light w-25 text-center">New</p>
              </div>
              <p className="bg-danger w-25 text-light text-center">Sale</p>
            </div>
            -------Small images--------
             <div className="text-center d-md-flex">
            <div className="card_slider_small_img_1 ms-5"></div>
              <div className="card_slider_small_img_1 ms-2"></div>
             
            </div>
            <div className="mt-3">
              <h6 className="text-center">Black Tiered Mini Dress</h6>
              <h6 className="text-center">$150.00 </h6>
            </div>
          </div> 
-------Small images end--------

           <div className="col-md-3">
            <div className="  box-2">
              <p className="bg-danger w-25 text-light text-center ">-15%</p>
              <div>
                <p className="float-end me-4 ">
                  <AiOutlineHeart />{" "}
                </p>
                <p className="bg-dark text-light w-25 text-center">New</p>
              </div>
              <p className="bg-danger w-25 text-light text-center">Sale</p>
            </div>
            <div className="mt-3">
              <h6 className="text-center">Black Tiered Mini Dress</h6>
              <h6 className="text-center">$150.00 </h6>
            </div>
          </div> 
         </Slider>   */}
      </div>
    </>
  );
}

export default CardSlider1;
