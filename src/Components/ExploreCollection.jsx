import React from 'react'
import '../Styles/ExploreCollection.css'

function ExploreCollection(props) {
  return (
 
    <>
   
         <div className="col-md-4  collection_div mb-5">
             <div className="collection_Img1 bg-ligh">
            </div> 
            <div className="text-center pt-4">
            <h3>Accessories</h3>
            <p>11 Products</p>
            </div>
         </div>

         <div className="col-md-4 bg-inf collection_div_center mb-5">
            <div className="collection_img_center1 bg-warning">
            </div>
            <div className="text-center pt-4">
            <h3>Braceletes</h3>
            <p>6 Products</p>
            </div>
         </div>

         <div className="col-md-4 bg-dange collection_div mb-5">
            <div className="collection_img3 bg-light">
            </div>
            <div className="text-center pt-4">
            <h3>Clothing</h3>
            <p className="text-muted">10 Products</p>
            </div>
         </div>
</>
   
  )
}

export default ExploreCollection