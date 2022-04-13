import React from 'react'
import '../Styles/Women.css'
import { AiOutlineRight } from "react-icons/ai";
import EmailSection from '../Components/EmailSection'
import Footer from '../Components/Footer'


function Women() {
  return (
  <div className="container-fluid">
      <div className="row  women_row bg-light">
          <h2 className="text-center pt-5">Women</h2>
          <div className="d-flex justify-content-center  ul_items">
            <ul className="mb-5"> 
                <li><a href="" ><AiOutlineRight className="women_logo"/>All</a></li>
                <li><a href="" ><AiOutlineRight className="women_logo "/>Bag</a></li>
                <li><a href="" ><AiOutlineRight className="women_logo "/>Boots</a></li>
            </ul>

            <ul>
                <li><a href="" ><AiOutlineRight className="women_logo "/>Dress</a></li>
                <li><a href="" ><AiOutlineRight className="women_logo "/>Long</a></li>
                <li><a href="" ><AiOutlineRight className="women_logo "/>Polos</a></li>
            </ul>

            <ul>
                <li><a href="" ><AiOutlineRight className="women_logo  "/>Skirt</a></li>
              
            </ul>
        </div>
      </div>

      <EmailSection/>
      <Footer/>
  </div>
  )
}

export default Women