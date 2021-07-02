import React, { useRef, useState } from "react";
import SportsHeader from "../../master/sportsheader";
import $ from "jquery";

export default function Fortnite() {
  const usernameRef = useRef();
  function clickedsearch(e) {
    e.preventDefault();

    fetch(
      "https://fortniteapi.io/v1/lookup?username=" + usernameRef.current.value,
      {
        method: "GET",
        headers: {
          Authorization: "5544e063-9d84a649-376d0410-9d7bf187",
        },
      }
    )
      .then((res) => res.json())

      .then(function (response) {
        const fnaccountuidwith = JSON.stringify(response.account_id);
        const fnaccountuid = fnaccountuidwith.replace('"', "");
        const finalizeduidfortnite = fnaccountuid.replace('"', "");
        fetch(
          "https://fortnite-api.com/v1/stats/br/v2/" + finalizeduidfortnite,
          {
            method: "GET",
            headers: {
              "x-api-key": "8952ce53105b326a9c57b83d190a604b8360507c",
            },
          }
        )
          .then((res) => res.json())
          .then(function (response) {
            $(".playerstatssection").css("display", "flex");
            $(".removestat").css("display", "block");
            const accountnamewith = JSON.stringify(response.data.account.name);
            const finalizedaccountname = accountnamewith.replace(/\"/g, "");
            document.getElementById("accountName").innerHTML =
              finalizedaccountname;

            const overallwinswith = JSON.stringify(
              response.data.stats.all.overall.wins
            );
            const finalizedoverallwins = overallwinswith.replace(/\"/g, "");
            document.getElementById("overallwins").innerHTML =
              finalizedoverallwins;

            const overallwinpercentagewith = JSON.stringify(
              response.data.stats.all.overall.winRate
            ) + "%";
            const finalizedoverallwinpercentage =
              overallwinpercentagewith.replace(/\"/g, "");
            document.getElementById("overallwinpercentage").innerHTML =
              finalizedoverallwinpercentage;

            const overallkdswith = JSON.stringify(
              response.data.stats.all.overall.kd
            ).replace(/\"/g, "");
            document.getElementById("overallkd").innerHTML = overallkdswith;

            const overallkdmswith = JSON.stringify(
              response.data.stats.all.overall.killsPerMin
            ).replace(/\"/g, "");
            document.getElementById("overallkpm").innerHTML = overallkdmswith;

            const overallmatchnumber = JSON.stringify(
              response.data.stats.all.overall.matches
            ).replace(/\"/g, "");
            document.getElementById("overallmatchnumber").innerHTML =
              overallmatchnumber;

            const overallkillnumber = JSON.stringify(
              response.data.stats.all.overall.kills
            ).replace(/\"/g, "");
            document.getElementById("overallkillnumber").innerHTML =
              overallkillnumber;

            const overalldeathnumber = JSON.stringify(
              response.data.stats.all.overall.deaths
            ).replace(/\"/g, "");
            document.getElementById("overalldeathnumber").innerHTML =
              overalldeathnumber;
            // SOLO DATA
            const soloWinAmount = JSON.stringify(
              response.data.stats.all.solo.wins
            ).replace(/\"/g, "");
            document.getElementById("soloWinAmount").innerHTML = soloWinAmount;

            const soloWinPercentage = JSON.stringify(
              response.data.stats.all.solo.winRate
            ).replace(/\"/g, "");
            document.getElementById("soloWinPercentage").innerHTML =
              soloWinPercentage  + "%";

            const soloKillAmount = JSON.stringify(
              response.data.stats.all.solo.kills
            ).replace(/\"/g, "");
            document.getElementById("soloKillAmount").innerHTML =
              soloKillAmount;

            const soloDeathAmount = JSON.stringify(
              response.data.stats.all.solo.deaths
            ).replace(/\"/g, "");
            document.getElementById("soloDeathAmount").innerHTML =
              soloDeathAmount;

            const soloRatio = JSON.stringify(
              response.data.stats.all.solo.kd
            ).replace(/\"/g, "");
            document.getElementById("soloRatio").innerHTML = soloRatio;
            //DUO DATA
            const duoWinAmount = JSON.stringify(
              response.data.stats.all.duo.wins
            ).replace(/\"/g, "");
            document.getElementById("duoWinAmount").innerHTML = duoWinAmount;

            const duoWinPercentage = JSON.stringify(
              response.data.stats.all.duo.winRate
            ).replace(/\"/g, "");
            document.getElementById("duoWinPercentage").innerHTML =
              duoWinPercentage + "%";

            const duoKillAmount = JSON.stringify(
              response.data.stats.all.duo.kills
            ).replace(/\"/g, "");
            document.getElementById("duoKillAmount").innerHTML = duoKillAmount;

            const duoDeathAmount = JSON.stringify(
              response.data.stats.all.duo.deaths
            ).replace(/\"/g, "");
            document.getElementById("duoDeathAmount").innerHTML =
              duoDeathAmount;

            const duoRatio = JSON.stringify(
              response.data.stats.all.duo.kd
            ).replace(/\"/g, "");
            document.getElementById("duoRatio").innerHTML = duoRatio;
            //SQUAD DATA
            const squadWinAmount = JSON.stringify(
              response.data.stats.all.squad.wins
            ).replace(/\"/g, "");
            document.getElementById("squadWinAmount").innerHTML =
              squadWinAmount;

            const squadWinPercentage = JSON.stringify(
              response.data.stats.all.squad.winRate
            ).replace(/\"/g, "");
            document.getElementById("squadWinPercentage").innerHTML =
              squadWinPercentage + "%";

            const squadKillAmount = JSON.stringify(
              response.data.stats.all.squad.kills
            ).replace(/\"/g, "");
            document.getElementById("squadKillAmount").innerHTML =
              squadKillAmount;

            const squadDeathAmount = JSON.stringify(
              response.data.stats.all.squad.deaths
            ).replace(/\"/g, "");
            document.getElementById("squadDeathAmount").innerHTML =
              squadDeathAmount;

            const squadRatio = JSON.stringify(
              response.data.stats.all.squad.kd
            ).replace(/\"/g, "");
            document.getElementById("squadRatio").innerHTML = squadRatio;
          });
      });
  }
  function closestatmenu() {
    $(".playerstatssection").css("display", "none");
    $(".removestat").css("display", "none");
  }
  return (
    <div>
      <SportsHeader />
      <div className="stats" id="stats"></div>
      <section className="upcommingtounramentssection">
        <div className="upcommingtounramentdiv">
          <div className="upcommingTournament">
            <p className="upcommingtournamenttext"></p>{" "}
          </div>
          <div className="upcommingTournament">
            <p className="upcommingtournamenttext"></p>{" "}
          </div>
          <div className="upcommingTournament">
            <p className="upcommingtournamenttext"></p>{" "}
          </div>
          <div className="upcommingTournament">
            <p className="upcommingtournamenttext"></p>{" "}
          </div>
        </div>
      </section>
      <section className="toprankingplayers">
        <div className="toprankingcontainer">
          <h2 className="toprankingtitle"> TOP RANKED PLAYERS</h2>
        </div>

        <button className="regionbuttons">Europe</button>
        <button className="regionbuttons NaButton">North America</button>
        <ol>
          <div className="rankingorderd">
            <p className="numberonside">1</p>
            <p className="playerName"></p>
          </div>
          <div className="rankingorderd">
            <p className="numberonside">2</p>
            <p className="playerName"></p>
          </div>
          <div className="rankingorderd">
            <p className="numberonside">3</p>
            <p className="playerName"></p>
          </div>
          <div className="rankingorderd">
            <p className="numberonside">4</p>
            <p className="playerName"></p>
          </div>
          <div className="rankingorderd">
            <p className="numberonside">5</p>
            <p className="playerName"></p>
          </div>
          <div className="rankingorderd">
            <p className="numberonside">6</p>
            <p className="playerName"></p>
          </div>
          <div className="rankingorderd">
            <p className="numberonside">7</p>
            <p className="playerName"></p>
          </div>
          <div className="rankingorderd">
            <p className="numberonside">8</p>
            <p className="playerName"></p>
          </div>
          <div className="rankingorderd">
            <p className="numberonside">9</p>
            <p className="playerName"></p>
          </div>
          <div className="rankingorderd">
            <p className="numberonside">10</p>
            <p className="playerName"></p>
          </div>
        </ol>
      </section>

      <section className="findaPlayer">
        <form className="formforsearch" onSubmit={clickedsearch}>
          <input
            className="searchforPlayer"
            placeholder="FIND PLAYER"
            ref={usernameRef}
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
        <section className="toOutrightWin">
          <input className="whotooutrightwin" style={{ display: "none" }} />
          <div className="toOutrightWin"></div>
        </section>
        <section className="toOutrightPlace">
          <input className="whoToOutrightPlace" style={{ display: "none" }} />
          <div className="toOutrightWin"></div>
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
