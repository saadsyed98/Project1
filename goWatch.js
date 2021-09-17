// fetching the user's input front the search box
var title = $(".search-field").val()
$(document).ready(function() {
    $(".search-btn").click(function(){
        title;
    });
});

fetch("https://gowatch.p.rapidapi.com/lookup/title/tmdb_id?id=496243&type=movie&country=us" + title, {
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"x-rapidapi-host": "gowatch.p.rapidapi.com",
		"x-rapidapi-key": "d467e557fbmsha81ae590ccc3b5cp1b37e8jsn67b4a6f59821"
	},
	"body": {
		"id": "496243",
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