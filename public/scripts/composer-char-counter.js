$(document).ready(function() {
 
  $('#tweet-text').on('keyup', function(e) {
    console.log($("#tweet-text").val().length)
    console.log(this); 
  })
 
 
});