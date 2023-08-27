import React from "react";
import { images } from "../data";
import "./franchise.scss";

const Franchise = () => {
  return (
    <div className="franchise">
      <h1>Book a franchise</h1>

      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSdLvdk2ODyKBW7m6BYAI6jWkmJM5eADR8T_yfzMAxdrNlAF2A/formResponse"
        className="form"
      >
        <div className="nameemail">
          <input type="text" placeholder="Name" name="entry.1108767202" />
          <input type="text" placeholder="Email" name="entry.1884782877" />
        </div>
        <textarea
          name="entry.1849509373"
          id=""
          cols="30"
          rows="8"
          placeholder="Message"
        />
        <button type="submit">
          Sign Up
        </button>
      </form>

      <div className="images">
        {images.map((item) => {
          return <img src={item.image} alt="" />;
        })}
      </div>
    </div>
  );
};

export default Franchise;
