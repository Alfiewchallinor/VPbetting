import React from 'react'
import Logotopleft from '../logotopleft.js/Logotopleft';

const  Changingheader = () => {

    const headerfunc = () => {
        const header = document.querySelector(".header");
        window.onscroll = function () {
          if (window.scrollY >= -1) {
            header.classList.add("active");
          } else {
            header.classList.remove("active");
          }
        };
      };
    return (
        <header id="Header" className="header active" onLoad={headerfunc}>
          <Logotopleft />

        </header>
    )
}

export default Changingheader
