import React from "react";
import { Card, Button } from "react-bootstrap";
import "./about.css";
function about() {
  return (
    <div className="aboutcontainer">
      <h1 className="title abouttitle">About OC</h1>
      <div className="aboutgroup">
        <img className="abouticon" src="./Img/home/LOGO.jpg" />
        <div className="abouttext">
          <div className="aboutgroup-title">About</div>
          <div className="aboutgroup-container">
            我們的團隊叫做器官收藏所，是由元智大學資傳系設計以及科技組同學組成。我們的創作目的是為了能夠將資訊以跨媒體傳播給民眾了解，希望以更有創意的方式呈現給大眾。
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
