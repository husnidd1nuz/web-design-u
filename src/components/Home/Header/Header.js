import React from 'react'
import "./Header.css"
import "./responsive/HomeHeaderMedia.css"
const Header = () => {
  return (
    <div id='Home-Header'>
        {/* ? HOME HEADER TOP PART START */}
        <div id="Home-Header-top">
          <div id="Home-top-rBox">
            <h3>New Arrival</h3>
            <h1>Discover Our <br /> New Collection</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam soluta expedita <br /> architecto. Quidem numquam voluptatibus</p>
            <a href="#">
              <button 
              onClick={()=>{
                let ShopCard = document.querySelector("#ShopCard");
                ShopCard.style =  "display:block;"
              }}
              id="Home-top-rBox-btn">
                BUY NOW
              </button>
            </a>
          </div>
        </div>
        {/* ? HOME HEADER TOP PART END */}
    
    </div>
  )
}

export default Header
