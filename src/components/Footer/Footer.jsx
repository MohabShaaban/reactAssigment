import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>LOCATION</h4>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className="footer-section">
          <h4>AROUND THE WEB</h4>
          <div className="social-icons">
            <i className='fa-brands fa-facebook'></i>
            <i className='fa-brands fa-twitter'></i>
            <i className='fa-brands fa-linkedin'></i>
            <i className='fa-solid fa-globe'></i>
          </div>
        </div>
        <div className="footer-section">
          <h4>ABOUT FREELANCER</h4>
          <p>Freelancer is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © Your Website 2021</p>
      </div>
    </footer>
  )
}
