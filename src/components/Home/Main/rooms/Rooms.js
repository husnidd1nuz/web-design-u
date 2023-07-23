import React from 'react'
import "./Rooms.css"
import "./responsive/MainRoomsMedia.css"
import RoomsCard from './RoomsCard'
const HomeRooms = () => {
  return (
    <div id='HomeRoom'>
        <div id="HomeRooms-Main">
            <div id="Rooms-lBox">
                <h1>
                50+ Beautiful rooms <br /> inspiration
                </h1>
                <p>Our designer already made a lot of beautiful <br /> prototype of rooms that inspire you</p>
                <button id="Room-lBox-btn">
                    Explore More
                </button>
            </div>
            <div id="Rooms-rBox">
              <RoomsCard/>
            </div>
        </div>
    </div>
  )
}

export default HomeRooms;
