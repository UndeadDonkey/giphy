// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    var input = $("input").val();
  $.ajax({
        url: `https://api.giphy.com/v1/gifs/search?q=${input}&rating=pg&api_key=dc6zaTOxFJmzC`,
        method: "GET",
        success: function(response) {
            $("#content").html("");
            response.data.forEach(function(x){
                var picture = x.images.original.url;
                $("#content").append(`<img src = ${picture}>`);
            });
        }
  });
});

$("#random-button").click(function(){
    var randNum = 0;
    var input = $("input").val();
    $.ajax({
        url: `https://api.giphy.com/v1/gifs/search?q=${input}&rating=pg&api_key=dc6zaTOxFJmzC`,
        method: "GET",
        success: function(response) {
            randNum = Math.floor(Math.random() * response.data.length);
            $("#content").html("");
            $("#content").append(`<img src = ${response.data[randNum].images.original.url}>`);
        }
    });
});