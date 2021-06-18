import React from "react";
import {
  EsportsFunction,
  SportsFunction,
  MinigamesFunction,
} from "./NavigationFunctions";

const Navigation = () => {
  return (
    <div id="nav">
      <ul>
        <li>
          <button id="esportsb" onClick={EsportsFunction}>
            ESPORTS{" "}
          </button>
        </li>
        <li>
          <button id="sportsb" onClick={SportsFunction}>
            SPORTS{" "}
          </button>
        </li>
        <li>
          <button id="minigamesb" onClick={MinigamesFunction}>
            MINIGAMES{" "}
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Navigation;
