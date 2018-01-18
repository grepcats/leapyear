$(document).ready(function() {
  $("#leap").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("input#year-input").val());
    if (isNaN(userInput)) {
      alert("you're such an idiot! don't ever bring that non-numerical crap around here again");
    } else if (userInput % 4 !== 0){
      alert("get out of here with that non-leap-year garbage");
    } else if (userInput % 400 === 0) {
      alert("this is a leap year, good job buddy");
    } else if (userInput % 100 === 0) {
      alert("this is not a leap year, dummy stupid head");
    } else if (userInput % 4 === 0) {
      alert("this is a leap year, maybe even in the future");
    }
  });

});
