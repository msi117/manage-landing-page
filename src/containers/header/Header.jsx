import React from 'react'
import CTA from '../../components/cta/CTA'
import logo from '../../data/images/logo.svg'
import menu from '../../data/images/icon-hamburger.svg'
import './header.css'

function Header() {

    const handleClick = () => {
        
    }

  return (
    <header className='header'>
        <div className="header__logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="header__nav">
            <ul>
                <li className="header__nav--li"><a href="#manage">Pricing</a></li>
                <li className="header__nav--li"><a href="#about">Product</a></li>
                <li className="header__nav--li"><a href="#footer">About Us</a></li>
                <li className="header__nav--li"><a href="#footer">Careers</a></li>
                <li className="header__nav--li"><a href="#community">Community</a></li>
            </ul>
        </div>
        <CTA text='Get Started'/>
        <div className='header__menu'>
            <img src={menu} alt="" onClick={handleClick} />
        </div>
    </header>
  )
}

export default Header