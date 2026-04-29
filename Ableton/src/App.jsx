import { useState } from 'react'
import Navbar from "./components/Navbar"
import "./App.css"
import Ableton from "./assets/Ableton.png"
import Ableton2 from "../src/assets/Ableton2.png"
import Ableton3 from "./assets/Ableton3.png"

const App = () => {
  return (
    <>
      <Navbar/>
      <hr></hr>
      <div className='div-head'>
        <p>About</p>
        <p>Jobs</p>
      </div>
      <hr></hr>
      <div className='image-ableton'>
        <img src={Ableton}></img>
      </div>
      <div className='div-info'>
        <p>We make <span className='sp'> Live </span> , <span className='sp'>Push</span> and <span className='sp'>Link </span> - unique software and hardware for music creation and performance. With these products, our community of users create amazing things</p>
        <p>Ableton was founded in 1999 and released the first version Live in 2001. Our product are used<br></br> by a community of dedicated musician, sound designers, and artists from across the world </p>
      </div>
      <div className='imagenes'>
        <div className='img-izq'>
          <img src={Ableton2}></img>
        </div>
        <div className='img-der'>
          <img src={Ableton3}></img>
        </div>
      </div>
    </>
  )
}

export default App



