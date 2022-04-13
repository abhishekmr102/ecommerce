import React, { useState, useEffect } from "react";
import "../Styles/BlogSlider.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
// import BlogData from "../../public/Api/BlogData/BlogData";

// const BlogData = [
//   {
//     id: 1,
//     name: "Fashion T-shirts - the main...",
//     comment: "  MAR 12, 2022 | 0 COMMENTS | POSTED BY",
//     span: "TONY STARK",
//     anchor: " READ MORE",
//     img: "https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY=",
//   },

//   {
//     id: 2,
//     name: "Boots - novelties of this s...",
//     comment: "  MAR 12, 2022 | 0 COMMENTS | POSTED BY",
//     span: "TONY STARK",
//     anchor: " READ MORE",
//     img: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
//   },

//   {
//     id: 3,
//     name: "Fashion coats 2022: key trends",
//     comment: "  MAR 12, 2022 | 0 COMMENTS | POSTED BY",
//     span: "TONY STARK",
//     anchor: " READ MORE",
//     img: "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&w=1000&q=80",
//   },
// ];

function BlogSlider() {
  //   const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 4,
  //     slidesToScroll: 4,
  //   };

  const [blogData, setblogData] = useState([]);

  useEffect(() => {
    fetch("/api/blogData/blogData.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setblogData(data);
      });
  }, []);

  return (
    <>
      <div className="container  pt-5">
        <h3 className="mb-5">
          Fresh news from <br />
          our blog
        </h3>
        <div className="row ">
          {/* <Slider {...settings}> */}
          {blogData.map((data) => {
            return (
              <div className="col-md-4 mb-4">
                <div className="blog_img_div">
                  <img src={data.img} className="blog_img" alt="images" />
                </div>
                <p className="text-blog text-muted">
                  {data.comment}
                  <span className="text-span">{data.span}</span>
                </p>
                <h4>{data.name}</h4>
                <Link to="/tshirt" className="text-dark anchor-tag ">
                  {data.anchor}
                </Link>
              </div>
            );
          })}
          {/* </Slider> */}
        </div>
      </div>

      {/* <div className="container pt-5 bg-warnin ">
        <h3 className="mt-5">
          frgr <br />
          our blog
        </h3>

        <div className="row blog-box mt-5">
          <div className="col-md-4 bg-succes">
            <div className="blog_img_1 "></div>

            <div>
              <p className="text-blog text-muted">
                MAR 12, 2022 | 0 COMMENTS | POSTED BY{" "}
                <span className="text-span">TONY STARK</span>
              </p>
              <Link to="/tshirt">
                {" "}
                <h4>Fashion T-shirts - the main...</h4>
              </Link>
              <a href="" className="text-dark anchor-tag ">
                READ MORE
              </a>
            </div>
          </div>

          <div className="col-md-4 bg-dange">
            <div className="blog_img_2"></div>

            <div>
              <p className="text-blog text-muted">
                MAR 12, 2022 | 0 COMMENTS | POSTED BY{" "}
                <span className="text-span">TONY STARK</span>
              </p>
              <Link to="/tshirt">
                {" "}
                <h4>Boots - novelties of this s...</h4>{" "}
              </Link>
              <a href="" className="text-dark anchor-tag ">
                READ MORE
              </a>
            </div>
          </div>

          <div className="col-md-4 bg-primar">
            <div className="blog_img_3"></div>

            <div>
              <p className="text-blog text-muted">
                MAR 12, 2022 | 0 COMMENTS | POSTED BY{" "}
                <span className="text-span">TONY STARK</span>
              </p>
              <Link to="/tshirt">
                {" "}
                <h4>Fashion coats 2022: key trends</h4>{" "}
              </Link>
              <a href="" className="text-dark anchor-tag ">
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </div> */}
      {/* })} */}
    </>
  );
}

export default BlogSlider;
