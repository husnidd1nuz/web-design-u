import React from 'react'
import "./Home.css"
import Header from "./Header/Header"
import HeaderShop from './Shop/HeaderShop'
import Contact from '../Contact/Contact'
import Main from "./Main/Main"
import AsgardSofa from '../AsgardSofa/AsgardSofa'
import Cart from '../Cart/Cart'
import Blog from '../Blog/Blog'
import Checkout from '../Checkout/Checkout'
import Comparison from '../Comparison/Comparison'
import HomeFooter from './Footer/Footer'
let docTitle = document.title
window.addEventListener("blur", () => {
  document.title = "Come Back 😑"
});
window.addEventListener("focus", () => {
  document.title = docTitle;
})
const Home = () => {
  return (
    <div id='Home'>
      <Header/>
      <HeaderShop/>
      <AsgardSofa/>
      <Comparison/>
      <Checkout/>
      <Cart/>
      <Blog/>
      <Contact/>
      <Main/>
      <HomeFooter/>
    </div>
  )
}

export default Home
