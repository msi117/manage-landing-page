import React, { useState } from 'react'
import CTA from '../../components/cta/CTA'
import logo from '../../data/images/logo.svg'
import menu from '../../data/images/icon-hamburger.svg'
import close from '../../data/images/icon-close.svg'
import './header.css'

function Header() {
    const [nav, setNav] = useState(false)

    const handleClick = () => {
        setNav((prev) => !prev)
    }

    const Menu = () =>(
        <ul>
                <li className="header__nav--li"><a href="#manage">Pricing</a></li>
                <li className="header__nav--li"><a href="#about">Product</a></li>
                <li className="header__nav--li"><a href="#footer">About Us</a></li>
                <li className="header__nav--li"><a href="#footer">Careers</a></li>
                <li className="header__nav--li"><a href="#community">Community</a></li>
            </ul>
    )

  return (
    <header className='header'>
        <div className="header__logo">
            <img src={logo} alt="logo" />
        </div>
        <div className='header__nav'>
            <Menu />
        </div>
        <CTA text='Get Started' className='header__CTA'/>
        <div className='header__menu'>
            <img src={nav ? close : menu} alt="" onClick={handleClick} />
        </div>
        {
            nav && <div className='header__menu--mobile scale-up-tr'>
            <Menu />
        </div>
        }
    </header>
  )
}

export default Header