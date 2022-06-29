import logo from '../../data/images/logo.svg'
import facebook from '../../data/images/icon-facebook.svg'
import instagram from '../../data/images/icon-instagram.svg'
import pinterest from '../../data/images/icon-pinterest.svg'
import twitter from '../../data/images/icon-twitter.svg'
import youtube from '../../data/images/icon-youtube.svg'

import './footer.css'
import CTA from '../../components/cta/CTA'


function Footer() {
  return (
    <div className='footer'>
        <div className="footer__icons">
            <div className="footer__icons--logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="footer__icons--socials">
                <img src={facebook} alt="facebook" />
                <img src={youtube} alt="youtube" />
                <img src={twitter} alt="twitter" />
                <img src={pinterest} alt="pinterest" />
                <img src={instagram} alt="instagram" />
            </div>
        </div>
        <div className="footer__links">
        <ul>
                <li className="footer__links-link"><a href="#manage">Home</a></li>
                <li className="footer__links-link"><a href="#manage">Pricing</a></li>
                <li className="footer__links-link"><a href="#about">Product</a></li>
                <li className="footer__links-link"><a href="#footer">About Us</a></li>
                <li className="footer__links-link"><a href="#footer">Careers</a></li>
                <li className="footer__links-link"><a href="#community">Community</a></li>
                <li className="footer__links-link"><a href="#community">Privacy Policy</a></li>
            </ul>
        </div>
        <div className="footer__input">
            <div className="footer__input--form">
            <input type="email" name="email" id="email" placeholder='Updates in your inbox...' />
            <CTA text='Go' />
            </div>
            <p>Copyright 2020. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer