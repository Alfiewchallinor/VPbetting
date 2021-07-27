const functions = require("firebase-functions");
const express = require("express");
const request = require("request");
const app = express();

app.get("/getFortniteTournamentDataEU", (req, res) => {
  request("https://fortniteapi.io/v1/events/list?lang=en&region=EU", {headers: {
    Authorization: "5544e063-9d84a649-376d0410-9d7bf187",
  }}, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.set("Cache-Control", "public, max-age=300, s-maxage=600");
      res.send(body);
    }
  });
});

app.get("/getFortniteTournamentDataNA", (req, res) => {
  request("https://fortniteapi.io/v1/events/list?lang=en&region=NAE", {headers: {
    Authorization: "5544e063-9d84a649-376d0410-9d7bf187",
  }}, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.set("Cache-Control", "public, max-age=300, s-maxage=600");
      res.send(body);
    }
  });
});


app.get("/getValorantTournamentData", (req, res)=> {
  request("https://api.pandascore.co/valorant/tournaments/upcoming?token=PmaEjpFPkBScWgYPkHnHzNF5hg98itu6h1OcooMZv7gxlWjEknM", function(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.set("Cache-Control", "public, max-age=300, s-maxage=600");
      res.send(body);
    }
  });
});

app.get("/getValorantPastTournamentData", (req, res)=> {
  request("https://api.pandascore.co/valorant/matches/past?token=PmaEjpFPkBScWgYPkHnHzNF5hg98itu6h1OcooMZv7gxlWjEknM&page[size]=100", function(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.set("Cache-Control", "public, max-age=300, s-maxage=600");
      res.send(body);
    }
  });
});


app.get("/getLeagueTournamentData", (req, res)=> {
  request("https://api.pandascore.co/lol/tournaments/upcoming?token=PmaEjpFPkBScWgYPkHnHzNF5hg98itu6h1OcooMZv7gxlWjEknM", function(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.set("Cache-Control", "public, max-age=300, s-maxage=600");
      res.send(body);
    }
  });
});
app.get("/getLeagueMatchDataPast", (req, res) => {
  request("https://api.pandascore.co/lol/matches/past?token=PmaEjpFPkBScWgYPkHnHzNF5hg98itu6h1OcooMZv7gxlWjEknM&page[size]=100", function(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.set("Cache-Control", "public, max-age=1500, s-maxage=5000");
      res.send(body);
    }
  });
});

app.get("/getOverallLeagueTeamsData", (req, res) => {
  request("https://teamsapi-league.herokuapp.com/teams", function(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.set("Cache-Control", "public, max-age=1000, s-max-age=5000");
      res.send(body);
    }
  });
});


exports.app = functions.https.onRequest(app);