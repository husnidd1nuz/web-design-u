import React from 'react'
import "./App.css"
import Header from '../Header/Header'
import Home from "../Home/Home"
import Footer from '../Footer/Footer'
import ShopCard from '../ShopCard/ShopCard'
const app = () => {
  return (
    
    <div id='App'>
      <Header/> 
      <ShopCard/>
      <Home/>
      <Footer/>     
    </div>
  )
}

export default app
