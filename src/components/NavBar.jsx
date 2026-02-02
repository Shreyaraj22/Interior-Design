import React from 'react'
import { Link } from 'react-router'
import logo from "../assets/logo.jpg"

const NavBar = () => {
  return (
    <>
 <nav className="w-full bg-gray-600 flex items-center justify-between px-10 py-4 text-xl font-medium">
  <img className="h-14" src={logo} alt="logo" />
  <div className="flex gap-6 text-white">
    <Link className="text-2xl " to="/home">Home</Link>
    <Link className="text-2xl" to="/about">About Us</Link>
    <Link className="text-2xl" to="/contact">Contact Us</Link>
    <Link className="text-2xl" to="/work">Our Work</Link>
  </div>
</nav>

    </>
  )
}

export default NavBar
