import React from 'react'
import "./Contact.css"
import "./responsive/ContactMedia.css"
const Contact = () => {
  return (
    <div id='Contact'>
        <div id="Contact-bg">

        </div>
        <div id="Contact-title">
            <img src="https://i.ibb.co/tzKQHRS/Meubel-House-Logos.png" alt="Logo" />
            <h1>Contact</h1>
            <h3>Home {">"} <span>Contact</span></h3>
        </div>
        <div id="Contact-main">
            <div className="container">
                <div id="Contact-main-top">
                    <h1>Get In Touch With Us</h1>
                    <p>For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                </div>
                <div id="Contact-main-card">
                    <div id="Contact-main-lCard">
                        <div id="Contact-main-sCard">
                            <div id="Contact-main-sLCard">
                                <i className="fa-solid fa-location "></i>
                            </div>
                            <div id="Contact-main-sRCard">
                                <h3>Address</h3>
                                <p>236 5th SE Avenue, New <br /> York NY10000, United <br /> States</p>
                            </div>
                        </div>
                        <div id="Contact-main-sCard">
                            <div id="Contact-main-sLCard">
                                <i className="fa-solid fa-phone "></i>
                            </div>
                            <div id="Contact-main-sRCard">
                                <h3>Phone</h3>
                                <p>
                                Mobile: +(84) 546-6789 <br />
                                Hotline: +(84) 456-6789
                                </p>
                            </div>
                        </div>
                        <div id="Contact-main-sCard">
                            <div id="Contact-main-sLCard">
                                <i className="fa-solid fa-clock "></i>
                            </div>
                            <div id="Contact-main-sRCard">
                                <h3>Working Time</h3>
                                <p>
                                Monday-Friday: 9:00 - 22:00 <br />
                                Saturday-Sunday: 9:00 - 21:00
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="Contact-main-rCard">
                        <div id="Contact-main-rSCard">
                            <h3>Your Name</h3>
                            <input type="text" placeholder='Your Name' />
                        </div>
                        <div id="Contact-main-rSCard">
                            <h3>Email Address</h3>
                            <input type="email" placeholder='example.gmail.com' />
                        </div>
                        <div id="Contact-main-rSCard">
                            <h3>Subject</h3>
                            <input type="text" placeholder='This is an optional' />
                        </div>
                        <div id="Contact-main-rSCard">
                            <h3>Message</h3>
                            <input type="text" placeholder='Hi! i’d like to ask about' />
                        </div>
                        <button id="Contact-main-rCard-btn">
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
