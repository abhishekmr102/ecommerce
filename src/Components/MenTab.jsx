import React from 'react'
import { ImList } from "react-icons/im";
import { FaGripLinesVertical} from "react-icons/fa";
import MenProductsRight from './MenProductsRight';
// import AccessoriesProducts from './AccessoriesProducts'

// import "../Styles/TabSlider.css";


function MenTab() {



  return (
      
    <div className="container mt-5 mb-5  bg-succes">
    
     <ul className="nav nav-pills mb-5 float-end" id="pills-tab" role="tablist">
  
  <li className="nav-item " role="presentation">
    <button className="nav-link bg-light text-dark  tab_btn tab_btn_active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><FaGripLinesVertical className="text-muted fs-5"/></button>
  </li>
  {/* <li className="nav-item" role="presentation">
    <button className="nav-link bg-light text-dark tab_btn " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><FaGripLinesVertical className="text-muted fs-5"/><FaGripLinesVertical className="text-muted fs-5"/></button>
  </li> */}

  <li className="nav-item" role="presentation">
    <button className="nav-link bg-light text-dark tab_btn " id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"><ImList className="text-muted fs-5"/></button>
  </li>

</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active mt-1" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><MenProductsRight/></div>
  <div className="tab-pane fade mt-1" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">hrbfiufhdcbu</div>
  <div className="tab-pane fade mt-1 " id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">,mcdkbgfjbjkb</div>
</div>



  </div>
  )
}

export default MenTab