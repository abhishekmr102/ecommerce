import React from 'react'
import "../Styles/Section.css"
import { Link } from "react-router-dom";

function Section() {
  return (
  <>
   <div className='container  mt-5 pt-5'>
       <div className='row justify-content-md-center '>
           <div className="col-md-4 box1  ">
           <h1 className='mt-4 heading '>Get your <br/> Fashion style</h1>
            <p className='text-muted para'>You'll always be in fashion with our collection of clothing</p> 
           <Link to='/collection' className="text-dark anchor-tag " >EXPLORE COLLECTIONS</Link>
           </div>

           <div className="col-md-4 box1 ">
           <div className='bgimg bg-success'>
         <Link to='/women'> <button type='button' className="btn" >WOMENS</button></Link> 
           </div>
           </div>

           <div className="col-md-4 box1">
           <div className="bgimg-2">
         <Link to="/men">  <button type='button' className="btn ">MENS</button></Link>
           </div>
           </div>

       </div>
   </div>
  </>
  )
}

export default Section