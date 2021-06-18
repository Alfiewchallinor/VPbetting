import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import Header from "../master/Header";
import Footer from "../master/Footer";
import Changingheader from "../master/changingheader/changingheader";
import Navigation from "../master/navigation/navigation";

class Home extends React.Component {
  easter = () => {
    $("#easter").toggle();
  };
  render() {
    return (
      <div className="bodydiv">
        <Changingheader />
        <Navigation />
        <Header />
        {/*-BUTTON CONTAINER-*/}
        <div className="button_container">
          {/*-DOUBLE BUTTONS UNDER TEXT-*/}
          <Link to="/" className="join_here">
            JOIN HERE
          </Link>
          <Link to="/" className="login_Below_Get">
            LOGIN
          </Link>
          
        </div>
        <div
          className="top_containero"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/images/proper_bc_123.jpg"
            })`,
          }}
        >
          <div className="city">
            {/*-MAIN TEXT TOP-*/}
            <div className="join_">JOIN NOW</div>
            <div className="newc">NEW CUSTOMERS</div>
            <div className="get_">GET 25 COINS FREE</div>
          </div>{" "}
        </div>

        <div
          className="top_container"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/images/proper_bc.jpg"
            })`,
          }}
        >
          <div className="city">
            {/*-MAIN TEXT TOP-*/}
            <div className="join_">JOIN NOW</div>
            <div className="newc">NEW CUSTOMERS</div>
            <div className="get_">GET 25 COINS FREE</div>
          </div>{" "}
        </div>
        {/*-TITLE - HOW IT WORKS-*/}
        <div
          className="htj_container"
          data-aos="fade-up"
          data-aos-duration={700}
          data-aos-delay={100}
          data-aos-once="true"
          data-aos-anchor-placement="center"
        >
          <div className="how_to_join">HOW IT WORKS</div>
        </div>
        {/*-STEPS HEADERS/TITLES CONTAINERS-*/}
        <div className="steps">
          <div
            className="column_L"
            data-aos="fade-right"
            data-aos-duration={700}
            data-aos-delay={300}
            data-aos-once="true"
            data-aos-anchor-placement="bottom"
          >
            <Link to="/" id="SU_step">
              SIGN UP
            </Link>
          </div>
          <div
            className="column_C"
            data-aos="fade-in"
            data-aos-duration={700}
            data-aos-delay={300}
            data-aos-once="true"
            data-aos-anchor-placement="center"
          >
            <h1 id="CAC_step">CHOOSE A CATEGORY</h1>
          </div>
          <div
            className="column_R"
            data-aos="fade-left"
            data-aos-duration={700}
            data-aos-delay={300}
            data-aos-once="true"
            data-aos-anchor-placement="center"
          >
            <h1 id="TR_step">THE RESULTS</h1>
          </div>
        </div>
        {/*-3 STEPS IMAGES CONTAINERS-*/}
        <div className="steps_images">
          <div
            className="column_L_img"
            data-aos="fade-right"
            data-aos-duration={700}
            data-aos-delay={100}
            data-aos-once="true"
            data-aos-anchor-placement="center"
          >
            <img
              id="column_L_img_id"
              src="/images/steps_images/z_sign_up.png"
              alt="join now"
            />
          </div>
          <div
            className="column_C_img"
            data-aos="fade-in"
            data-aos-duration={700}
            data-aos-delay={100}
            data-aos-once="true"
            data-aos-anchor-placement="center"
          >
            <img
              id="column_C_img_id"
              src="/images/steps_images/z_category.png"
              alt="pick a category "
            />
          </div>
          <div
            className="column_R_img"
            data-aos="fade-left"
            data-aos-duration={700}
            data-aos-delay={100}
            data-aos-once="true"
            data-aos-anchor-placement="center"
          >
            <img
              id="column_R_img_id"
              src="/images/steps_images/z_wait_for_result.png"
              alt="wait for result"
            />
          </div>
        </div>
        {/*- ////FOR MOBILE ONLY!!, FULL MOBILE INTERFACE-*/}
        <div className="mobile">
          <Link to="/" id="as_mob">
            JOIN HERE
          </Link>
          <Link to="/" id="as_mob">
            LOGIN
          </Link>
          <div className="how_to_m">
            <span id="signupspan">SIGN UP </span>
            <br /> <br />
            Create an account now to <br />
            join the fun by pressing{" "}
            <Link id="hereLOL" to="/">
              {" "}
              HERE.{" "}
            </Link>
          </div>
          <div className="how_to_m">
            <span id="cac_span">CHOOSE A CATEGORY </span>
            <br /> <br />
            Pick from one of our many
            <br /> categories, select the number
            <br /> of coins you want to use,
            <br /> and begin betting.
          </div>
          <div className="how_to_m">
            <span id="tr_span">THE RESULTS </span>
            <br /> <br />
            Wait for our team to update the <br />
            results and your winnings will
            <br /> be added to your account.
          </div>
          <div className="info_cont">
            Bet virtual points against your
            <br />
            friends, whenever you want,
            <br />
            wherever you want,for <br />
            whatever you want. Whether
            <br />
            your passion is in Esports or
            <br />
            traditional sports, VPbetting
            <br />
            has it all. Begin betting against
            <br />
            friends now.
          </div>
          <p id="cat_mobile"> CATEGORIES</p>
          <img
            id="mobile_img"
            src="images/categories/mobile_real.jpg"
            alt="mobile"
          />
          <p className="top_text_mob">
            <span id="join_m">JOIN NOW</span>
            <br />
            <span id="newc_mob">NEW CUSTOMERS</span>
            <br />
            <span id="get_mob">GET 25 COINS FREE</span>
            <br />
          </p>
        </div>
        {/*-end of mobile-*/}
        {/*-MAIN BULK TEXT OF 'HOW TO JOIN'-*/}
        <div className="steps_p">
          <div className="column_L_p">
            <p
              id="SU_step_p"
              data-aos="fade-right"
              data-aos-duration={700}
              data-aos-delay={500}
              data-aos-once="true"
              data-aos-anchor-placement="center"
            >
              Create an account now to join the fun by clicking 
              <Link to="/createAccount" id="span_click">
               <pre> here. </pre>
              </Link>
            </p>
          </div>
          <div
            className="column_C_p"
            data-aos="fade-in"
            data-aos-duration={700}
            data-aos-delay={500}
            data-aos-once="true"
            data-aos-anchor-placement="center"
          >
            <p id="CAC_step_p">
              Pick from one of our many categories, select the number of coins
              you want to use, and begin betting.
            </p>
          </div>
          <div
            className="column_R_p"
            data-aos="fade-left"
            data-aos-duration={700}
            data-aos-delay={500}
            data-aos-once="true"
            data-aos-anchor-placement="center"
          >
            <p id="TR_step_p">
              Wait for our team to update the results and your winnings will be
              added to your account.
            </p>
          </div>
        </div>
        {/*-WHO WE ARE CONTAINER AND BULK TEXT-*/}
        <div
          className="wwa"
          data-aos="fade-left"
          onClick={this.easter}
          data-aos-duration={700}
          data-aos-delay={300}
          data-aos-once="true"
        >
          <div id="wwa_para">
            {" "}
            <p>
              Bet virtual points against your friends, whenever you want,
              wherever you want, for whatever you want. Whether your passion is
              in Esports or traditional sports, VPbetting has it all. Begin
              betting against friends now.
            </p>
          </div>
        </div>
        <div
          className="ourC"
          data-aos="fade-up"
          data-aos-duration={300}
          data-aos-delay={200}
          data-aos-once="true"
        >
          CATEGORIES
        </div>
        {/*-WHO WE ARE JOIN NOW BTN-*/}
        <Link to="/createAccount" className="wwaJ ">
          JOIN NOW
        </Link>
        {/*-EASTEREGG-*/}
        <div id="easter" style={{ display: "none" }}>
          CHAGSY WAS HERE
        </div>
        {/*-CATEGORIES CONTAINER-*/}
        <div className="categs">
          {/*-MAIN BULK OF IMAGES-*/}
          <div
            className="categs_C"
            data-aos="fade-right"
            data-aos-duration={700}
            data-aos-delay={600}
            data-aos-once="true"
          >
            <Link
              to="/"
              id="box1"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/images/categories/c_valorant.jpg"
                })`,
              }}
            >
              <p id="box_text">VALORANT</p>
            </Link>
            <Link
              to="/"
              id="box2"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/images/categories/c_fortnite.jpg"
                })`,
                backgroundPosition: `center`,
              }}
            >
              <p id="box_text">FORTNITE</p>
            </Link>
            <Link
              to="/"
              id="box3"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL +
                  "/images/categories/c_league_of_legends.jpg"
                })`,
                backgroundPosition: `center`,
              }}
            >
              <p id="box_text">League Of Legends</p>
            </Link>
            <Link
              to="/"
              id="box4"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/images/categories/c_football.jpg"
                })`,
                backgroundPosition: `center`,
              }}
            >
              <p id="box_text">FOOTBALL</p>
            </Link>
            <Link
              to="/"
              id="box5"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/images/categories/c_rugby.jpg"
                })`,
                backgroundPosition: `center`,
              }}
            >
              <p id="box_text">RUGBY</p>
            </Link>
            <Link
              to="/"
              id="box6"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/images/categories/c_tennis.jpg"
                })`,
                backgroundPosition: `center`,
              }}
            >
              <p id="box_text">TENNIS</p>
            </Link>
            <Link
              to="/"
              id="box7"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/images/categories/c_cricket.png"
                })`,
                backgroundPosition: `center`,
              }}
            >
              <p id="box_text">CRICKET</p>
            </Link>
            <Link
              to="/"
              id="box10_wrongp"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/images/categories/c_form1r.jpg"
                })`,
                backgroundPosition: `center`,
              }}
            >
              <p id="box_text">FORMULA 1</p>
            </Link>
            <Link
              to="/snake"
              id="box8"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/images/categories/c_snake.jpg"
                })`,
                backgroundPosition: `center`,
              }}
            >
              <p id="box_text">SNAKE</p>
            </Link>
            <Link
              to="/"
              id="box9"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/images/categories/c_typeracer.jpg"
                })`,
                backgroundPosition: `center`,
              }}
            >
              <p id="box_text">TYPE RACER</p>
            </Link>
            <Link
              to="/tic-tac-toe"
              id="box11"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL +
                  "/images/categories/c_tic-tac-toe.jpg"
                })`,
                backgroundPosition: `center`,
              }}
            >
              <p id="box_textp">TIC-TAC-TOE</p>
            </Link>
            <Link
              to="/circleShooter"
              id="box12"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL +
                  "/images/categories/c_circle-shooter.jpg"
                })`,
                backgroundPosition: `center`,
              }}
            >
              <p id="box_text">CIRCLE SHOOTER</p>
            </Link>
          </div>
        </div>
        {/*-ANOTHER JOIN NOW BTN-*/}
        <Link to="/createAccount" className="join_now123">
          {" "}
          ACTUALLY JOIN NOW
        </Link>
        {/*-MORE INFOMATION, MINI FAQ-*/}
        <div className="faq_cont">
          {/*-LEFT/ TITLE SIDE-*/}
          <div className="left">
            <h1
              id="what_are_coins"
              data-aos="fade-right"
              data-aos-duration={700}
              data-aos-delay={300}
              data-aos-once="true"
            >
              WHAT ARE COINS?
            </h1>
            <h1
              id="what_can_i_bet_on"
              data-aos="fade-right"
              data-aos-duration={700}
              data-aos-delay={300}
              data-aos-once="true"
            >
              WHAT CAN I BET ON?
            </h1>
          </div>
          {/*-RIGHT/ MAIN BULK OF TEXT SIDE-*/}
          <div className="right">
            <p
              id="what_are_coins_p"
              data-aos="fade-left"
              data-aos-duration={700}
              data-aos-delay={300}
              data-aos-once="true"
            >
              Earn coins and bet them against your friends. <br />
              The coins are completely free and cannot be <br />
              traded as currency, they're purely there for fun!
            </p>
            <p
              id="what_can_i_bet_on_p"
              data-aos="fade-left"
              data-aos-duration={700}
              data-aos-delay={300}
              data-aos-once="true"
            >
              Bet on esports and traditional sports with your
              <br /> coins, when no tournaments are on and you
              <br /> want to rack up your points, play our MINIGAMES.         
            </p>
            <p />
          </div>
        </div>
        {/*-BOTTOM 'FILLER' DIV TO CLEARLY DISPLAY FOOTER-*/}
        <div id="filler" />
        <Footer />
      </div>
    );
  }
}

export default Home;
