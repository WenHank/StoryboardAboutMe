import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function header() {
  let open = 0;
  return (
    <nav>
      <input type="checkbox" id="check"></input>
      <label htmlFor="check" className="checkbtn">
        <i
          className="fas fa-bars"
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
        ></i>
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
          OC
        </Link>
      </label>
      <ul>
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
        <li>
          <Link
            to="Make"
            onClick={() => {
              let ul = document.querySelector("ul");
              ul.style.left = "-100%";
              open = 0;
            }}
          >
            Make
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default header;
