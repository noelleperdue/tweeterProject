$(document).on("ready", function() {
  var textarea = $('textarea.text')
  textarea.on('keyup', function (ev) {
    var textLength = textarea.val().length
    var max = 140;
    $('span.counter').text(max - textLength);

    if (textLength > max) {
      $('span.counter').css("color", "red");
      alert("Slow down! That's too many characters!")
    } else {
      $('span.counter').css("color", "black");
    }
  });
});