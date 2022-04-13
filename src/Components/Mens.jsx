import React from 'react'
import MensAccordian from './MensAccordian'
import MensLeftProducts from './MensLeftProducts'
import EmailSection from './EmailSection'
import Footer from './Footer'
import '../Styles/Mens.css'
import { AiOutlineRight } from "react-icons/ai";
// import MenTab from './MenTab';
// import MenProductsRight from './MenProductsRight'
import MenProductRight2 from './MenProductRight2'


function Mens() {
  return (
      <>
   <div className="container pt-5">
       <div className="row">
       {/* -------col-4 Start------- */}
           <div className="col-md-4 ">
               <MensAccordian/>
              
                <div className="pt-4">
                  <input type="text" className="search_box" placeholder="Search" />
               </div>
             
             <MensLeftProducts/>

           </div>
   {/* -------col-4 end------- */}


   {/* -------col-8 start------ */}
           <div className="col-md-8 bg-ligh">
               <div className="row">
                   <div className="col-md-4 right_top_img"> </div>
                   
                   <div className="col-md-8 bg-succe ms-4">
                         <div className="row">
                             <h1 className="pt-4">Mens</h1>
                             <div className="col-md-4  pt-2">
                             <div className="text-mute">
                                 <p><a href='sdd' className="text-muted" ><AiOutlineRight className="logo_men"/>All</a></p>
                                 <p><a href='sdd' className="text-muted"><AiOutlineRight className="logo_men"/>Badge_1</a></p>
                                 <p><a href='sdd' className="text-muted"><AiOutlineRight className="logo_men"/>Bag</a></p>
                                 <p><a href='sdd' className="text-muted"><AiOutlineRight className="logo_men"/>Best Price</a></p>
                                 </div>
                             </div>

                             <div className="col-md-4  pt-2">
                                 <p><a href='sdd' className="text-muted"><AiOutlineRight className="logo_men"/>Boots</a></p>
                                 <p><a href='sdd' className="text-muted"><AiOutlineRight className="logo_men"/>Crystal</a></p>
                                 <p><a href='sdd' className="text-muted"><AiOutlineRight className="logo_men"/>Long Sleeve</a></p>
                                 <p><a href='sdd' className="text-muted"><AiOutlineRight className="logo_men"/>Online</a></p>
                             </div>

                             <div className="col-md-4  pt-2">
                                 <p><a href='sdd' className="text-muted"><AiOutlineRight className="logo_men"/>Polos</a></p>
                                 <p><a href='sdd' className="text-muted"><AiOutlineRight className="logo_men"/>Trainer</a></p>
                             </div>

                         </div>
                   </div>
               </div>
               {/* ---Tabs---- */}
            {/* <MenTab/> */}
            {/* <MenProductsRight/> */}
           
            <h6 className="text-muted  pt-5">9 Products</h6>

            <MenProductRight2/>
            <MenProductRight2/>
            <MenProductRight2/>
            <MenProductRight2/>
           

           </div>
           
 {/* -------col-8 end------ */}       
       </div>
   </div>
   <EmailSection/>
      <Footer/>
      </>
  )
}

export default Mens