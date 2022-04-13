import React from 'react'
import '../Styles/BlogGrid.css'
import EmailSection from './EmailSection'
import Footer from './Footer'

function BlogGrid() {

const data = [
    {
        id:1,
        img:"https://images.unsplash.com/photo-1644982647711-9129d2ed7ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        comments:"MAR 10, 2022 | 0 COMMENTS",
        title:"Risus nec feugiat in fermen...",
        read:"READ MORE"
    },
    {
        id:2,
        img:"https://images.unsplash.com/photo-1648737966670-a6a53917ed19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        comments:"MAR 10, 2022 | 0 COMMENTS",
        title:"Risus nec feugiat in fermen...",
        read:"READ MORE"
    },
    {
        id:3,
        img:"https://images.unsplash.com/photo-1648912024151-7bdb206b0547?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        comments:"MAR 10, 2022 | 0 COMMENTS",
        title:"Risus nec feugiat in fermen...",
        read:"READ MORE"
    },

    {
        id:4,
        img:"https://images.unsplash.com/photo-1648737963080-109bbf325c90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        comments:"MAR 10, 2022 | 0 COMMENTS",
        title:"Risus nec feugiat in fermen...",
        read:"READ MORE"
    },

    {
        id:5,
        img:"https://images.unsplash.com/photo-1642330774345-50660bb721d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        comments:"MAR 10, 2022 | 0 COMMENTS",
        title:"Risus nec feugiat in fermen...",
        read:"READ MORE"
    },

    {
        id:6,
        img:"https://images.unsplash.com/photo-1635488640163-e5f6782cda6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NDB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        comments:"MAR 10, 2022 | 0 COMMENTS",
        title:"Risus nec feugiat in fermen...",
        read:"READ MORE"
    },

    {
        id:7,
        img:"https://images.unsplash.com/photo-1648827876448-d31d8019467c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        comments:"MAR 10, 2022 | 0 COMMENTS",
        title:"Risus nec feugiat in fermen...",
        read:"READ MORE"
    },

    {
        id:8,
        img:"https://images.unsplash.com/photo-1648900925554-dbe87a647154?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4NDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        comments:"MAR 10, 2022 | 0 COMMENTS",
        title:"Risus nec feugiat in fermen...",
        read:"READ MORE"
    },

    {
        id:9,
        img:"https://images.unsplash.com/photo-1648881280166-b636b291ff82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4NzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        comments:"MAR 10, 2022 | 0 COMMENTS",
        title:"Risus nec feugiat in fermen...",
        read:"READ MORE"
    },

    {
        id:10,
        img:"https://images.unsplash.com/photo-1648912024151-7bdb206b0547?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        comments:"MAR 10, 2022 | 0 COMMENTS",
        title:"Risus nec feugiat in fermen...",
        read:"READ MORE"
    },

    {
        id:11,
        img:"https://images.unsplash.com/photo-1648737963080-109bbf325c90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        comments:"MAR 10, 2022 | 0 COMMENTS",
        title:"Risus nec feugiat in fermen...",
        read:"READ MORE"
    },

    {
        id:12,
        img:"https://images.unsplash.com/photo-1642330774345-50660bb721d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        comments:"MAR 10, 2022 | 0 COMMENTS",
        title:"Risus nec feugiat in fermen...",
        read:"READ MORE"
    },
]


  return (
      <>
   <div className="container pt-5">
       <div className="row">
        {data.map((gridData)=>{
            return(
                <div className="col-md-4 pt-5 mb-1">
             <div className="blogGrid_box">
               <img src={gridData.img} alt="images" className="blog_grid_img"/>
              </div>
                  <p className="text-muted pt-4">{gridData.comments}</p>
                  <h4> {gridData.title} </h4>
                  <p><a href='/' className="Blog_Grid_read_more">READ MORE</a></p>
               </div>
            )
        })}
          
       </div>
   </div>
   <EmailSection/>
   <Footer/>
   </>
  )
}

export default BlogGrid