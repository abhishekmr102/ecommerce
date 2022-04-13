import React from 'react'
import "../Styles/Section2.css"
import { Link } from "react-router-dom";


function Section2() {
  return (
<>
    <div className='container'>
        <div className="row justify-content-center pt-5">
            <div className="col-md-12  box2  ">
                <h5 className="text-danger mt-5 heading-h5 ms-5">EXPLORE THE NEW RANGE</h5>
                <h1 className="heading-h1 ms-5">Fashion is our <br/> Passion</h1>
                <p className="text-muted p-tag ms-5">See what's in store. Get excited! </p>
             <Link to="/collection"> <button type="button" className="btnn btn-dark ms-5 ">SHOP NOW</button></Link>  
            </div>
        </div>
    </div>
</>
  )
}

export default Section2