let input_s = document.getElementById("inputs");
let resultspan1 = document.querySelector(".result1");
let resultspan2 = document.querySelector(".result2");
let child = document.querySelector(".bottem");
let resultspan3 = document.querySelector(".result3");

child.onkeydown = function () {
  child.style.display = "block";
};
document.body.onkeydown = function (event) {
  event.preventDefault();
  child.style.display = "block";
  resultspan1.innerHTML = "event.keyCode" + event.keyCode;
  resultspan2.innerHTML = "event.key" + event.key;
  resultspan3.innerHTML = "event.location" + event.location;
};
