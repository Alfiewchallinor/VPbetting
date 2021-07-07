import React from 'react'

export default function test1234() {
    fetch("https://fortniteapi.io/v1/events/window?windowId=S11_CC_Contenders_EU_Event1", {
    method: "GET",
    headers: {
      Authorization: process.env.REACT_APP_UPCOMMING_TOURNAMENT_KEY,
    },
  })
    .then((res) => res.json())
    .then(function (response) {
        const finalarray = response.session.results.length -1;
        console.log(JSON.stringify(response.session.results.length))
    })
    return (
        <div>            
        </div>
    )
}
