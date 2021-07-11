import React from "react";
import { Link } from "react-router-dom";

function Levels() {
  return (
    <div>
      <Link to="/circleshootereasy">
        <div className="visit4 ">EASY</div>
      </Link>
      <Link to="/circleshooter">
        <div className="visit4 posl">MEDIUM</div>
      </Link>
      <Link to="/circleshooterhard">
        <div className="visit4 posm">HARD</div>
      </Link>
    </div>
  );
}

export default Levels;
