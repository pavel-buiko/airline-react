import React, {useEffect} from "react";
import imageGrid from "../../assets/collage2.svg";
import Aos from "aos"

import "aos/dist/aos.css"
const Lounge = () => {

  useEffect (()=> {
    Aos.init({duration:2000})
    }, [])


  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        <div data-aos= "fade-up" data-aos-duration="2500" className="imgDiv">
          <img src={imageGrid} alt="collage2" />
        </div>
        <div data-aos= "fade-down" data-aos-duration="2500" className="textDiv">
          <h2>Услуги во время полёта</h2>

          <div className="grids grid">
            <div data-aos= "fade-right" data-aos-duration="2500" className="singleGrid">
              <span className="gridTitle">Услуги на борту</span>
              <p>
                Так же вы можете позвонить нам и забронировать билет на один из
                полётов
              </p>
            </div>

            <div data-aos= "fade-right" data-aos-duration="2500" className="singleGrid">
              <span className="gridTitle">Помощь в аэропорту</span>
              <p>
                Так же вы можете позвонить нам и забронировать билет на один из
                полётов
              </p>
            </div>

            <div data-aos= "fade-right" data-aos-duration="2500" className="singleGrid">
              <span className="gridTitle">Приоритеты посадки</span>
              <p>
                Так же вы можете позвонить нам и забронировать билет на один из
                полётов
              </p>
            </div>

            <div data-aos= "fade-right" data-aos-duration="2500" className="singleGrid">
              <span className="gridTitle">Помощь в аэропорту</span>
              <p>
                Так же вы можете позвонить нам и забронировать билет на один из
                полётов
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;
