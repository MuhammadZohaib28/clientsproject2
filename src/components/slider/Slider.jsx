// import React, { useEffect, useState } from "react";
// import "./slider.scss";
// import data from "./Data";
// import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

// const Slider = () => {
//   const [currSlide, setCurrSlide] = useState(0);

//   const goToPrevSlide = () => {
//     setCurrSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
//   };

//   const goToNextSlide = () => {
//     setCurrSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="slider">
//       <div className="container">
//         <div className="imagecontainer">
//           <img src={data[currSlide]} alt="" className="sliderimages" />
//         </div>
//         <div className="buttons">
//           <button onClick={goToPrevSlide}>
//             <BsArrowLeft />
//           </button>
//           <span />
//           <button onClick={goToNextSlide}>
//             <BsArrowRight />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;















// import React, { useEffect, useState } from "react";
// import "./slider.scss";
// import data from "./Data";
// import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

// const Slider = () => {
//   const [currSlide, setCurrSlide] = useState(0);
//   const numSlides = data.length;

//   const goToPrevSlide = () => {
//     setCurrSlide((prev) => (prev === 0 ? numSlides - 1 : prev - 1));
//   };

//   const goToNextSlide = () => {
//     setCurrSlide((prev) => (prev === numSlides - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="slider">
//       <div className="container">
//         <div className="imagecontainer">
//           {data.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt=""
//               className={`sliderimages ${index === currSlide ? "active" : ""}`}
//             />
//           ))}
//         </div>
//         <div className="buttons">
//           <button onClick={goToPrevSlide}>
//             <BsArrowLeft />
//           </button>
//           <span />
//           <button onClick={goToNextSlide}>
//             <BsArrowRight />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;







// import React, { useEffect, useState } from "react";
// import "./slider.scss";
// import data from "./Data";
// import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

// const Slider = () => {
//   const [startSlide, setStartSlide] = useState(0);
//   const numSlides = data.length;
//   const numVisibleSlides = 2; // Number of slides to show at a time

//   const goToPrevSlide = () => {
//     setStartSlide((prev) =>
//       prev === 0 ? numSlides - numVisibleSlides : prev - 1
//     );
//   };

//   const goToNextSlide = () => {
//     setStartSlide((prev) =>
//       prev === numSlides - numVisibleSlides ? 0 : prev + 1
//     );
//   };

//   const visibleSlides = data.slice(startSlide, startSlide + numVisibleSlides);

//   return (
//     <div className="slider">
//       <div className="container">
//         <div className="imagecontainer">
//           {visibleSlides.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt=""
//               className="sliderimages"
//             />
//           ))}
//         </div>
//         <div className="buttons">
//           <button onClick={goToPrevSlide}>
//             <BsArrowLeft />
//           </button>
//           <span />
//           <button onClick={goToNextSlide}>
//             <BsArrowRight />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;







// import React, { useEffect, useState } from "react";
// import "./slider.scss";
// import data from "./Data";
// import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

// const Slider = () => {
//   const [startSlide, setStartSlide] = useState(0);
//   const numSlides = data.length;
//   const numVisibleSlides = 3;

//   const goToPrevSlide = () => {
//     setStartSlide((prev) =>
//       prev === 0 ? numSlides - numVisibleSlides : prev - 1
//     );
//   };

//   const goToNextSlide = () => {
//     setStartSlide((prev) =>
//       prev === numSlides - numVisibleSlides ? 0 : prev + 1
//     );
//   };

//   const visibleSlides = data.slice(startSlide, startSlide + numVisibleSlides);

//   return (
//     <div className="slider">
//       <div className="container" style={{ transform: `translateX(-${startSlide * (100 / numVisibleSlides)}%)` }}>
//         <div className="imagecontainer">
//           {visibleSlides.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt=""
//               className={`sliderimages ${index === 1 ? "active" : ""}`}
//             />
//           ))}
//         </div>
//       </div>
//       <div className="buttons">
//         <button onClick={goToPrevSlide}>
//           <BsArrowLeft />
//         </button>
//         <span />
//         <button onClick={goToNextSlide}>
//           <BsArrowRight />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Slider;





import React, { useEffect, useState } from "react";
import "./slider.scss";
import data from "./Data";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import line from '../../assets/line.png'

const Slider = () => {
  const [startSlide, setStartSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(false);
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [marginLeft, setMarginLeft] = useState(80);

  const numSlides = data.length;
  const isMobile = window.innerWidth <= 430;
  const numVisibleSlides = isMobile ? 1 : 3;

  // const isActive = () => {
  //   window.scrollY > 1300 ? setActive(true) : setActive(false);
  //   window.scrollY > 1300 ? setActive2(true) : setActive2(false);
  // };

  const handleScroll = () => {
    // Calculate margin-left based on scroll position
    const newMarginLeft = window.scrollY > 1300 ? window.scrollY - 1300 : 0;
    setMarginLeft(newMarginLeft);

    // Update active state based on scroll position
    setActive(window.scrollY > 1300);
    setActive2(window.scrollY > 1300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToPrevSlide = () => {
    setStartSlide((prev) =>
      prev === 0 ? numSlides - numVisibleSlides : prev - 1
    );
    setNextSlide(!nextSlide);
  };

  const goToNextSlide = () => {
    setStartSlide((prev) =>
      prev === numSlides - numVisibleSlides ? 0 : prev + 1
    );
    setNextSlide(nextSlide);
  };

  const visibleSlides = data.slice(startSlide, startSlide + numVisibleSlides);

  return (
    <div className="slider">
      <img src={line} className={active ? "img active" : "img"} style={{ marginLeft: `-${marginLeft}px` }}/>
      <div
        className="container"
        style={{
          transform: `${
            nextSlide
              ? isMobile
                ? `translateX(${startSlide * 6}%)` // Adjusted for mobile
                : `translateX(${startSlide * (30 / numVisibleSlides)}%)`
              : isMobile
                ? `translateX(-${startSlide * 6}%)` // Adjusted for mobile
                : `translateX(-${startSlide * (40 / numVisibleSlides)}%)`
          }`,
          transition: "transform 1s ease",
        }}
      >
        <div className={active2 ? "imagecontainer active" : "imagecontainer"}>
          {visibleSlides.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className={active2 ? `sliderimages active  ${`sliderimages ${index === 1 ? "active" : ""}`}` : "sliderimages"}
            />
          ))}
        </div>
      </div>
      <div className="buttons">
        <button onClick={goToPrevSlide}>
          <BsArrowLeft />
        </button>
        <span />
        <button onClick={goToNextSlide}>
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;







// import React, { useEffect, useState } from "react";
// import "./slider.scss";
// import data from "./Data";
// import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

// const Slider = () => {
//   const [centerSlide, setCenterSlide] = useState(0);
//   const numSlides = data.length;
//   const numVisibleSlides = 3;

//   const goToPrevSlide = () => {
//     setCenterSlide((prev) =>
//       prev === 0 ? numSlides - 1 : prev - 1
//     );
//   };

//   const goToNextSlide = () => {
//     setCenterSlide((prev) =>
//       prev === numSlides - 1 ? 0 : prev + 1
//     );
//   };

//   // Calculate the start index based on the center slide
//   const startSlide =
//     (centerSlide - Math.floor(numVisibleSlides / 2) + numSlides) % numSlides;

//   const visibleSlides = data.slice(startSlide, startSlide + numVisibleSlides);

//   return (
//     <div className="slider">
//       <div className="container">
//         <div
//           className="imagecontainer"
//           style={{
//             transform: `translateX(-${(centerSlide - startSlide) * (100 / numVisibleSlides)}%)`,
//             transition: "transform 0.3s ease",
//           }}
//         >
//           {visibleSlides.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt=""
//               className={`sliderimages ${index === Math.floor(numVisibleSlides / 2) ? "active" : ""}`}
//             />
//           ))}
//         </div>
//       </div>
//       <div className="buttons">
//         <button onClick={goToPrevSlide}>
//           <BsArrowLeft />
//         </button>
//         <span />
//         <button onClick={goToNextSlide}>
//           <BsArrowRight />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Slider;


// import React, { useEffect, useState } from "react";
// import "./slider.scss";
// import data from "./Data";
// import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

// const Slider = () => {
//   const [startSlide, setStartSlide] = useState(0);
//   const numSlides = data.length;
//   const numVisibleSlides = 3;

//   const goToPrevSlide = () => {
//     setStartSlide((prev) =>
//       prev === 0 ? numSlides - numVisibleSlides : prev - 1
//     );
//   };

//   const goToNextSlide = () => {
//     setStartSlide((prev) =>
//       prev === numSlides - numVisibleSlides ? 0 : prev + 1
//     );
//   };

//   const visibleSlides = data.slice(startSlide, startSlide + numVisibleSlides);

//   return (
//     <div className="slider">
//       <div
//         className="container"
//         style={{
//           transform: `translateX(-${startSlide * (100 / numVisibleSlides)}%)`,
//           transition: "transform 0.3s ease", // Smooth X-axis transition
//         }}
//       >
//         <div className="imagecontainer">
//           {visibleSlides.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt=""
//               className={`sliderimages ${index === 1 ? "active" : ""}`}
//             />
//           ))}
//         </div>
//       </div>
//       <div className="buttons">
//         <button onClick={goToPrevSlide}>
//           <BsArrowLeft />
//         </button>
//         <span />
//         <button onClick={goToNextSlide}>
//           <BsArrowRight />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Slider;
