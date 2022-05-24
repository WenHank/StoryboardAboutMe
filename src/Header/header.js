import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function header() {
  let open = 0;
  return (
    <nav>
      <input type="checkbox" id="check"></input>
      <label htmlFor="check" className="checkbtn">
        <div
          onClick={() => {
            let ul = document.querySelector("ul");
            console.log(open);
            if (open) {
              ul.style.left = "-100%";
              open = 0;
            } else {
              ul.style.left = "0";
              open = 1;
            }
          }}
        >
          <img
            style={{ width: "35px" }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAKElEQVRIiWNgGAXDHjAisf/TwmwmKhs6CgYhGE1Fo4ByMJqKRsEQAADWCQMKYvEFtQAAAABJRU5ErkJggg=="
          />
        </div>
      </label>
      <label className="logo">
        <Link
          to="/"
          onClick={() => {
            let ul = document.querySelector("ul");
            ul.style.left = "-100%";
            open = 0;
          }}
        >
          <img className="icon" src="./Img/home/LOGO.jpg" />
        </Link>
      </label>
      <ul className="headerul">
        <li>
          <Link
            to="About"
            onClick={() => {
              let ul = document.querySelector("ul");
              ul.style.left = "-100%";
              open = 0;
            }}
          >
            About OC
          </Link>
        </li>
        <li>
          <Link
            to="Story"
            onClick={() => {
              let ul = document.querySelector("ul");
              ul.style.left = "-100%";
              open = 0;
            }}
          >
            Story
          </Link>
        </li>
        {/* <li>
          <Link
            to="Color"
            onClick={() => {
              let ul = document.querySelector("ul");
              ul.style.left = "-100%";
              open = 0;
            }}
          >
            Color scheme
          </Link>
        </li> */}
        <li>
          <Link
            to="Make"
            onClick={() => {
              let ul = document.querySelector("ul");
              ul.style.left = "-100%";
              open = 0;
            }}
          >
            Timeline
          </Link>
        </li>
        <li>
          <Link
            to="Member"
            onClick={() => {
              let ul = document.querySelector("ul");
              ul.style.left = "-100%";
              open = 0;
            }}
          >
            Member
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default header;
