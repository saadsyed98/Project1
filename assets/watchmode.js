$(document).ready(() => {
    	console.log("we're active")
        $('#searchForm').on('submit', (e) => {
            let searchText = $('#searchText').val();
            getMovies(searchText);
            e.preventDefault();
        }); 
    });

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://watchmode.p.rapidapi.com/sources/?types=sub%2Cfree&regions=US%2CCA",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "watchmode.p.rapidapi.com",
            "x-rapidapi-key": "a560eed208mshfe3e8b958f39c50p17b66cjsn4a55ced8d8c5"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });