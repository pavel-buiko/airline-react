import React, {useEffect} from 'react'

import Aos from "aos"
import "aos/dist/aos.css"
//----images-----
import gridImmage from "../../assets/Group.svg"
const Support = () => {

  useEffect (()=> {
    Aos.init({duration:2000})
    }, [])


  return (
    <div className="support container section">
      <div className="sectionContainer">
        <div className="titlesDiv">
          <small>Поддержка</small>
          <h2>Планируйте ваши путешествия с уверенностью </h2>
          <p>
            Мы поможем распланировать ваше путешествие, узнайте, чего ожидать в
            пути
          </p>
        </div>

        <div className="infoDiv grid">

          <div className="textDiv grid">
            <div data-aos= "fade-up" data-aos-duration="2500" className="singleInfo">
              <span className='number'>01</span>
              <h4>Требования к путешествию в Дубай</h4>
              <p>
              Мы поможем распланировать ваше путешествие, узнайте, чего ожидать в
              пути
              </p>
            </div>

            <div data-aos= "fade-up" data-aos-duration="3500" className="singleInfo">
              <span className='number colorOne'>02</span>
              <h4>Услуги перевозки по прибытии</h4>
              <p>
              Мы поможем распланировать ваше путешествие, узнайте, чего ожидать в
              пути
              </p>
            </div>

            <div data-aos= "fade-up" data-aos-duration="4500" className="singleInfo">
              <span className='number colorTwo'>03</span>
              <h4>Возможные опасности в путешествии</h4>
              <p>
              Мы поможем распланировать ваше путешествие, узнайте, чего ожидать в
              пути
              </p>
            </div>


          </div>
          <div data-aos= "fade-down" data-aos-duration="4500" className="imgDiv">
            <img src={gridImmage} alt="gridhere" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support