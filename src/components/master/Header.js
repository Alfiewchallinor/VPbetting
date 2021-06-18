import React from "react";
import { Link } from "react-router-dom";
import DefaultSideMenu from "./DefaultSideMenu";
import $ from "jquery"


class Header extends React.Component {
  
  state = {
    isMenuOpen: false,
  };
  

  showSidebar = () => {
    const isOpen = this.state.isMenuOpen;
    this.setState({ isMenuOpen: !isOpen });
    $("#container, #remover, #LOGIN, #nav, #Header").toggle();
    $("#esports-lightbox, #sports-lightbox, #minigames-lightbox").hide();
  };
  closeSidebar = () => {
    const isOpen = this.state.isMenuOpen;
    this.setState({ isMenuOpen: !isOpen });
    $("#container, #remover").hide();
    $("#LOGIN, #nav, #Header").show();
  };
  
  render() {
    const isOpen = this.state.isMenuOpen;
    return (
      <div>
        {/*navigation inserted here */}
        <section id="whenSignedOut">
          <button onClick={this.login} id="LOGIN"
          
          >
            LOGIN
          </button>
        </section>
        <section id="whenSignedIn" hidden="{true}">
          <Link to="/">
            <button id="userdetailslink" />
          </Link>
        </section>
        {/*-UNIVERSAL SIDE-MENU-*/}
        <DefaultSideMenu />
        <div
          id="remover"
          onClick={this.closeSidebar}
          style={{ display: "none" }}
        />
        {/* ESPORTS LIGHTBOX */}
        <div style={{ display: "none" }} id="esports-lightbox">
          <div id="sizingf">
            {" "}
            <img
              src="images/categories/c_valorant_t.jpg"
              id="the-lb"
              alt="valorant category"
            />
          </div>
          <div id="sizingf">
            {" "}
            <Link to="/">
              {" "}
              <img
                src="images/categories/c_fortnite_t.jpg"
                id="the-lb"
                alt="fortnite category"
              />
            </Link>
          </div>
          <div id="sizingf">
            {" "}
            <img
              src="images/categories/c_lol_t.jpg"
              id="the-lb"
              alt="league of legends category"
            />
          </div>
        </div>
        {/* SPORTS LIGHTBOX */}
        <div style={{ display: "none" }} id="sports-lightbox">
          <div id="sizingf">
            {" "}
            <img
              src="images/categories/c_football_t.jpg"
              id="the-lb"
              alt="football category "
            />
          </div>
          <div id="sizingf">
            {" "}
            <img
              src="images/categories/c_rugby_t.jpg"
              id="the-lb"
              alt="rugby category "
            />
          </div>
          <div id="sizingf">
            {" "}
            <img
              src="images/categories/c_cricket_t.jpg"
              id="the-lb"
              alt="cricket category "
            />
          </div>
          <div id="sizingf">
            {" "}
            <img
              src="images/categories/c_tennis_t.jpg"
              id="the-lb"
              alt="tennis category "
            />
          </div>
          <div id="sizingf">
            {" "}
            <img
              src="images/categories/c_form1r_t.jpg"
              id="the-lb"
              alt="formula 1 category "
            />
          </div>
        </div>
        {/* MINIGAMES-LIGHTBOX */}
        <div style={{ display: "none" }} id="minigames-lightbox">
          <div id="sizingf">
            <Link to="/snake">
              {" "}
              <img
                src="images/categories/c_snake_t.jpg"
                id="the-lb"
                alt="snake "
              />
            </Link>
          </div>
          <div id="sizingf">
            {" "}
            <Link to="/">
              {" "}
              <img
                src="images/categories/c_typeracer.jpg"
                id="the-lb"
                alt="typeracer "
              />
            </Link>
          </div>
          <div id="sizingf">
            {" "}
            <Link to="tic-tac-toe">
              <img
                src="images/categories/c_tic-tac-toe_t.jpg"
                id="the-lb"
                alt="tic-tac-toe "
              />
            </Link>
          </div>
          <div id="sizingf">
            {" "}
            <Link to="/circleShooter">
              {" "}
              <img
                src="images/categories/c_circle_t.jpg"
                id="the-lb"
                alt="circle shooter "
              />
            </Link>
          </div>
        </div>
        {/* BURGER BUTTON TO ACTIVATE SIDEBAR */}
        <button
          id="menubtnl"
          className={isOpen ? "menu-btn open" : "menu-btn"}
          onClick={this.showSidebar}
        >
          <div id="menu-btn_burger"></div>
        </button>
      </div>
    );
  }
}
export default Header;
