import React from 'react'
import Logotopleft from '../logotopleft.js/Logotopleft';

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
          <Logotopleft />

        </header>
    )
}

export default Changingheader
