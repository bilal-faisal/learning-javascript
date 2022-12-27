var movieArray = [
    {
        title : "The Prestige",
        rating : 8.8,
        hasWatched : true
    },
    {
        title : "Frozen 2",
        rating : 6.8,
        hasWatched : false
    },
    {
        title : "Now You See Me",
        rating : 8.3,
        hasWatched : true
    }
];

movieArray.forEach( function(movie){

    if(movie.hasWatched===true){
        var value = "watched";
    }else{
        var value = "not seen";
    }
    console.log("You have " + value + " \"" + movie.title + "\" - " + movie.rating + " IMDB.");

});