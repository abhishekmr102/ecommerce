import React from 'react'
import { Link } from 'react-router-dom';
// import cloth6 from '..//../public/Assests/Images/cloth6.jpg';
import "../Styles/HomeDropdown.css"

function HomeDropdown() {
  return (
   <div className="container pt-4">
     <div className="row">
     <h6>Home</h6>
     <div className="col-md-2 ">
     <Link to='accessories' style={{textDecoration:'none', color:"black"}}>Accessories</Link>
     <p>Home_v1</p>
     {/* <p>Home_v2</p> */}
     {/* <p>Home_v3</p>
     <p>Home_v4</p>
     <p>Home_v5</p>
     <p>Home_v6</p>
     <p>Home_v7</p>
     <p>Home_v7</p> */}
     </div>

       {/* <div className="col-md-2 ">
     <h5>HEADER LAYOUTS</h5>
     <p>Ho7e_v1</p> */}
     {/* <p>Ho7e_v2</p>
     <p>Home_v3</p>
     <h5>FOOTER LAYOUTS</h5>
     <p>Home_v5</p>
     <p>Home_v6</p>
     <p>Home_v7</p>
     <p>Home_v7</p> */}
       {/* </div>/ */}
       <div className="col-md-2 "></div>

       <div className="col-md-3  ">
       <div>
       {/* <img src="D:\eComm\ecomm\public\Assests\Images\cloth6.jpg" alt='' className="img_dropdown"/> */}
       </div>
       <div className="text-center pt-2">
         {/* <h3>Clearance Sale</h3>
         <p className="text-muted">Up to 70% off & Free Shipping</p> */}
       </div>
        
       </div>
       <div className="col-md-3 ">
     {/* <div className="bg-danger img_dropdown2 text-center">
     
         <h6 className="text-light">Women's Fashion <br/>Boutique</h6>
         <p className="text-light fw-bold">Shop Now</p>
     
     </div> */}
       </div>
     </div>
   </div>
  )
}

export default HomeDropdown