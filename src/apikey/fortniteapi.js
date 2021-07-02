const apiUrl = process.env.REACT_APP_FORTNITE_API_URL;
const apikey = process.env.REACT_APP_FORTNITE_API_KEY


function GetApiKeys() {
    
    
    fetch("https://fortniteapi.io/v1/events/cumulative?eventId=epicgames_S14_FNCS_Qualifier1_EU_PC", {
	"method": "GET",
	"Authorization": {
		"headers": "5544e063-9d84a649-376d0410-9d7bf187"
	}
})






.then(response => {
	console.log(response);
})
.catch(err => {
	console.error("ERROR ERROR ERROR");
});}
export default GetApiKeys