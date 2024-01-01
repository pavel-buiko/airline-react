import React, {useEffect} from 'react'
import {HiOutlineLocationMarker} from "react-icons/hi"
import {RiAccountPinCircleLine} from "react-icons/ri"
import {RxCalendar} from "react-icons/rx"
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import Aos from "aos"

import "aos/dist/aos.css"

new AirDatepicker('#dateOne');
new AirDatepicker('#dateTwo');
const Search = () => {

  useEffect (()=> {
    Aos.init({duration:2000})
    }, [])



  return (
    <div className='search container section'>
      <div data-aos= "fade-up" data-aos-duration="2500" className="sectionContainer grid">

        <div className="btns flex">

          <div className="singleBtn">

            <span>Эконом</span>

          </div>

          <div className="singleBtn">

            <span>Бизнес Класс</span>

          </div>

          <div className="singleBtn">

            <span>Первый Класс</span>

          </div>
        </div>
        <div data-aos= "fade-up" data-aos-duration="2000" className="searchInputs flex">
          <div className="singleInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className='icon'/>
            </div>
            <div className="texts">
              <h4>Location</h4>
              <input type="text" placeholder='Куда вы желаете отправиться?' />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className='icon'/>
            </div>
            <div className="texts">
              <h4>Travelers</h4>
              <input type="text" placeholder='Добавить гостей' />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className='icon'/>
            </div>
            <div className="texts">
              <h4>Check In</h4>
              <input id='dateOne' type="text" placeholder='Добавить дату' />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className='icon'/>
            </div>
            <div className="texts">
              <h4>Check Out</h4>
              <input  id='dateTwo' type="text" placeholder='Добавить дату' />
            </div>
          </div>

          <button className='btn btnBlock flex'>Поиск Билетов</button>


        </div>
      </div>
    </div>
  )
}

export default Search