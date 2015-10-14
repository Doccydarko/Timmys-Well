var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

window.addEventListener('keydown', function(evt) { onKeyDown(evt);}, false);
window.addEventListener('keyup', function(evt) { onKeyUp(evt);}, false);