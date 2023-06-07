let conter = document.querySelector(".counter");
let input = document.querySelector("input");
let maxlenght = input.getAttribute("maxlength");
console.log(maxlenght);
function onkeyhandler() {
  conter.innerHTML = maxlenght - input.value.length;
  console.log("text");
}
input.addEventListener("keyup", onkeyhandler);
