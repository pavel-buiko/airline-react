import React, {useEffect} from 'react'

import {RxCalendar} from "react-icons/rx"
import {BsShieldCheck} from "react-icons/bs"
import {BsBookmarkCheck} from "react-icons/bs"
import Aos from "aos"
import "aos/dist/aos.css"
const Info = () => {

  useEffect (()=> {
    Aos.init({duration:2000})
    }, [])


  return (
    <div className="info section">
      <div className="infoContainer container">
        <div className="titleDiv flex">
          <h2 data-aos= "fade-down" data-aos-duration="2500">
            В каждом путешествии звучит мелодия свободы, в каждом шаге — ноты
            приключений
          </h2>
          <button data-aos= "fade-down" data-aos-duration="2500" className="btn">Посмотреть</button>
        </div>

        <div className="cardsDiv grid">
          <div data-aos= "fade-down" data-aos-duration="2500" className="singleCard grid">
            <div className="iconDiv grid">
              <RxCalendar className="icon" />
            </div>
            <span className="cardTitle">Забронировать и отдохнуть</span>
            <p>
              Вы также можете к нам обратиться с вашего телефона и забронировать
              билет
            </p>
          </div>

          <div data-aos= "fade-down" data-aos-duration="2500" className="singleCard grid">
            <div className="iconDiv grid colorOne">
              <BsShieldCheck className="icon" />
            </div>
            <span className="cardTitle">Умный чеклист</span>
            <p>
              Вы также можете к нам обратиться с вашего телефона и забронировать
              билет
            </p>
          </div>

          <div data-aos= "fade-down" data-aos-duration="2500" className="singleCard grid">
            <div className="iconDiv grid colorTwo">
              <BsBookmarkCheck className="icon" />
            </div>
            <span className="cardTitle">Сохраните больше</span>
            <p>
              Вы также можете к нам обратиться с вашего телефона и забронировать
              билет
            </p>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Info