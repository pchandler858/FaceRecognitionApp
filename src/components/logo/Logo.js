import React from "react";
import Tilt from "react-tilt";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma3 mt0">
      <Tilt
        className="Tilt br2 shadow-2 center"
        options={{ max: 55 }}
        style={{ height: 250, width: 250 }}
      >
        <div className="Tilt-inner pa5">
          <img
            style={{ paddingTop: "5px", height: "126px" }}
            src={brain}
            alt="brain logo"
          />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
