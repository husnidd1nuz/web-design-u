import React from 'react'
import "./Header.css"
import "./responsive/HeaderMedia.css"
import Checkout from '../Checkout/Checkout'
const Header = () => {
  return (
    <div id='Header'>
      <div className="container">
        <div id="Header-logo">
            <img src="https://i.ibb.co/tzKQHRS/Meubel-House-Logos.png" alt="Meubel-House-Logos"/>
            <h1><a href="#">Furniro</a></h1>
        </div>
        <ul>
            <button>
            <li><a href="#Home-Header" onClick={()=>{
              let HomeMainTop =document.querySelector("#Home-Main-top")
              let HomeHeader = document.querySelector("#Home-Header")
              let Furniro = document.querySelector("#Furniro")
              let Rooms = document.querySelector("#HomeRoom")
              let HeaderShop = document.querySelector("#HeaderShop")
              let Contact = document.querySelector("#Contact")
              let Products = document.querySelector("#MainProducts")
              let Blog = document.querySelector("#Blog")
              let AsgardSofa = document.querySelector("#AsgardSofa")
              let Cart = document.querySelector("#Cart")
              let Checkout = document.querySelector("#Checkout")
              let Comparison = document.querySelector("#Comparison")
              HomeHeader.style="display:block"
              HomeMainTop.style="display:block"
              Furniro.style="display:block"
              Products.style="display:block"
              Rooms.style="display:block"
              AsgardSofa.style="display:none"
              Blog.style="display:none"
              Contact.style="display:none"
              HeaderShop.style="display:none"
              Checkout.style="display:none"
              Cart.style="display:none"
              Comparison.style="display:none"
            }}>Home</a></li>
            </button>
            <button>
            <li><a href="#HeaderShop" onClick={()=>{
              let HomeMainTop =document.querySelector("#Home-Main-top")
              let HomeHeader = document.querySelector("#Home-Header")
              let Furniro = document.querySelector("#Furniro")
              let Rooms = document.querySelector("#HomeRoom")
              let HeaderShop = document.querySelector("#HeaderShop")
              let Contact = document.querySelector("#Contact")
              let Products = document.querySelector("#MainProducts")
              let AsgardSofa = document.querySelector("#AsgardSofa")
              let Blog = document.querySelector("#Blog")
              let Cart = document.querySelector("#Cart")
              let Comparison = document.querySelector("#Comparison")
              HomeHeader.style="display:none"
              Furniro.style="display:none"
              Rooms.style="display:none"
              Contact.style="display:none"
              AsgardSofa.style="display:none"
              HomeMainTop.style="display:none"
              Cart.style="display:none"
              Blog.style="display:none"
              Checkout.style="display:none"
              Comparison.style="display:none"
              Products.style="display:block"
              HeaderShop.style="display:block"
            }} >Shop</a></li>    
            </button>
            <button>
            <li><a href="#About">About</a></li>
            </button>
            <button>
            <li><a 
            onClick={()=>{
              let Contact = document.querySelector("#Contact")
              let HomeMainTop =document.querySelector("#Home-Main-top")
              let HomeHeader = document.querySelector("#Home-Header")
              let Furniro = document.querySelector("#Furniro")
              let Rooms = document.querySelector("#HomeRoom")
              let HeaderShop = document.querySelector("#HeaderShop")
              let Products = document.querySelector("#MainProducts")
              let Blog = document.querySelector("#Blog")
              let AsgardSofa = document.querySelector("#AsgardSofa")
              let Cart = document.querySelector("#Cart")
              let Checkout = document.querySelector("#Checkout")
              let Comparison = document.querySelector("#Comparison")
              HomeHeader.style="display:none"
              Furniro.style="display:none"
              Rooms.style="display:none"
              HomeMainTop.style="display:none"
              Products.style="display:none"
              HeaderShop.style="display:none"
              Blog.style="display:none"
              AsgardSofa.style="display:none"
              Checkout.style="display:none"
              Cart.style="display:none"
              Comparison.style="display:none"
              Contact.style="display:block"
            }}
            href="#Contact">Contact</a></li>
            </button>
        </ul>
            <i onClick={()=>{
            let Burger = document.querySelector(".fa-burger")
            let HeaderNavigation = document.querySelector("#Header-navigation"); 
            HeaderNavigation.style="display:block ; "
            Burger.style="display:none"
           }} className='fa-solid fa-burger'></i>
        <div id="Header-navigation">
        <i
        onClick={()=>{
          let Contact = document.querySelector("#Contact")
          let HomeMainTop =document.querySelector("#Home-Main-top")
          let HomeHeader = document.querySelector("#Home-Header")
          let Furniro = document.querySelector("#Furniro")
          let Rooms = document.querySelector("#HomeRoom")
          let HeaderShop = document.querySelector("#HeaderShop")
          let Products = document.querySelector("#MainProducts")
          let Blog = document.querySelector("#Blog")
          let AsgardSofa = document.querySelector("#AsgardSofa")
          let Cart = document.querySelector("#Cart")
          let Checkout = document.querySelector("#Checkout")
          let Comparison = document.querySelector("#Comparison")
          HomeHeader.style="display:none"
          Furniro.style="display:none"
          Rooms.style="display:none"
          HomeMainTop.style="display:none"
          Products.style="display:none"
          HeaderShop.style="display:none"
          Contact.style="display:none"
          AsgardSofa.style="display:none"
          Cart.style="display:none"
          Checkout.style="display:none"
          Comparison.style="display:none"
          Blog.style="display:block"
        }}
        class="fa-regular fa-user"></i>
        <i 
        onClick={()=>{
          let HomeMainTop =document.querySelector("#Home-Main-top")
          let HomeHeader = document.querySelector("#Home-Header")
          let Furniro = document.querySelector("#Furniro")
          let Rooms = document.querySelector("#HomeRoom")
          let HeaderShop = document.querySelector("#HeaderShop")
          let Contact = document.querySelector("#Contact")
          let Products = document.querySelector("#MainProducts")
          let Blog = document.querySelector("#Blog")
          let AsgardSofa = document.querySelector("#AsgardSofa")
          let Cart = document.querySelector("#Cart")
          let Checkout = document.querySelector("#Checkout")
          let Comparison = document.querySelector("#Comparison")
          HomeHeader.style="display:none"
          HomeMainTop.style="display:none"
          Furniro.style="display:none"
          Blog.style="display:none"
          Contact.style="display:none"
          Rooms.style="display:none"
          HeaderShop.style="display:none"
          Cart.style="display:none"
          Checkout.style="display:none"
          Comparison.style="display: none"
          Products.style="display:block"
          AsgardSofa.style="display:block"
        }}
        class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-regular fa-heart"></i>
        <i onClick={()=>{
          let ShopCard = document.querySelector("#ShopCard");
          let Header = document.querySelector("#Header");
          let Home = document.querySelector("#Home");
          let Footer = document.querySelector("#Footer");
          Header.style = "opacity: 0.7"
          Home.style = "opacity: 0.7"
          Footer.style = "opacity: 0.7"
          ShopCard.style = "display: block";
        }} 
         class="fa-sharp fa-solid fa-cart-shopping"></i>
         
        </div>
      </div>
    </div>
  )
}

export default Header
