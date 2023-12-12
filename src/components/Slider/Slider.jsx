import React, { useRef } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import useSlider from "./Custom"

const Slider = ({images}) => {

  const slideImage = useRef(null)
  const slideText = useRef(null)
  const { goToPreviousSlide, goToNextSlide } = useSlider(slideImage, slideText, images)

    return (
          <div className="slider" ref={slideImage}>
            <div className="sliderContainer ">
              <button onClick={goToPreviousSlide} className="sliderBtn">
                <div>
                <FaArrowLeft className="fas fa-angle-left" />
                </div>
              </button>
             <div className="sliderText">
                <h1 className="textTitle">Мечты Сбываюся</h1>
                <p ref={slideText} className="text"></p>
                <button className="featureBtn btn">Get started</button>
              </div>
              <button onClick={goToNextSlide} className="sliderBtn">
                <FaArrowRight className="fas fa-angle-rigth"/>
              </button>
            </div>
        </div>
    );
}

export default Slider;