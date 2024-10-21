import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="footer-contact">
                <Link to='/'>Shoe Store</Link>
                <p>Contacts</p>
                <Link>
                    <i className='bx bx-phone'></i><p>(+254)7 00 000 000</p>
                </Link>
                <Link to='/contacts'>
                    <i className='bx bx-envelope' ></i><p>R-Computers@example.com</p>
                </Link>
                <Link>
                    <i className='bx bxl-instagram'></i><p>@_Rcomputers</p>
                </Link>
                <Link>
                    <i className='bx bxl-facebook-circle' ></i> <p>SR_computers</p>
                </Link>
                <Link>
                    <i className='bx bxl-tiktok' ></i> <p>@R_computers</p>
                </Link>
            </div>
            <div className="footer-pages">
                <h3>Pages</h3>
                <Link to='/blog'>Blog</Link>
                <Link to='/sneakers'>Phones</Link>
                <Link to='/converse'>Laptops</Link>
                <Link to='/officials'>Desktops</Link>
                <Link to='/heels'>Monitors</Link>
                <Link to='/sandals'>UPS/power backup</Link>
                <Link to='/kids'>Computer Accessories</Link>
                <Link to='/kids'>Phone Accessories</Link>
                <Link to='/kids'>Tv $ Entertainment</Link>
                <Link to='/kids'>Printers, Scanners $Copiers </Link>
            </div>
            <div className="footer-features">
                <h3>Features</h3>
                <Link to='.//deliveries'>Deliveries</Link>
                <Link to=''>Online Orders</Link>
                <Link to=''>Offers</Link>
                <Link to=''>Customer Surport</Link>
                
            </div>
        </div>
    </div>
  )
}
