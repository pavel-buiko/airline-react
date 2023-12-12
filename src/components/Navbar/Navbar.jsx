import React, {useState} from "react";

//----Icons-------
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
//---images---
import logo from "../../assets/logo.svg";
const Navbar = () => {

  //remove navbar in small size
  const[active, setActive] = useState("navBarMenu")
  const showNavBar = () => {
    setActive("showNavBar navBarMenu ");
  }

  const removeNavBar = () => {
    setActive("navBarMenu ");
  }

const [bg, addBg] = useState("navBarTwo");
const addBgColor = () => {
  if (window.scrollY >= 10) {
    addBg("navBarTwo navbarWithBg");
  } else {
    addBg("navBarTwo");
  }
}

window.addEventListener("scroll", addBgColor)


  return (
    <div className="navBar flex ">
      <div className="navBarOne flex">
        <div>
          <SiConsul className="icon" />
        </div>
        <div className=" none flex">
          <li className="flex">
            <BsPhoneVibrate className="icon" /> Помощь
          </li>
          <li className="flex">
            <AiOutlineGlobal className="icon" />
            Язык
          </li>
        </div>
        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Up</span>
        </div>
      </div>

      <div className={bg}>
        <div className="logoDiv">
          <img src={logo} alt="logo" className="Logo" />
        </div>
        <div onClick={showNavBar}  className="toggleIcon">
        <CgMenuGridO className="icon" />
      </div>


      <div className={active}>
        <ul className="menu flex">
          <li onClick={removeNavBar} className="listItem">Главная</li>
          <li onClick={removeNavBar}  className="listItem">О Нас</li>
          <li onClick={removeNavBar} className="listItem"><a className="listButton" href="/offers">Предложения</a></li>
          <li onClick={removeNavBar} className="listItem">Места</li>
          <li onClick={removeNavBar} className="listItem">Назначение</li>
          <button className="btn flex btnTwo">Связаться</button>
        </ul>
        <button onClick={removeNavBar}   className="btn flex btnOne">Связаться</button>
        </div>
      </div>


    </div>
  );
};

export default Navbar;
