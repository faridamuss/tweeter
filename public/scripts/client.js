/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//implement a createTweetElement function that takes in a tweet object and returns an HTML
$(document).ready(function() {
function createTweetElement(tweetData) {
  const $tweet = $(`<article class="tweet">
  <header class="th-header">
    <div class="name-left">
      <img class="th-header img" src=${tweetData.user.avatars} >
      <h3>${tweetData.user.name}</h3>
    </div>
    <div id='userID'>
       <p>${tweetData.user.handle}</p>
    </div>
  </header> 
<div class="display-tweet">
  <p>${tweetData.content.text} </p>
</div> 
<footer class="tweet-footer">
<span class="time-passed">${timeago.format(new Date())}</span> 
  <div class="icons">
    <i class="fas fa-flag"></i>
    <i class="fas fa-retweet"></i>
    <i class="fas fa-heart"></i>
  </div>
</footer>
</article>`
 )
 return $tweet;
}


// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log("Tweet is here:", $tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});