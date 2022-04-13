import React from 'react'

import Section from '../Components/Section'
import Section2 from '../Components/Section2'
import LogoSection from '../Components/LogoSection'
import CardSlider1 from '../Components/CardSlider1'
import Carousel from '../Components/Carousel'
import BlogSlider from '../Components/BlogSlider'
import EmailSection from '../Components/EmailSection'
import Testimonial from '../Components/Testimonial'
import Footer from '../Components/Footer'
import ImageSection from '../Components/ImageSection'
import TabSlider from '../Components/TabSlider'







function Home() {
  return (
   <>

<Carousel/>
<Section/>
<CardSlider1/>
<Section2/>
<TabSlider/>
<Testimonial/>
<BlogSlider/>
<ImageSection/>
<LogoSection/>

<EmailSection/>
<Footer/>

   </>
  )
}

export default Home