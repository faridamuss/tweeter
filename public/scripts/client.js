$(document).ready(function() {

const data = [
  {
    "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

const renderTweets = function(tweets) {
    tweets.forEach((tweet) => {
      const tweetNode = createTweetElement(tweet);
      $('#tweets-container').prepend(tweetNode);
            // loops through tweets
            // calls createTweetElement for each tweet
            // takes return value and appends it to the tweets container
    });
}
  
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
renderTweets(data);

});