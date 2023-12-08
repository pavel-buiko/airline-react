import React, {useEffect} from 'react'
import Aos from "aos"
import "aos/dist/aos.css"


import paris from "../../assets/paris.jpg"
import user1 from "../../assets/person1.jpg"

import bangkok from "../../assets/bangkok.jpg"
import user2 from "../../assets/person2.jpg"

import capeTown from "../../assets/capetown.jpg"
import user3 from "../../assets/person999.jpg"

import newYork from "../../assets/newYork.jpg"
import user4 from "../../assets/person4.jpg"

const travelers = [
  {
    id:1,
    destinationImage: paris,
    travelerImage: user1,
    travelerName: "Ирина Василевская",
    socialMedia: "@iriina1"
  },

  {
    id:2,
    destinationImage:bangkok,
    travelerImage: user2,
    travelerName: "Ангелина Кармызова",
    socialMedia: "@blackandwhiteA"
  },

  {
    id:3,
    destinationImage: capeTown,
    travelerImage: user3,
    travelerName: "Дарья Шушвал",
    socialMedia: "@sharlottka2"
  },
  {
    id:4,
    destinationImage: newYork,
    travelerImage: user4,
    travelerName: "Майкл Браун",
    socialMedia: "@bigblackmaster"
  }
]

const Travelers = () => {

  useEffect (()=> {
    Aos.init({duration:2000})
    }, [])
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2 data-aos= "fade-down" data-aos-duration="2500">Путешественники месяца</h2>

        <div className="travelersContainer grid">

          {travelers.map(({id, destinationImage, travelerImage, travelerName, socialMedia }) => {
            return (
              <div key={id} data-aos= "fade-up" data-aos-duration="2500" className="singleTraveler">
                <img className="destinationImage" src={destinationImage} />

                <div className="travelerDetails">
                  <div className="travelerPicture">
                    <img src={travelerImage }alt="user" className="travelerImage" />
                  </div>
                  <div className="travelerName">
                    <span>{travelerName}</span>
                    <p>{socialMedia}</p>
                  </div>
                </div>
              </div>
            );
          })}




        </div>
      </div>
    </div>
  );
}

export default Travelers