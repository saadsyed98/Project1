 $(document).ready(() => {
//	console.log("we're active")
	$('#searchForm').on('submit', (e) => {
		let searchText = $('#searchText').val();
		getMovies(searchText);
		e.preventDefault();
	}); 
});

function getMovies(searchText) {
  axios.get('https://imdb8.p.rapidapi.com/auto-complete?s='+ searchText+'&apikey') 
	.then(response => {
		console.log(response);
		let movies = response.data.Search;
		let output = '';
		$.each(movies, (movieSearch, movie) => {
			output += `
			<div class = "col-md-3">
			<div class = "well text-center">
			<img src = "${movie.Poster}"> 
			<h3> ${movie.Title}</h3>
			<a onclick = "movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">
			<br> Click Here for Details </a>
			`;
		});
		
		$('#movies').html(output);
	})
	.catch(err => {
		console.error(err);
	});
}	

function movieSelected(id) {
	sessionStorage.setItem("movieId", id);
	window.location= 'movie.html';
	return false;
}	

function getMovie() {
	let movieId = sessionStorage.getItem('movieId');

	axios.get('https://imdb8.p.rapidapi.com/auto-completei='+ movieId+'&apikey') 
	.then(response => {
		console.log(response);
		let movie = response.data;
		let output =`
			<div class="row">
			<div class="col-md-4">
				<img src="${movie.Poster}" class="thumbnail">
			</div>
			<div class="twelve columns">
				<h2>${movie.Title}</h2>
				<ul class="list-group">
				<li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
				<li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
				<li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
				<li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
				<li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
				<li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
				<li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
			</div
		</div
		<div class="row'>
			<div class="well">
			<h3>Plot</h3>
			${movie.Plot}
			<hr>
			<a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
			<br>
			<a href="movieSearch.html" class="btn btn-default">Go Back To Search</a>
			
		`;
		$('#movie').html(output);
	})
	.catch(err => {
		console.error(err);
	});

}
