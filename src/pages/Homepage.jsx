import React from 'react'
import Header from '../components/Header'
import Partner from '../components/Partner'
import About from '../components/About'
import Questions from '../components/Questions'
import Statistics from '../components/Statistics'
import Service from '../components/Service'
import Cta from '../components/Cta'
// import Portfolio from '../components/Portfolio'g
import Team from '../components/Team'
import Pricing from '../components/Pricing'
import Faq from '../components/Faq'
import Contact from '../components/Contact'
import Newsletter from '../components/Newsletter'
import More from '../components/More'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div>
      <Header />
      <Partner />
       <About />
      <Questions />
      <Statistics/>
      <Service/>
      <Cta/>
      {/* <Portfolio/> */}
    <Team/>
       <Pricing/>
      <Faq/>
      <Contact/>
      <Newsletter/>
      <More/>
      <Footer/>
    </div>
  )
}

export default Homepage