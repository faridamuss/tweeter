function createTweetElement(tweetData) {
  const $tweet = $(`<article class="tweet"><header>
  <div class="name-left"> 
  <img scr="${tweetData.user.ava}



  </header> class='th-header'>");
  const $headerD1 = $("<div class='name-left'>");
   
  const $avatar = $("<img>").attr("src", tweetData.user.avatars);
  const $name = $("<h3>").text(tweetData.user.name);

  $headerD1.append($avatar, $name);

  const $headerD2 = $("<div class='userID'>");
  const $handle = $("<p>").text(tweetData.user.handle);

  $headerD2.append($handle);

  //append the contents of header
  $header.append($headerD1, $headerD2);

  //tweet content
  const $contentContainer = $("<div class='display-tweet'>");

  const $contentText = $("<p>").text(tweetData.content.text);
  
  //append tweet text to container
  $contentContainer.append($contentText);

  //tweet footer
  const $footer = $("<footer>").text(tweetData.created_at);
  
  //tweet footer children
  const $timeStamp = $("<p class='th-header'>");
  const $footerD2 = $("<div class='icons'>");
  const $flag = $("<i class='far fa-flag'>");
  const $retweet = $("<i class='fas fa-retweet'>");
  const $heart = $("<i class='far fa-heart'>");
  $footerD2.append($flag, $retweet, $heart);
  
  //append footer children to footer
  $footer.append($timeStamp, $footerD2);

  //add all of the children to the tweet div
  $tweet.append($header, $contentContainer, $footer);
  return $tweet;
}
