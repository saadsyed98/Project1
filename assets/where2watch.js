// IMDB API ===============>
fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "a560eed208mshfe3e8b958f39c50p17b66cjsn4a55ced8d8c5"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
// =========================>