$(document).ready(function() {
  $("#leap").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("input#year-input").val());

    if (userInput % 4 !== 0) {
      alert("get out of here with that non-leap-year garbage");
    } else if (userInput % 4 === 0) {
      alert("this could possibly be a leap year")
    }
  });

});
