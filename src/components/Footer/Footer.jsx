import React, {useEffect} from 'react'
import {TiSocialTwitter, TiSocialFacebook, TiSocialYoutube} from "react-icons/ti"
import { FaInstagram } from "react-icons/fa6";
import logo from "../../assets/logo.svg"
import Aos from "aos"
import "aos/dist/aos.css"

const Footer = () => {

  useEffect (()=> {
    Aos.init({duration:2000})
    }, [])

  return (
    <div className='footer'>
      <div className="sectionContainer container grid" >
        <div data-aos= "fade-up" data-aos-duration="2500" className="gridOne">
          <div className="logoDiv">
            <img src={logo} className='logo' />
          </div>
          <p>Каждая дорога — страница бескрайней книги мира.</p>
          <div className="socialIcon flex">
            <FaInstagram className='icon'/>
            <TiSocialTwitter className='icon'/>
            <TiSocialFacebook className='icon'/>
            <TiSocialYoutube className='icon'/>
          </div>
        </div>

        <div data-aos= "fade-up" data-aos-duration="2500" className="footerLinks">
          <span className="linkTitle">
            Информация
          </span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="">Explore</a>
          </li>
          <li>
            <a href="">Flight Status</a>
          </li>
          <li>
            <a href="">Travel</a>
          </li>
          <li>
            <a href="">Check In</a>
          </li>
          <li>
            <a href="">Manage your booking</a>
          </li>
        </div>

        <div data-aos= "fade-up" data-aos-duration="2500" className="footerLinks">
          <span className="linkTitle">
            Quick guide
          </span>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">How To</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Baggage</a>
          </li>
          <li>
            <a href="">Route Map</a>
          </li>
          <li>
            <a href="">Our Communities</a>
          </li>
        </div>

        <div data-aos= "fade-up" data-aos-duration="2500" className="footerLinks">
          <span className="linkTitle">
            Информация
          </span>
          <li>
            <a href="">Chauffuer</a>
          </li>
          <li>
            <a href="">Our Partners</a>
          </li>
          <li>
            <a href="">Destination</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Transportation</a>
          </li>
          <li>
            <a href="">Programe Rules</a>
          </li>
        </div>

      </div>

      <div className="copyRightDiv flex">

      </div>
    </div>
  )
}

export default Footer