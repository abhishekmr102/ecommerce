import React from 'react'
import "../Styles/EmailSection.css"

function EmailSection() {
  
  return (
   <div className='container-fluid p-5'>
    <hr className="hr_tag_email"/>
       <div className="row justify-content-evenly ">

           <div className="col-md-5 bg-dange ">
          <div className="pt-5">
          <h2 className="email_heading">SUBSCRIBE TO OUR NEWSLETTER</h2>
            <p className="text-muted">Join our mailing list for the latest product updates!</p>
          </div>
           </div>

           <div className="col-md-5 bg-warnin">
           <div className=' pt-5'>
          <input type="text" className="Email_input " placeholder='Email Address' />
          <button type="button " className="ms-3 email_btn">SUBSCRIBE</button>
          </div>
           </div>
      
       </div>
       <hr className="hr_tag_email"/>
   </div>
  )
}

export default EmailSection