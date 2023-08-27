import React, { useEffect, useState } from "react";
import "./secondsection.scss";
import logo from '../../assets/logo.png'
import { listdata } from "../data";
import border from '../../assets/wave-haikei.svg'

const SecondSection = () => {
  const [active, setActive] = useState(false);

  const isActive = () => {
    window.scrollY > 230 ? setActive(true) : setActive(false);
  };


  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  return (
    <div className="secondsection">
      <img src={border} alt="" className="border"/>
      <div className="image">
        <img src={logo} alt="" className={active ? "img active" : "img"}/>
      </div>
      <div className="list">
        {listdata.map((item) => {
          return (
            <div className={active ? "listitem active" : "listitem"} key={item.id}>
              <img src={item.checkimage} alt="" />
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SecondSection;
