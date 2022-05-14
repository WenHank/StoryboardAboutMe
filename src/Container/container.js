import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./container.css";
import About from "./About/about";
import Member from "./Member/member";
import Make from "./Make/make";
import Story from "./Story/story";
import Home from "./Home/home";
import Color from "./Color/color";
import Header from "../Header/header";
import Footer from "../Footer/footer";
function container() {
  return (
    <div className="containercontainer">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Member" element={<Member />} />
          <Route path="/Make" element={<Make />} />
          <Route path="/Story" element={<Story />} />
          <Route path="/Color" element={<Color />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default container;
