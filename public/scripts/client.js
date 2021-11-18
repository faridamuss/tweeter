const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('#tweets-container').prepend($tweet);
  }
};
  
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
<span class="time-passed">${timeago.format(tweetData.created_at)}</span> 
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

const loadTweets = () => {
  $.ajax({
    url:"/tweets", 
    method:'GET', 
  })
  .then((datatweets) => {
    renderTweets(datatweets); 
  })
}

$(document).ready(function() {
  loadTweets()

  $("#post-tweet").submit(function(event){
    event.preventDefault();
    console.log("New tweeter!") 

    $.ajax("/tweets",{
      method:"POST",
      data: $("#post-tweet").serialize(),
    }) 
  });
});

