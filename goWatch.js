// // fetching the user's input front the search box
// var title = $(".search-field").val()
// $(document).ready(function() {
//     $(".search-btn").click(function(){
//         title;
//     });
// });

// fetch("https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movies-by-title&title=" + title, {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
// 		"x-rapidapi-key": "d467e557fbmsha81ae590ccc3b5cp1b37e8jsn67b4a6f59821"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

// fetch("https://gowatch.p.rapidapi.com/lookup/title/imdb_id", {
// 	"method": "POST",
// 	"headers": {
// 		"content-type": "application/x-www-form-urlencoded",
// 		"x-rapidapi-host": "gowatch.p.rapidapi.com",
// 		"x-rapidapi-key": "d467e557fbmsha81ae590ccc3b5cp1b37e8jsn67b4a6f59821"
// 	},
// 	"body": {
// 		"id": "tt6751668",
// 		"type": "movie",
// 		"country": "us"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });




// Utelly API =========================>
fetch("https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup?source_id=tt3398228&source=imdb&country=us", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
		"x-rapidapi-key": "a560eed208mshfe3e8b958f39c50p17b66cjsn4a55ced8d8c5"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
// ========================>


// GoWATCH ========================>
fetch("https://gowatch.p.rapidapi.com/lookup/title/imdb_id", {
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"x-rapidapi-host": "gowatch.p.rapidapi.com",
		"x-rapidapi-key": "a560eed208mshfe3e8b958f39c50p17b66cjsn4a55ced8d8c5"
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
// ==============================>