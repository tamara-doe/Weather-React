import React from "react";
import "./Description.css";

export default function Description() {
  return (
    <div className="col-4">
      <div id="description" className="description"></div>
      <div id="humidity" className="humidity">
        humidity
      </div>
      <div id="wind" className="wind">
        windspeed
      </div>
    </div>
  );
}
