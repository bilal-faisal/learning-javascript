var h1 = document.querySelector("h1");
var isBluee = false;

setInterval(function(){   //MANIPULATE
 if (isBluee) {
   h1.style.color = "#3498db";
 } else {
   h1.style.color = "white";
 }
 isBluee = !isBluee;
}, 1000);

var body = document.querySelector("body"); //SELECT
var isBlue = false;

setInterval(function(){   //MANIPULATE
 if (isBlue) {
   body.style.background = "white";
 } else {
   body.style.background = "#3498db";
 }
 isBlue = !isBlue;
}, 1000);