import React from "react";
import { Card, Button } from "react-bootstrap";
import "./about.css";
function about() {
  return (
    <div className="aboutcontainer">
      <h1 className="title abouttitle">About OC</h1>
      <div className="aboutgroup">
        <img className="abouticon" src="./Img/icon.jpeg" />
        <div className="abouttext">
          <div className="aboutgroup-title">About</div>
          <div className="aboutgroup-container">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            tempora ab laudantium voluptatibus aut eos placeat laborum,
            quibusdam exercitationem labore. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Consectetur tempora ab laudantium
            voluptatibus aut eos placeat laborum, quibusdam exercitationem
            labore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur tempora ab laudantium voluptatibus aut eos placeat
            laborum, quibusdam exercitationem labore.
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
