import React, { useEffect, useState } from "react";
import "./secondsection.scss";
import logo from '../../assets/logo.png'
import border from '../../assets/wave-haikei.svg'

const SecondSection = () => {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);

  const isActive = () => {
    window.scrollY > 330 ? setActive(true) : setActive(false);
    window.scrollY > 650 ? setActive2(true) : setActive2(false);
    window.scrollY > 950 ? setActive3(true) : setActive3(false);
    window.scrollY > 1150 ? setActive4(true) : setActive4(false);
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
        <img src={logo} alt="" className="img"/>
      </div>
      <div className="list">
        
          <li className={active ? "active" : ""}>
          Scan your phone
          </li>

          <li className={active2 ? "active2" : ""}>
          walk into the store
          </li>

           <li className={active3 ? "active3" : ""}>
           grab whatever you want
          </li>

          <li className={active4 ? "active4" : ""}>
          walk out the store
          </li>
        
        
      </div>
    </div>
  );
};

export default SecondSection;







// {listdata.map((item) => {
//   return (
//     <div className={active ? "listitem active" : "listitem"} key={item.id=0}>
//       <img src={item.checkimage} alt="" />
//       <span>{item.text}</span>
//     </div>
//   );
// })}






