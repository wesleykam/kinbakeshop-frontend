import React from 'react'
import './Navbar.css'
import logo from '../../Assets/kin_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className='left-nav'>
            <li><a href="/">Home</a></li>
            <li><a href="menu">Menu</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#more">More</a></li>
        </ul>

        <img src={logo} className='logo' alt='logo'/>

        <ul className='right-info'>
            <li><a href="#cart">
                <FontAwesomeIcon icon={faCartShopping} /></a>
                </li>
            <li><a href="#profile">
                <FontAwesomeIcon icon={faUser} /></a>
                </li>
            <li><a href="#search">
                <FontAwesomeIcon icon={faMagnifyingGlass} /></a>
                </li>
        </ul>
    </div>
  )
}

export default Navbar
