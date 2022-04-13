import React from 'react'
import EmailSection from './EmailSection';
import ExploreCollection from './ExploreCollection';
import Footer from './Footer';

function ExpCollection() {
  
  return (
  <>

    <div className="container mb-4 pt-4">
        <div className="row">
        <h1 className="text-center pt-4 mb-5">Collection</h1>
        <ExploreCollection/>
        <ExploreCollection/>
        <ExploreCollection/>
        <ExploreCollection/>
        </div>
       
    </div>
    <EmailSection/>
     <Footer/> 
  </>
  )
}

export default ExpCollection