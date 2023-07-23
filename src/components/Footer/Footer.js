import React from 'react'
import "./Footer.css"
import "./responsive/FooterMedia.css"
const Footer = () => {
  return (
    <div id='Footer'> 
      <div className="container">
        <div id="Footer-main">
          <div id="Footer-sCard">
            <h1>Funiro</h1>
            <p>
            400 University Drive Suite 200 Coral <br /> Gables, <br />
            FL 33134 USA
            </p>
          </div>
          <div id="Footer-sCard">
            <h3>Link</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div id="Footer-sCard">
            <h3>Help</h3>
            <ul>
              <li><a href="#">Payment Options</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Privacy Policies</a></li>
            </ul>
          </div>
          <div id="Footer-sCard">
            <h3>Newsletter</h3>
            <div id="Footer-sCard-sub">
              <input type="email" placeholder='Enter Your Email Address' />
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
      <div id="Footer-copy">
          <h3>2023 furino. All rights reverved</h3>
        </div>
    </div>
  )
}

export default Footer
