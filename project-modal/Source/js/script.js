let btn = document.querySelector("button");
let modal = document.querySelector(".modal-parent");
let section = document.querySelector("section");
let x = document.querySelector(".X");
function clicedbtn() {
  modal.style.display = "block";
  section.style.filter = "blur(6px)";
  btn.blur();
}
function clikedx() {
  modal.style.display = "none";
  section.style.filter = "blur(0px)";
}
function keyuphandler(event) {
  if (event.keycode === 27) {
    modal.style.display = "block";
    section.style.filter = "blur(6px)";
  } else {
    modal.style.display = "none";
    section.style.filter = "blur(0px)";
  }
}
btn.addEventListener("click", clicedbtn);
x.addEventListener("click", clikedx);
document.body.addEventListener("keyup", keyuphandler);
