import React from 'react'
import './BottomNavbar.css'
import logo from '../../Assets/kin_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const BottomNavbar = () => {
  return (
    <div className='bottom-navbar'>
        <img src={logo} className='left logo' alt='logo'/>

        <p className='middle location'>
            Kin Bakeshop © 2023 <br/>
            199 S. Turnpike Rd, Suite 103, Santa Barbara, CA 93111 <br/>
            (805) 705-8498
        </p>

        <ul className='right socials'>
            <li><a href="#instagram">
                <FontAwesomeIcon icon={faInstagram} /></a>
                </li>
            <li><a href="#email">
                <FontAwesomeIcon icon={faEnvelope} /></a>
                </li>
        </ul>
    </div>
  )
}

export default BottomNavbar
