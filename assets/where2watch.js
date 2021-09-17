$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
    let searchText = $('#searchText').val();
    getMovies(searchText);
    e.preventDefault();
});
});

var axios = require("axios").default;

var options = {
  method: 'POST',
  url: 'https://gowatch.p.rapidapi.com/lookup/title/imdb_id',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'x-rapidapi-host': 'gowatch.p.rapidapi.com',
    'x-rapidapi-key': 'a560eed208mshfe3e8b958f39c50p17b66cjsn4a55ced8d8c5'
  },
  data: {id: 'tt6751668', type: 'movie', country: 'us'}
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});