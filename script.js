var rndValue = function() {
  var n = Math.floor((Math.random() * 2) + 1);
  var number = document.getElementById("number");
  var history = document.getElementById("history");
  number.innerHTML = n;
  history.innerHTML = history.innerHTML + "<li>" + n + "</li>"
}

var clearHistory = function() {
  var history = document.getElementById("history");
  history.innerHTML = "";
}
