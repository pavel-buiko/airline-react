import React, {useEffect} from 'react'

import plane from "../../assets/A320neo.png"
import video from "../../assets/mountains.mp4"

import Aos from "aos"

import "aos/dist/aos.css"

const Home = () => {

useEffect (()=> {
Aos.init({duration:2000})
}, [])

  return (
    <div className='home flex container'>

      <div className="mainText">
        <h1 data-aos= "fade-up" data-aos-duration="2500">Создайте незабываемые впечатления с нами</h1>
      </div>

      <div className="homeImages flex ">

        <div className="videoDiv">
          <video className='video' autoPlay muted loop src={video}></video>
        </div>
        <img className='plane' src={plane} alt="" />
      </div>
    </div>
  )
}

export default Home