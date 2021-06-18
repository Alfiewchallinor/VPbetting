import React from 'react'
import { Link } from "react-router-dom";

const  Changingheader = () => {

    const headerfunc = () => {
        const header = document.querySelector(".header");
        window.onscroll = function () {
          if (window.scrollY >= 494) {
            header.classList.add("active");
          } else {
            header.classList.remove("active");
          }
        };
      };
    return (
        <header id="Header" className="header" onLoad={headerfunc}>
          <Link to="/">
            <img src="images/Logodesign2.png" id="logo" alt="topleftlogo" />
          </Link>
        </header>
    )
}

export default Changingheader
