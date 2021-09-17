
// goWatch fetch
fetch("https://gowatch.p.rapidapi.com/lookup/title/imdb_id", {
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"x-rapidapi-host": "gowatch.p.rapidapi.com",
		"x-rapidapi-key": "d467e557fbmsha81ae590ccc3b5cp1b37e8jsn67b4a6f59821"
	},
	"body": {
		"id": "tt6751668",
		"type": "movie",
		"country": "us"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});