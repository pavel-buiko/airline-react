import React from "react"
import Slider from "./components/Slider/Slider"
import images from "./components/Slider/images"
import { TravelCard } from "./components/TravelCard/TravelCard";
import Footer from "./components/Footer/Footer";

function Frame() {
  return (
  <div className="frame">
    <Slider images={images} />
    <TravelCard/>
    <Footer/>
  </div>
  )
}

export default Frame