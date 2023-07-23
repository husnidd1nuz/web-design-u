import React from 'react'
import "./Main.css"
import "./responsive/HomeMainMedia.css"
import MainProducts from './products/MainProducts'
import About from './About/About'
import HomeRooms from './rooms/Rooms'
const Main = () => {
  const Home_Main_sCard = [
    {
      sCardImg: "https://i.ibb.co/kcPB9ch/dining.png",
      sCardTitle: "Dining",
    },
    {
      sCardImg: "https://i.ibb.co/7b1fMmN/living.png",
      sCardTitle: "Living",
    },
    {
      sCardImg: "https://i.ibb.co/LrPmwxp/bedroom.png",
      sCardTitle: "Bedroom",
    },
  ] 
  return (
    <div id='Home-Main'>
      <div id="Home-Main-top">
        <h1>Browse The Range</h1>
        <p>
          Lorem ipsum dolor sit amet , consectetur adipisicing elit.
        </p>
        <div id="Home-Main-top-card">
          {
            Home_Main_sCard.map((item,index)=>{
              return(
                <div id="Home-Main-top-sBox">
                  <img src={item.sCardImg} alt="" />
                  <h3>{item.sCardTitle}</h3>
                </div>
              )
            })
          }
        </div>
      </div>
      {/* * to continue... */}

      <MainProducts/>

      {/* * to continue... */}

      <About/>

      {/* * to continue... */}

      <HomeRooms/>

    </div>
  )
}

export default Main
