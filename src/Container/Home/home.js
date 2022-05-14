import React from "react";
import { useState, useEffect } from "react";
import "./home.css";
function Home() {
  let imgurl = "/Img/home/home1.jpeg";
  const [thewidth, setThewidth] = useState("");
  useEffect(() => {
    setThewidth(document.body.clientWidth);
  }, [thewidth]);
  if (thewidth < 1200) {
    imgurl = "/Img/home/home2.jpeg";
  }
  return (
    <div className="homecontainer">
      <img className="homeImg" src={imgurl} />
    </div>
  );
}

export default Home;
