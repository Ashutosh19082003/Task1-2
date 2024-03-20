import React from 'react'
import './Navbar.css'
import logo from '../../Assets/logo-hospital.jpg'
import search_icon from '../../Assets/search-w.png'
import emergency from '../../Assets/emergency.jpg'
import call from '../../Assets/call.png'

// import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo}alt="" className='logo' />

      <ul>
      <li>Home</li>
      <li>About Us </li>
      <li> Book Consultation</li>
      <li> Health Plans</li>
      <li> Contact</li>
      </ul>
      <div className='search-box'>
        <input type="text" placeholder='Search' />
        <img src={search_icon} alt="" />
      </div>
     <div className='icon'>
      <img src={emergency} alt=""className='icon-emergency' />
      <img src={call} alt=""className='icon-call' />
     </div>
    </div>
  )
}

export default Navbar
