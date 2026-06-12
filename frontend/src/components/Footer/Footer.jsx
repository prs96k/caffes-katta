import React from 'react'
import {assets} from '../../assets/assets'
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer'id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
             <img src={assets.logo} alt="Logo" />
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi alias recusandae ab reiciendis ad, ipsum esse iure necessitatibus illo! Nulla dolorum hic repellendus tempora officia natus, sequi enim nesciunt cumque.</p>
             <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="Facebook" />
                <img src={assets.twitter_icon} alt="Twitter" />
                <img src={assets.linkedin_icon} alt="LinkedIn" />
             </div>
            </div>
            <div className="footer-content-center">
              <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
              </ul>

            </div>
            <div className="footer-content-right">
               <h2>GET IN TOUCH</h2>
               <ul>
                <li>7784567890</li>
                <li>contact@tomato.com</li>
               </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>
          Copyright 2024 @ Tomato. All rights reserved.
        </p>
      
    </div>
  )
}

export default Footer
