import React from 'react'
import berlin from "../../assets/cardsAssets/berlin.jpg"
import hamburg from "../../assets/cardsAssets/hamburg.jpg"
import kyoto from "../../assets/cardsAssets/kyoto.jpg"
import los from "../../assets/cardsAssets/los.jpg"
import miami from "../../assets/cardsAssets/miami.jpg"
import moscow from "../../assets/cardsAssets/moscow.jpg"
import paris from "../../assets/cardsAssets/paris.jpg"
import saint from "../../assets/cardsAssets/saint.jpg"
import stokcholm from "../../assets/cardsAssets/stokcholm.jpg"

const places = [
    {
        src: berlin,
        name: "Берлин",
        text: "Уникальное приключение в Берлине"
    },
    {
        src: hamburg,
        name: "Гамбург",
        text: "Откройте для себя красоту Гамбурга"
    },
    {
        src: kyoto,
        name: "Киото",
        text: "Погрузитесь в традиции Киото"
    },
    {
        src: los,
        name: "Лос-Анджелес",
        text: "Ощутите дух Лос-Анджелеса"
    },
    {
        src: miami,
        name: "Майами",
        text: "Расслабьтесь на берегу Майами"
    },
    {
        src: moscow,
        name: "Москва",
        text: "Исследуйте историю в Москве"
    },
    {
        src: paris,
        name: "Париж",
        text: "Увидьте романтику Парижа"
    },
    {
        src: saint,
        name: "Санкт-Петербург",
        text: "Пройдите по улицам Санкт-Петербурга"
    },
    {
        src: stokcholm,
        name: "Стокгольм",
        text: "Почувствуйте атмосферу Стокгольма"
    }
];





export const TravelCard = () => {
  return (
    <div className="travelCards container section">
      <div className="sectionContainer">
        <div className="cardsContainer grid">

          {places.map(({ src, name, text }) => {
            return (
              <div className="singleCard">
                <div className="cardImg">
                  <img
                    className='cardPicture'
                    src={src}
                    alt="cardimg"
                  />
                </div>
                <div className="cardText">
                  <h4 className="textTitle">{name}</h4>
                  <div className="text">{text}</div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}
