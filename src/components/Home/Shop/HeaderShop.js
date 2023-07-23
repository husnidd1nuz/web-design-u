import React from 'react'
import "./HeaderShop.css"
import "./responsive/HeaderShopMedia.css"
const HeaderShop = () => {
  return (
    <div id='HeaderShop'>
      <div id="HeaderShop-bg">
        
      </div>
      <div id="HeaderShop-title">
        <h1>Shop</h1>
        <h3><a href="#" onClick={ () => {
              let Furniro = document.querySelector("#Furniro")
              let Rooms = document.querySelector("#HomeRoom")
              let HomeMainTop =document.querySelector("#Home-Main-top");
              let HomeHeader = document.querySelector("#Home-Header");
              let HeaderShop = document.querySelector("#HeaderShop");
              HomeHeader.style="display:block";
              Furniro.style="display:block"
              Rooms.style="display:block"
              HomeMainTop.style="display:block";
              HeaderShop.style="display:none";
        }}>Home</a> > <span><a href="#">Shop</a></span></h3>
      </div>
      <div id="HeaderShop-filter">
        <div id="HeaderShop-lBox">
          <div id="HeaderShop-lsLBox">
            <i class="fa-sharp fa-solid fa-sliders"></i>
            <h3>Filter</h3>
            <i class="fa-solid fa-grid-2"></i>
            <i class="fa-solid fa-rectangle-history"></i>
          </div>
          <div id="HeaderShop-lsRBox">
          <h3>Showing 1-8 of 16  results</h3>
          </div>
        </div>
        <div id="HeaderShop-rBox">
          <div id="HeaderShop-rBox-rsLBox">
            <h3>Show</h3>
            <button>16</button>
          </div>
          <div id="HeaderShop-rBox-rsRBox">
            <h3>Short by</h3>
            <button>Default</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderShop
