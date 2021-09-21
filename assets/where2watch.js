$(document).ready(() => {
//	console.log("we're active")
	$('#searchForm').on('submit', (e) => {
		let searchText = $('#searchText').val();
		getMovies(searchText);
		e.preventDefault();
	}); 
});

function getMovies(searchText) {
  axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=2fdaf280')
	
	.then(response => {
		console.log(response);
		let movies = response.data.Search;
		let output = '';
		$.each(movies, (index, movie) => {
			output += `
			<div class = "col-md-3">
			<div class = "well text-center">
			<img src = "${movie.Poster}" 
			<h5> ${movie.Title}</h5>
			<a onclick = "movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
			`;
		});
		
		$('#movies').html(output);
	})
	.catch(err => {
		console.error(err);
	});

















/*// Utelly API =========================>
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
// ==============================>*/}