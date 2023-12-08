import React, {useEffect} from "react";
import Aos from "aos"

import "aos/dist/aos.css"
const Subscribers = () => {

  useEffect (()=> {
    Aos.init({duration:2000})
    }, [])

  return (
    <div className="subscribers section">
      <div data-aos= "fade-up" data-aos-duration="2500" className="sectionContainer container">
        <h2 >Подпишитесь и получайте актуальную ифнормацию</h2>
        <div className="inputDiv flex">
          <input type="text" placeholder="Введите вашу почту" />
          <button className="btn">Подписаться</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribers;
