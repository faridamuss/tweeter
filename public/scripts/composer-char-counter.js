$(document).ready(function() {
  $('textarea').keyup(function () {
    let maxLength = 140;
      let textLength = maxLength - $(this).val().length;
      let $output = $('output')
      $output.text(textLength);
      if (textLength < 0) {
          $output.addClass('invalid')
      } else {
          $output.removeClass('invalid')
      }
  });
});