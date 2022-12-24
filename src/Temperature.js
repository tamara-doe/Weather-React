import React from "react";
//import "./Temperature.css";

export default function Temperature() {
  return (
    <div>
      <img src="" alt="cloudy" id="icon" className="mainImage" />
      <span id="temperature" className="temperature">
        {" "}
        20{" "}
      </span>
      <sup>
        <span className="celsius" id="celsius">
          °C
        </span>
      </sup>
    </div>
  );
}
