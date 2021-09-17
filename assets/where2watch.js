var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/auto-complete',
  params: {q: 'game of thr'},
  headers: {
    'x-rapidapi-host': 'imdb8.p.rapidapi.com',
    'x-rapidapi-key': 'a560eed208mshfe3e8b958f39c50p17b66cjsn4a55ced8d8c5'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});