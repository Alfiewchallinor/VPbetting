import React, { Component } from "react";
import $ from "jquery"

export default class Stats extends Component {
    constructor(props) {
        super(props)
        this.state = {
            epicName: '',
            JSONepicData: [],
            AccountInfo: [],
            FetchedAccountData: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.callAccountData = this.callAccountData.bind(this);
        this.displayCard = this.displayCard.bind(this);
        this.removeStats = this.removeStats.bind(this);

    };
    handleChange(e) {
        this.setState({epicName: e.target.value})
    }
    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_FORTNITE_UID_URL + this.state.epicName, {
            method: "GET",
            headers: {
              Authorization: process.env.REACT_APP_FORTNITE_UID_KEY,
            },
          })
          
          .then((res) => res.json())
          .then(json => {
              this.setState({
                  JSONepicData: json
              })
              this.callAccountData()
          })
    }
    callAccountData() {
        const epicId = this.state.JSONepicData.account_id
        fetch(process.env.REACT_APP_FORTNITE_STATS_URL + epicId, {
            method: "GET",
            headers: {
              "x-api-key": process.env.REACT_APP_FORTNITE_STATS_KEY,
            },
          }).then((res) => res.json())
          .then(json => {
              this.setState({
                AccountInfo: json,
                FetchedAccountData: true
            })
          });
          this.displayCard();
    }
    displayCard() {
        $(".playerstatssection").css("display", "flex");
        $(".removestat").css("display", "block");
    }
    removeStats() {
        this.setState({
            FetchedAccountData: false
        })
    }

  render() {
      if(this.state.FetchedAccountData === false) {
          return(
            <section className="findaPlayer">
            <form className="formforsearch" onSubmit={this.handleSubmit}>
              <input
                className="searchforPlayer"
                placeholder="FIND PLAYER"
                onChange={this.handleChange}
                value={this.state.epicName}
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
          )
      } if(this.state.FetchedAccountData === true) {
    const AccountInfo = this.state.AccountInfo.data
    return (
        <div>
      <section className="findaPlayer">
        <form className="formforsearch" onSubmit={this.handleSubmit}>
          <input
            className="searchforPlayer"
            placeholder="FIND PLAYER"
            onChange={this.handleChange}
            value={this.state.epicName}
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
      <section
        className="playerstatssection"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/fortniteimage.jpg"
          })`,
        }}
      >
        <section className="outsideBorder"></section>
        <div className="overallbox">
          <div className="toptitlecontainer">
            <h1 className="overallheaderh1">OVERALL STATS</h1>
          </div>
          <h1 className="accountName" id="accountName">
            {AccountInfo.account.name}
          </h1>
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
        style={{background: "rgba(0, 0, 0, 0.1)"}}
        onClick={this.removeStats}
      ></div>
      </div>
    );
      }
  }
}
