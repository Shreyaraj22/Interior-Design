import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"
import NavBar from './components/navBar'
import HeroSection from './components/HeroSection'
import InfoPage from './components/InfoPage'
import Footer from './components/Footer'


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <HeroSection />
        <InfoPage />
        <Footer />
      </>
    )
  }
]);


function App() {
  return (
    <>
  
     <RouterProvider router={router} />
    </>
  )
}

export default App
