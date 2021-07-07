import React, { useRef } from "react";
import SportsHeader from "../../master/sportsheader";
import $ from "jquery";

export default function Fortnite() {
  fetch("https://fortniteapi.io/v1/events/list?lang=en&region=EU", {
    method: "GET",
    headers: {
      Authorization: process.env.REACT_APP_UPCOMMING_TOURNAMENT_KEY,
    },
  })
    .then((res) => res.json())
    .then(function (response) {
      $(".tournamentposterClass").css("display", "block")
      
      //  console.log(JSON.stringify(response.events))
      //Get the values of the last events in the
      // array (format backwards, e.g "fourth" should be the leftest box)
      const finalarray = response.events.length - 1;
      const thirdarray = response.events.length - 2;
      const secondarray = response.events.length - 3;
      const firstarray = response.events.length - 4;
      //1st box
       const firstfinalposterfinal = JSON.stringify(
        response.events[firstarray].poster
      ).replace(/"/g, "");
       document.getElementById("firsttournamentposter").src = firstfinalposterfinal
       const box1linetop = JSON.stringify(
        response.events[firstarray].name_line1).replace(/"/g, "");
        $("#firsttournamentlineone").html(box1linetop) 

        const box1linetwo = JSON.stringify(
          response.events[firstarray].name_line2).replace(/"/g, "");
          $("#firsttournamentlinetwo").html(box1linetwo)

         const box1Schedule = JSON.stringify(
           response.events[firstarray].schedule).replace(/"/g, "")
           $("#titleSchedule").html(box1Schedule)
      //2nd box 
       const secondfinalposterfinal = JSON.stringify(
        response.events[secondarray].poster
      ).replace(/"/g, "");
       document.getElementById("secondtournamentposter").src = secondfinalposterfinal
       const box2linetop = JSON.stringify(
        response.events[secondarray].name_line1).replace(/"/g, "");
        $("#secondtournamentlineone").html(box2linetop)
        
        const box2linetwo = JSON.stringify(
          response.events[secondarray].name_line2).replace(/"/g, "");
          $("#secondtournamentlinetwo").html(box2linetwo)

          const box2Schedule = JSON.stringify(
            response.events[secondarray].schedule).replace(/"/g, "")
            $("#titleScheduleSecond").html(box2Schedule)
       //3rd box
       const thirdfinalposterfinal = JSON.stringify(
        response.events[thirdarray].poster
      ).replace(/"/g, "");
       document.getElementById("thirdtournamentposter").src = thirdfinalposterfinal

        const box3linetop = JSON.stringify(
         response.events[thirdarray].name_line1).replace(/"/g, "");
         $("#thirdtournamentlineone").html(box3linetop)

         const box3linetwo = JSON.stringify(
          response.events[thirdarray].name_line2).replace(/"/g, "");
          $("#thirdtournamentlinetwo").html(box3linetwo)

          const box3Schedule = JSON.stringify(
            response.events[thirdarray].schedule).replace(/"/g, "")
            $("#titleScheduleThird").html(box3Schedule)
       //last box
      const fourthfinalposterfinal = JSON.stringify(
        response.events[finalarray].poster
      ).replace(/"/g, "");
       document.getElementById("lasttournamentposter").src = fourthfinalposterfinal

       const box4linetop = JSON.stringify(
        response.events[finalarray].name_line1).replace(/"/g, "");
        $("#fourthtournamentlineone").html(box4linetop)
        
        const box4linetwo = JSON.stringify(
          response.events[finalarray].name_line2).replace(/"/g, "");
          $("#fourthtournamentlinetwo").html(box4linetwo)

          const box4Schedule = JSON.stringify(
            response.events[finalarray].schedule).replace(/"/g, "")
            $("#titleScheduleFourth").html(box4Schedule)
       //if statements to decrease font size
       //if statements box 1
       if(document.getElementById("firsttournamentlineone").innerHTML.length > 10) {
        $("#firsttournamentlineone").css("fontSize", "40px")
      }
      if(document.getElementById("firsttournamentlinetwo").innerHTML.length > 10) {
        $("#firsttournamentlinetwo").css("fontSize", "40px")
      }
      //if statements box 2
      if(document.getElementById("secondtournamentlineone").innerHTML.length > 10) {
        $("#secondtournamentlineone").css("fontSize", "40px")
      }
      if(document.getElementById("secondtournamentlinetwo").innerHTML.length > 10) {
        $("#secondtournamentlinetwo").css("fontSize", "40px")
      }
      //if statements box 3
      if(document.getElementById("thirdtournamentlineone").innerHTML.length > 10) {
        $("#thirdtournamentlineone").css("fontSize", "40px")
      }
      if(document.getElementById("thirdtournamentlinetwo").innerHTML.length > 10) {
        $("#thirdtournamentlinetwo").css("fontSize", "40px")
      }
      //if statements box 4
       if(document.getElementById("fourthtournamentlineone").innerHTML.length > 10) {
        $("#fourthtournamentlineone").css("fontSize", "40px")
      }
      if(document.getElementById("fourthtournamentlinetwo").innerHTML.length > 10) {
        $("#fourthtournamentlinetwo").css("fontSize", "40px")
      }
      //if statements for unlikely + 15 character length


      if(document.getElementById("firsttournamentlineone").innerHTML.length > 14) {
        $("#firsttournamentlineone").css("fontSize", "26.7px")
      }
      if(document.getElementById("firsttournamentlinetwo").innerHTML.length > 14) {
        $("#firsttournamentlinetwo").css("fontSize", "26.7px")
      }
      //if statements box 2
      if(document.getElementById("secondtournamentlineone").innerHTML.length > 14) {
        $("#secondtournamentlineone").css("fontSize", "26.7px")
      }
      if(document.getElementById("secondtournamentlinetwo").innerHTML.length > 14) {
        $("#secondtournamentlinetwo").css("fontSize", "26.7px")
      }
      //if statements box 3
      if(document.getElementById("thirdtournamentlineone").innerHTML.length > 14) {
        $("#thirdtournamentlineone").css("fontSize", "26.7px")
      }
      if(document.getElementById("thirdtournamentlinetwo").innerHTML.length > 14) {
        $("#thirdtournamentlinetwo").css("fontSize", "26.7px")
      }
      //if statements box 4
       if(document.getElementById("fourthtournamentlineone").innerHTML.length > 14) {
        $("#fourthtournamentlineone").css("fontSize", "26.7px")
      }
      if(document.getElementById("fourthtournamentlinetwo").innerHTML.length > 14) {
        $("#fourthtournamentlinetwo").css("fontSize", "26.7px")
      }
      
       // box 1 clicked function
      const upcommingtournamentfirst = document.querySelector("#upcommingtournamentfirst")
      const upcommingtournamentsecond = document.querySelector("#upcommingtournamentsecond")

      const shortDescriptionTop = JSON.stringify(response.events[firstarray].long_description).replace(/"/g, "")
      upcommingtournamentfirst.addEventListener("click",(e) => {
        console.log("clickedleft")
        $(".selectTournament, .imagebackgroundFortniteContainer").css("display", "none")
        $(".completebottomLeftSection").css("background", "white")
        $(".onlyShownOnEventClick").css("display", "block")
        $(".clickedTournamentSectionTitle").html("BET ON:" +" " + box1linetop +" " + box1linetwo)
        $(".clickedTournamentSectionDescription").html( shortDescriptionTop)
      })
      upcommingtournamentsecond.addEventListener("click",(e) => {
        console.log("clicked left-Right")
        $(".selectTournament, .imagebackgroundFortniteContainer").css("display", "none")
        $(".completebottomLeftSection").css("background", "white")
        $(".onlyShownOnEventClick").css("display", "block")
        $(".clickedTournamentSectionTitle").html(box2linetop +" " + box2linetwo)
      })
    })
  const usernameRef = useRef();
  function clickedsearch(e) {
    e.preventDefault();

    fetch(
      process.env.REACT_APP_FORTNITE_UID_URL + usernameRef.current.value,
      {
        method: "GET",
        headers: {
          Authorization: process.env.REACT_APP_FORTNITE_UID_KEY,
        },
      }
    )
      .then((res) => res.json())

      .then(function (response) {
        const fnaccountuidwith = JSON.stringify(response.account_id);
        const fnaccountuid = fnaccountuidwith.replace('"', "");
        const finalizeduidfortnite = fnaccountuid.replace('"', "");
        fetch(
          process.env.REACT_APP_FORTNITE_STATS_URL + finalizeduidfortnite,
          {
            method: "GET",
            headers: {
              "x-api-key": process.env.REACT_APP_FORTNITE_STATS_KEY,
            },
          }
        )
          .then((res) => res.json())
          .then(function (response) {
           
            $(".playerstatssection").css("display", "flex");
            $(".removestat").css("display", "block");
            const accountnamewith = JSON.stringify(response.data.account.name);
            const finalizedaccountname = accountnamewith.replace(/"/g, "");
            document.getElementById("accountName").innerHTML =
              finalizedaccountname;

            const overallwinswith = JSON.stringify(
              response.data.stats.all.overall.wins
            );
            const finalizedoverallwins = overallwinswith.replace(/"/g, "");
            document.getElementById("overallwins").innerHTML =
              finalizedoverallwins;

            const overallwinpercentagewith = JSON.stringify(
              response.data.stats.all.overall.winRate
            ) + "%";
            const finalizedoverallwinpercentage =
              overallwinpercentagewith.replace(/"/g, "");
            document.getElementById("overallwinpercentage").innerHTML =
              finalizedoverallwinpercentage;

            const overallkdswith = JSON.stringify(
              response.data.stats.all.overall.kd
            ).replace(/"/g, "");
            document.getElementById("overallkd").innerHTML = overallkdswith;

            const overallkdmswith = JSON.stringify(
              response.data.stats.all.overall.killsPerMin
            ).replace(/"/g, "");
            document.getElementById("overallkpm").innerHTML = overallkdmswith;

            const overallmatchnumber = JSON.stringify(
              response.data.stats.all.overall.matches
            ).replace(/"/g, "");
            document.getElementById("overallmatchnumber").innerHTML =
              overallmatchnumber;

            const overallkillnumber = JSON.stringify(
              response.data.stats.all.overall.kills
            ).replace(/"/g, "");
            document.getElementById("overallkillnumber").innerHTML =
              overallkillnumber;

            const overalldeathnumber = JSON.stringify(
              response.data.stats.all.overall.deaths
            ).replace(/"/g, "");
            document.getElementById("overalldeathnumber").innerHTML =
              overalldeathnumber;
            // SOLO DATA
            const soloWinAmount = JSON.stringify(
              response.data.stats.all.solo.wins
            ).replace(/"/g, "");
            document.getElementById("soloWinAmount").innerHTML = soloWinAmount;

            const soloWinPercentage = JSON.stringify(
              response.data.stats.all.solo.winRate
            ).replace(/"/g, "");
            document.getElementById("soloWinPercentage").innerHTML =
              soloWinPercentage  + "%";

            const soloKillAmount = JSON.stringify(
              response.data.stats.all.solo.kills
            ).replace(/"/g, "");
            document.getElementById("soloKillAmount").innerHTML =
              soloKillAmount;

            const soloDeathAmount = JSON.stringify(
              response.data.stats.all.solo.deaths
            ).replace(/"/g, "");
            document.getElementById("soloDeathAmount").innerHTML =
              soloDeathAmount;

            const soloRatio = JSON.stringify(
              response.data.stats.all.solo.kd
            ).replace(/"/g, "");
            document.getElementById("soloRatio").innerHTML = soloRatio;
            //DUO DATA
            const duoWinAmount = JSON.stringify(
              response.data.stats.all.duo.wins
            ).replace(/"/g, "");
            document.getElementById("duoWinAmount").innerHTML = duoWinAmount;

            const duoWinPercentage = JSON.stringify(
              response.data.stats.all.duo.winRate
            ).replace(/"/g, "");
            document.getElementById("duoWinPercentage").innerHTML =
              duoWinPercentage + "%";

            const duoKillAmount = JSON.stringify(
              response.data.stats.all.duo.kills
            ).replace(/"/g, "");
            document.getElementById("duoKillAmount").innerHTML = duoKillAmount;

            const duoDeathAmount = JSON.stringify(
              response.data.stats.all.duo.deaths
            ).replace(/"/g, "");
            document.getElementById("duoDeathAmount").innerHTML =
              duoDeathAmount;

            const duoRatio = JSON.stringify(
              response.data.stats.all.duo.kd
            ).replace(/"/g, "");
            document.getElementById("duoRatio").innerHTML = duoRatio;
            //SQUAD DATA
            const squadWinAmount = JSON.stringify(
              response.data.stats.all.squad.wins
            ).replace(/"/g, "");
            document.getElementById("squadWinAmount").innerHTML =
              squadWinAmount;

            const squadWinPercentage = JSON.stringify(
              response.data.stats.all.squad.winRate
            ).replace(/"/g, "");
            document.getElementById("squadWinPercentage").innerHTML =
              squadWinPercentage + "%";

            const squadKillAmount = JSON.stringify(
              response.data.stats.all.squad.kills
            ).replace(/"/g, "");
            document.getElementById("squadKillAmount").innerHTML =
              squadKillAmount;

            const squadDeathAmount = JSON.stringify(
              response.data.stats.all.squad.deaths
            ).replace(/"/g, "");
            document.getElementById("squadDeathAmount").innerHTML =
              squadDeathAmount;

            const squadRatio = JSON.stringify(
              response.data.stats.all.squad.kd
            ).replace(/"/g, "");
            document.getElementById("squadRatio").innerHTML = squadRatio;
          });
      });
  }
  function closestatmenu() {
    $(".playerstatssection").css("display", "none");
    $(".removestat").css("display", "none");
  }
  function testerfunction () {
    fetch("https://fortniteapi.io/v1/events/window?windowId=S11_CC_Contenders_EU_Event1", {
    method: "GET",
    headers: {
      Authorization: process.env.REACT_APP_UPCOMMING_TOURNAMENT_KEY,
    },
  })
    .then((res) => res.json())
    .then(function (response) {
      console.log(JSON.stringify(response))
    })
  }
  return (
    <div>
      <SportsHeader />
      <div className="stats" id="stats"></div>
      <section className="upcommingtounramentssection">
        <div className="upcommingtounramentdiv">
          <div className="upcommingTournament" id="upcommingtournamentfirst">
            <img src="" id="firsttournamentposter" alt="toplefttournament" className="tournamentposterClass" />
            <h1 className="tournamenttitle" id="firsttournamentlineone">Loading</h1>
            <h1 className="tournamenttitle secondlineposition" id="firsttournamentlinetwo">...</h1>
            <p className="scheduletitle" id="titleSchedule"></p>
          </div>
          <div className="upcommingTournament" id="upcommingtournamentsecond">
            <img src="" id="secondtournamentposter" alt="toprighttournament" className="tournamentposterClass" />
            <h1 className="tournamenttitle" id="secondtournamentlineone">Loading</h1>
            <h1 className="tournamenttitle secondlineposition" id="secondtournamentlinetwo">...</h1>
            <p className="scheduletitle" id="titleScheduleSecond"></p>
          </div>
          <div className="upcommingTournament" id="upcommingtournamentthird">
            <img src="" id="thirdtournamentposter" alt="bottomlefttournament" className="tournamentposterClass"/>
            <h1 className="tournamenttitle" id="thirdtournamentlineone">Loading</h1>
            <h1 className="tournamenttitle secondlineposition" id="thirdtournamentlinetwo">...</h1>
            <p className="scheduletitle" id="titleScheduleThird"></p>
          </div>
          <div className="upcommingTournament" id="upcommingtournamentfourth">
            <img src="" id="lasttournamentposter" alt="bottomrighttournament" className="tournamentposterClass" />
            <h1 className="tournamenttitle" id="fourthtournamentlineone">Loading...</h1>
            <h1 className="tournamenttitle secondlineposition" id="fourthtournamentlinetwo">...</h1>
            <p className="scheduletitle" id="titleScheduleFourth"></p>
          </div>
        </div>
      </section>
      <section className="findaPlayer">
        <form className="formforsearch" onSubmit={clickedsearch}>
          <input
            className="searchforPlayer"
            placeholder="FIND PLAYER"
            ref={usernameRef}
            onClick={testerfunction}
          />
          <div className="rightside">
            <button
              className="searchbutton"
              style={{ position: "relative" }}
              type="submit"
            >
              <h2 className="searchforPlayerLabel">SEARCH</h2>
            </button>{" "}
          </div>{" "}
        </form>
      </section>
      <section className="completebottomLeftSection">
        <h2 className="selectTournament">SELECT A CUP TO BEGIN BETTING</h2>
          <div className="imagebackgroundFortniteContainer"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/images/backgroundeventReal.jpg"
            })`
          }}
          >
            </div>   
            <section className="onlyShownOnEventClick" style={{"display": "none"}}>
              
              <div className="fortniteOnclickLeftSection">
              <p className="clickedTournamentSectionTitle"></p>
              <p className="clickedTournamentSectionDescription"></p>
              <div className="rightborderFortniteOnclick"></div>
              </div>
              <div className="fortniteOnClickTopRightSection">
                <p className="fortniteOnClickTopRightHeader">FORTNITE BETTING EXPLAINED</p>
                  <p className="fortniteOnClickTopRightPara">
                    Users will choose from 2 general sections, the first one is to outright
                    place a certain position on the leaderboard, this section is the most 
                    risky for your coins, however if your bet is won you will recieve a LOT of coins. <br /> <br />
                    The second section for statistics, here you will be able to bet on statistics such as who will
                    have the most kills, placement etc.
                  </p>
              </div>
              </section>     

        
      </section>
      <section
        className="playerstatssection"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/fortniteimage.jpg"
          })`,
          display: "none",
        }}
      >
        <section className="outsideBorder"></section>
        <div className="overallbox">
          <div className="toptitlecontainer">
            <h1 className="overallheaderh1">OVERALL STATS</h1>
          </div>
          <h1 className="accountName" id="accountName"></h1>
          <section className="winswinpercentkdkpmcontainer">
            <div className="sectionLeftLeftUpper" id="overallwins"></div>
            <div
              className="sectionLeftRightUpper"
              id="overallwinpercentage"
            ></div>
            <div className="sectionRightLeftUpper" id="overallkd"></div>
            <div className="sectionRightRightUpper" id="overallkpm"></div>
          </section>
          <section className="winswinpercentkdkpmcontainersecond">
            <div className="sectionLeftLeft">WINS</div>
            <div className="sectionLeftRight">WIN %</div>
            <div className="sectionRightLeft">K/D</div>
            <div className="sectionRightRight">KPM</div>
          </section>
          <section className="winswinpercentkdkpmcontainerthird">
            <div
              className="sectionLeftLeftUpper threecolumnsizing"
              id="overallmatchnumber"
            ></div>
            <div
              className="sectionLeftRightUpper threecolumnsizing middlePositionchanger"
              id="overallkillnumber"
            ></div>
            <div
              className="sectionRightLeftUpper threecolumnsizing"
              id="overalldeathnumber"
            ></div>
          </section>
          <section className="winswinpercentkdkpmcontainerfourth">
            <div className="sectionLeftLeftBelow matchespositioner">
              MATCHES
            </div>
            <div className="sectionLeftRightBelow middlePositionchanger secondarymiddlerchanger">
              KILLS
            </div>
            <div className="sectionRightLeftBelow deathsPositioner">DEATHS</div>
          </section>
        </div>
        <div className="overallRightSection">
          <section className="sectionForGameMode">
            <section className="toptitlecontainer soloblue">
              <h1 className="overallheaderh1">SOLOS</h1>
            </section>
            <section className="titlestats" style={{ display: "flex" }}>
              <div className="sectionforstatvalues" id="soloWinAmount"></div>
              <div
                className="sectionforstatvalues"
                id="soloWinPercentage"
              ></div>
              <div className="sectionforstatvalues" id="soloKillAmount"></div>
              <div className="sectionforstatvalues" id="soloDeathAmount"></div>
              <div className="sectionforstatvalues" id="soloRatio"></div>
            </section>

            <section className="titlestats" style={{ display: "flex" }}>
              <div className="sectionforstatvalues sectionforstattitles bluecolor">
                WINS
              </div>
              <div className="sectionforstatvalues sectionforstattitles bluecolor">
                WIN %
              </div>
              <div className="sectionforstatvalues sectionforstattitles bluecolor">
                {" "}
                KILLS
              </div>
              <div className="sectionforstatvalues sectionforstattitles bluecolor deathpositioner">
                DEATHS{" "}
              </div>
              <div className="sectionforstatvalues sectionforstattitles bluecolor kdpositioner">
                K/D
              </div>
            </section>
          </section>
          <section className="sectionForGameMode">
            <section className="toptitlecontainer duoorange">
              <h1 className="overallheaderh1">DUOS</h1>
            </section>
            <section className="titlestats" style={{ display: "flex" }}>
              <div className="sectionforstatvalues" id="duoWinAmount"></div>
              <div className="sectionforstatvalues" id="duoWinPercentage"></div>
              <div className="sectionforstatvalues" id="duoKillAmount"></div>
              <div className="sectionforstatvalues" id="duoDeathAmount"></div>
              <div className="sectionforstatvalues" id="duoRatio"></div>
            </section>

            <section className="titlestats" style={{ display: "flex" }}>
              <div className="sectionforstatvalues sectionforstattitles orangecolor">
                WINS
              </div>
              <div className="sectionforstatvalues sectionforstattitles orangecolor">
                WIN %
              </div>
              <div className="sectionforstatvalues sectionforstattitles orangecolor">
                {" "}
                KILLS
              </div>
              <div className="sectionforstatvalues sectionforstattitles orangecolor deathpositioner">
                DEATHS{" "}
              </div>
              <div className="sectionforstatvalues sectionforstattitles orangecolor kdpositioner">
                K/D
              </div>
            </section>
          </section>
          <section className="sectionForGameMode">
            <section className="toptitlecontainer squadpurple">
              <h1 className="overallheaderh1">SQUADS</h1>
            </section>
            <section className="titlestats" style={{ display: "flex" }}>
              <div className="sectionforstatvalues" id="squadWinAmount"></div>
              <div
                className="sectionforstatvalues"
                id="squadWinPercentage"
              ></div>
              <div className="sectionforstatvalues" id="squadKillAmount"></div>
              <div className="sectionforstatvalues" id="squadDeathAmount"></div>
              <div className="sectionforstatvalues" id="squadRatio"></div>
            </section>

            <section className="titlestats" style={{ display: "flex" }}>
              <div className="sectionforstatvalues sectionforstattitles purplecolor">
                WINS
              </div>
              <div className="sectionforstatvalues sectionforstattitles purplecolor">
                WIN %
              </div>
              <div className="sectionforstatvalues sectionforstattitles purplecolor">
                {" "}
                KILLS
              </div>
              <div className="sectionforstatvalues sectionforstattitles purplecolor deathpositioner">
                DEATHS{" "}
              </div>
              <div className="sectionforstatvalues sectionforstattitles purplecolor kdpositioner">
                K/D
              </div>
            </section>
          </section>
        </div>
      </section>
      <div
        className="removestat"
        style={{ display: "none" }}
        onClick={closestatmenu}
      ></div>
    </div>
  );
}
