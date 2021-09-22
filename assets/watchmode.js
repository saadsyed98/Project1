$(document).ready(() => {
    //	console.log("we're active")
        $('#searchForm').on('submit', (e) => {
            let searchText = $('#searchText').val();
            getMovies(searchText);
            e.preventDefault();
        }); 
    });

    function getSource() {
        fetch("https://watchmode.p.rapidapi.com/title/3173903/sources/", {
            "method": "GET",
            "headers": {
                "regions": "US",
                "x-rapidapi-host": "watchmode.p.rapidapi.com",
                "x-rapidapi-key": "a560eed208mshfe3e8b958f39c50p17b66cjsn4a55ced8d8c5"
            }
        })
        .then(response => {
            console.log(response);
            let source = response.data;
            let output = '';
            $.each(source, (index, source) => {
                output += `
                <div class = "col-md-3">
                <div class = "well text-center">
                <h5> ${source.name}</h5>
                <a onclick = "movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>		
                `;
            });
        
            $('#source').html(output);
        })
        .catch(err => {
            console.error(err);
        });
        
        }
        
