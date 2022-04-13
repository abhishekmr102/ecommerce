import React from 'react'
import "../Styles/TabSlider.css";
import Clothing from './Clothing';
import Footwear from './Footwear';
import TabShoes from './TabShoes';

function TabSlider() {
  
  return (
  <div className="container tab_slider_container mb-5 bg-succes">
    
     <ul className="nav nav-pills mb-5 float-end " id="pills-tab" role="tablist">
  
  <li className="nav-item " role="presentation">
    <button className="nav-link bg-light text-dark  tab_btn tab_btn_active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">CLOTHING</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link bg-light text-dark tab_btn " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">SHOES</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link bg-light text-dark tab_btn " id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">FOOTWEAR</button>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active mt-1" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><Clothing/></div>
  <div className="tab-pane fade mt-1" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><TabShoes/></div>
  <div className="tab-pane fade mt-1 " id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"><Footwear/></div>
</div>



  </div>
  )
}

export default TabSlider