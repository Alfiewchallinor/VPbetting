import React, { useRef } from "react";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import $ from "jquery";
var firestore = firebase.firestore();

export default function UsernameSelect() {
  const history = useHistory();
  const usernameRef = useRef();


  
  async function handleSubmit(e) {
    e.preventDefault();
      const value = document.getElementById("chooseusernamerefit").value
      const firestorelocation = firestore.doc("displayNames/" + value);
      firestorelocation.get().then((doc) => {
        if(doc.exists) {
          return $(".userNameAlreadyChosenFirebaseSelect").html("Username is already taken")
    
          
        } else {
          const newlocation = firestore.doc("displayNames/" + value)
          newlocation.get().then((doc)=> {
            newlocation.set({
              setUserName: true
            })
          })
        
       
    firebase
      .auth()
      .currentUser.updateProfile({
        displayName: value
      })
      .then(function () {
        history.push("/");
      });
    }
    }) 
  }

  const pickMyUsername = (e) => {
    e.preventDefault();
    $(".imFeelingLuckyOutput").css("display", "block");
    $(".confirmYourUsername").css("margin-top", "135px");
    $(".changeableTextFeelingLucky").text("Generate a different Username");
    $(".funfact").css("display", "block");
    var pickUsername = [
      "SuperSweetApple",
      "Mr Happy",
      "Lovely Lasagne",
      "cheeseSausage",
      "golfball",
      "fruityman",
      "tennisplayer",
      "chilled cucumber",
      "bossman",
      "fortnitegrinder",
      "valorantfan",
      "sterlingfan",
      "smartcarrot",
      "ultraSneekyStrawberry",
      "megaSmartBroccoli",
      "super-cool cheeseMan",
      "Mr Monsier ",
      "quantumBuilds",
      "MrGod",
      "MbappéFan",
      "FutureRonaldo",
      "FutureMessi",
      "ForTheRepublic",
      "SushiLover",
      "bossOfTennis",
      "UltimateGamer",
      "ProGamer",
      "Hamburgerman",
      "TeddyLover",
      "Coolest carrot",
      "Mr Bubbly",
      "Mrs Bubbly",
      "CricketPlayer",
      "lamborghiniLover",
      "Mr Silly",
      "Mr impatient",
      "Determind dart",
      "KarenHater",
      "SausageLover",
      "CatLover",
      "PugLover ",
      "StrawberryEater",
      "Ultimate carrotcake",
      "ChocolateLover",
      "Haribo eater",
      "Sweet Minion",
      "Appropiate Potato",
      "Chilled Carrot",
      "RonaldoFan",
      "MessiFan",
      "Mr silly",
      "Mr silly",
      "Mr silly",
      "FastestHuman",
      "GreatestPlayer",
      "unhumanHuman",
      "Football Lover ",
      "OpenDoor",
      "ComputerGeek",
      "RandomHuman",
      "Aspire",
      "Smart bean",
      "Beetroot hater ",
      "Sam Sung",
      "Chris P. bacon",
      "Chris P. bacon",
      "Chris P. bacon",
      "Chris P. bacon",
      "Chris P. bacon",
      "Dr Smart",
      "Dr silly",
      "ILoveCheese",
      "Angry Avocado",
      "Proven CheeseMan",
      "Sorted Sausage",
      "Silly sausage",
      "JamLover",
      "PringleLover",
      "Amazed Avocado",
      "Brilliant broccoli",
      "Brilliant Beetroot",
      "Bored strawberry",
      "MegaNice melon",
      "Olive hater",
      "Brilliant Blueberry",
      "Cheery Cherry",
      "Cheery Cherry",
      "Cheery Cherry",
      "OrangeMan",
      "Waterd Watermelon",
      "Beatiful Bean",
      "BreadStick eater",
      "Potato pessimist",
      "Cheese stick",
      "PianoPlayer",
      "IronMan",
      "SweetSausage",
      "Apple lover",
      "Annoying Apple",
      "Clever Cucumber",
      "courageous Cucumber",
    ];
    var number = Math.floor(Math.random() * 10000);
    var pickUsername =
      pickUsername[Math.floor(Math.random() * pickUsername.length)];
    $(".theRandomUsernameDisplay").text(pickUsername);
    $(".theRandomNumberDisplay").text(number);
  };
  //Placeholder
  var pickUsername = [
    "SuperSweetApple",
    "Mr Happy",
    "Lovely Lasagne",
    "cheeseSausage",
    "golfball",
    "fruityman",
    "tennisplayer",
    "chilled cucumber",
    "bossman",
    "fortnitegrinder",
    "valorantfan",
    "sterlingfan",
    "smartcarrot",
    "ultraSneekyStrawberry",
    "megaSmartBroccoli",
    "super-cool cheeseMan",
    "Mr Monsier ",
    "quantumBuilds",
    "MrGod",
    "MbappéFan",
    "FutureRonaldo",
    "FutureMessi",
    "ForTheRepublic",
    "SushiLover",
    "bossOfTennis",
    "UltimateGamer",
    "ProGamer",
    "Hamburgerman",
    "TeddyLover",
    "Coolest carrot",
    "Mr Bubbly",
    "Mrs Bubbly",
    "CricketPlayer",
    "lamborghiniLover",
    "Mr Silly",
    "Mr impatient",
    "Determind dart",
    "KarenHater",
    "SausageLover",
    "CatLover",
    "PugLover ",
    "StrawberryEater",
    "Ultimate carrotcake",
    "ChocolateLover",
    "Haribo eater",
    "Sweet Minion",
    "Appropiate Potato",
    "Chilled Carrot",
    "RonaldoFan",
    "MessiFan",
    "Mr silly",
    "Mr silly",
    "Mr silly",
    "FastestHuman",
    "GreatestPlayer",
    "unhumanHuman",
    "Football Lover ",
    "OpenDoor",
    "ComputerGeek",
    "RandomHuman",
    "Aspire",
    "Smart bean",
    "Beetroot hater ",
    "Sam Sung",
    "Chris P. bacon",
    "Chris P. bacon",
    "Chris P. bacon",
    "Chris P. bacon",
    "Chris P. bacon",
    "Dr Smart",
    "Dr silly",
    "ILoveCheese",
    "Angry Avocado",
    "Proven CheeseMan",
    "Sorted Sausage",
    "Silly sausage",
    "JamLover",
    "PringleLover",
    "Amazed Avocado",
    "Brilliant broccoli",
    "Brilliant Beetroot",
    "Bored strawberry",
    "MegaNice melon",
    "Olive hater",
    "Brilliant Blueberry",
    "Cheery Cherry",
    "Cheery Cherry",
    "Cheery Cherry",
    "OrangeMan",
    "Waterd Watermelon",
    "Beatiful Bean",
    "BreadStick eater",
    "Potato pessimist",
    "Cheese stick",
    "PianoPlayer",
    "IronMan",
    "SweetSausage",
    "Apple lover",
    "Annoying Apple",
    "Clever Cucumber",
    "courageous Cucumber",
  ];
  var pickUsername =
    pickUsername[Math.floor(Math.random() * pickUsername.length)];
  return (
    <div>
      <div className="chooseUsernameContainer">
        <form onSubmit={handleSubmit}>
          <div id="email">
            <label id="chooseUsername">CHOOSE YOUR USERNAME</label>
            <input
              className="theinput chooseusernamerefit"
              ref={usernameRef}
              placeholder={pickUsername}
              id="chooseusernamerefit"
            />
          </div>
          <button className="imFeelingLucky" onClick={pickMyUsername}>
            <span className="changeableTextFeelingLucky">
              I'm feeling lucky
            </span>
          </button>
          <div className="imFeelingLuckyOutput" style={{ display: "none" }}>
            You could be called:{" "}
            <em>
              <span className="theRandomUsernameDisplay"></span>
              <span className="theRandomNumberDisplay"></span>
            </em>
          </div>
          <button type="submit" className="confirmYourUsername">
            Confirm username <br />
            (YOU CAN CHANGE THIS LATER)
          </button>
          <div className="userNameAlreadyChosenFirebaseSelect"></div>
        </form>
      </div>
      <div>
        <span className="funfact" style={{ display: "none" }}>
          COOL FACT: There are 1,000,000 different combinations of usernames
          that can be generated
        </span>
      </div>
    </div>
  );
}