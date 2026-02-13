import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import InfoPage from '../components/InfoPage'
import Info from '../components/Info'
import Footer from '../components/Footer'
import ScrollToTop from './ScrollToTop'

const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <NavBar />
      <HeroSection />
      <InfoPage />
      <Info />
      <Footer />
    </div>
  )
}

export default Home
