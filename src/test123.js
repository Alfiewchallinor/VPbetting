import React from "react";


export default class FetchRandomUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }
    
    componentDidMount() {
        fetch("https://fortnite-api.com/v1/stats/br/v2/{accountId}", {
	"method": "GET",
	"headers": {
		"apikey": "8952ce53105b326a9c57b83d190a604b8360507c",       
	}
})
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json,
            })
        });
    }
  render() {

    var { isLoaded, items } = this.state;

    if(!isLoaded) {
        return <div onClick={this.componentDidMount}>Loading...</div>
    }
    else {
        return (
            <div>data loaded</div>
        )
    } 
  }
}