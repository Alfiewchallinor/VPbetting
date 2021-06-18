import React from 'react'
import { Link } from "react-router-dom";

const ChangingHeaderInstant = () => {
      const instantfunc = () => {
        const header = document.querySelector(".header");
        window.onscroll = function () {
          if (window.scrollY >= 20) {
            header.classList.add("active");
          } else {
            header.classList.remove("active");
          }
        };
      }
    return (
        <header id="Header" className="header" onLoad={instantfunc}>
          <Link to="/">
            <img src="images/Logodesign2.png" id="logo" alt="topleftlogo" />
          </Link>
        </header>
    )
}

export default ChangingHeaderInstant

