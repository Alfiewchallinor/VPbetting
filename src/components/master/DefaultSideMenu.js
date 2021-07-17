import React from 'react'
import { Link } from 'react-router-dom'


const DefaultSideMenu = () => {
    return (
        <div style={{ display: "none" }} id="container"
        >
          <nav className="navbar">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link1">
                  _
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                >
                  VALORANT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/fortnite"
                  className="nav-link"
                >
                  FORTNITE
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                >
                  LEAGUE OF LEGENDS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                >
                  FOOTBALL
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                >
                  RUGBY
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                >
                  CRICKET
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                >
                  TENNIS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                >
                  FORMULA 1
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/snake"
                  className="nav-link"
                >
                  SNAKE
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                >
                  TYPE RACER
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/tictactoe"
                  className="nav-link"
                >
                  TIC-TAC-TOE
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/circleshooter"
                  className="nav-link"
                >
                  CIRCLE SHOOTER
                </Link>
              </li>
            </ul>
          </nav>
        </div>
    )
}

export default DefaultSideMenu
