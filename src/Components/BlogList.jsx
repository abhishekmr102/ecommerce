import React from "react";
import "../Styles/BlogList.css";
import EmailSection from "./EmailSection";
import Footer from "./Footer";

function BlogList() {

const blogList = [
    {
        id:1,
        para:"MAR 12, 2021 | ACCESSORIES | BOOTS | BRAND | 0 COMMENTS | POSTED BY TONY STARK",
        head:"Boots - novelties of this season",
        paragraph:"The most fashionable boots this year reached an unprecedented height. Literally. Forget about classic botforts - something extraordinary on the catwalk. The most extravagant option is Rick Owens: tall structured...",
        image:"https://images.unsplash.com/photo-1510113094577-801ea4488673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80",
        button:"READ MORE",
    },

    {
        id:2,
        para:"MAR 12, 2021 | ACCESSORIES | BOOTS | BRAND | 0 COMMENTS | POSTED BY TONY STARK",
        head:"Fashion coats 2021: key trends",
        paragraph:"As much as fashionistas love practical jackets, but for a beloved coat in a women's wardrobe, there is always a place. Stylish, elegant, and feminine, it will not only warm...",
        image:"https://images.unsplash.com/photo-1632149933606-fa45623682ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwNnxTNE1LTEFzQkI3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        button:"READ MORE",
    },

    {
        id:3,
        para:"MAR 12, 2021 | ACCESSORIES | BOOTS | BRAND | 0 COMMENTS | POSTED BY TONY STARK",
        head:"How to choose the right jeans?",
        paragraph:"In the dressing room of every modern woman, there is the most popular and convenient thing that we fondly love, of course I mean jeans! We wear our favorite jeans...",
        image:"https://images.unsplash.com/photo-1589145319365-7c97684604dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTd8fGplYW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        button:"READ MORE",
    },

    {
        id:4,
        para:"MAR 12, 2021 | ACCESSORIES | BOOTS | BRAND | 0 COMMENTS | POSTED BY TONY STARK",
        head:"Fashion T-shirts - the main novelties of the se...",
        paragraph:"A T-shirt can become part of a basic wardrobe, or it can decorate a stylish style image. We choose fashionable women's T-shirts, which have already become the main novelties of...",
        image:"https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        button:"READ MORE",
    },

   
    
]

  return (
    <>
      <div className="container pt-5">

      {blogList.map((data)=>{
              return(
                <div className="row">
          <div className="col-md-6 mt-4">
            <div className="blog_list_box">
              <img src={data.image} alt="image" className="blog_list_img" />
            </div>
          </div>

          <div className="col-md-6">
            <div className="pt-5 mt-3">
              <p className="text-muted blog_list_para"> {data.para} </p>

              <h2> {data.head} </h2>

              <p className="text-muted pt-3"> {data.paragraph} </p>
              <p className="blog_list_readmore text-center mt-4"> {data.button} </p>
            </div>
          </div>
          <hr className="mt-5 blog_list_hr"/>
        </div>
        
      
              )
          })}



   
      </div>

      <EmailSection/>
      <Footer/>
    </>
  );
}

export default BlogList;
