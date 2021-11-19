//responsible for character counter of tweet input form
$(document).ready(function() {
  $('#tweet-text').on('keyup', function(e) {
    //tracking character count input from user using keyup
    const currCharCount = $(this).val().length;
    //locating the counter element
    const counterElem = $(this).parent().children('.under-tweet-input').children('.counter');
    const remainingChars = 140 - currCharCount;
    //updating counter elem on DOM to reflect current changes in remaining characters
    counterElem.text(remainingChars);
    if (remainingChars < 0) {
      counterElem.css('color', 'mediumvioletred');
    } else {
      counterElem.css('color', '#545149');
    }
  });
});
