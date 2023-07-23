import React from 'react'
import "./About.css"
import "./responsive/MainAboutMedia.css"
const About = () => {
    // let AboutInfo = [
    //     {
    //         AboutLogo: '<i class="fa-solid fa-trophy"></i>',
    //         AboutTitle: "High Quality",
    //         AboutDescription: "crafted from top materials"
    //     },
    //     {
    //         AboutLogo: `<i class="fa-regular fa-badge-check"></i>`,
    //         AboutTitle: "Warranty Protection",
    //         AboutDescription: "Over 2 years"
    //     },
    //     {
    //         AboutLogo: `<i class="fa-solid fa-hand-holding-box"></i>`,
    //         AboutTitle: "Free Shipping",
    //         AboutDescription: "Order over 150 $"
    //     },
    //     {
    //         AboutLogo: `<i class="fa-regular fa-user-headset"></i>`,
    //         AboutTitle: "24 / 7 Support",
    //         AboutDescription: "Dedicated support"
    //     },
    // ]
  return (
    <div id='About'>
        <div id="About-Main">
           <div id="About-Main-sCard">
            <i class="fa-solid fa-trophy"></i>
            <div id="About-Main-sRCard">
                <h3>High Quality</h3>
                <p>crafted from top materials</p>
            </div>
           </div>
           <div id="About-Main-sCard">
           <i class="fa-sharp fa-regular fa-badge-check"></i>
            <div id="About-Main-sRCard">
                <h3>Warranty Protection</h3>
                <p>Over 2 years</p>
            </div>
           </div>
           <div id="About-Main-sCard">
           <i class="fa-solid fa-handshake"></i>
            <div id="About-Main-sRCard">
                <h3>Free Shipping</h3>
                <p>Order over 150 $</p>
            </div>
           </div>
           <div id="About-Main-sCard">
           <i class="fa-solid fa-headset"></i>
            <div id="About-Main-sRCard">
                <h3>24 / 7 Support</h3>
                <p>Dedicated support</p>
            </div>
           </div>
        </div>
    </div>
  )
}

export default About
