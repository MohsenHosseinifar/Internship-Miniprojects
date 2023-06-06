let textbox = document.querySelector(".textbox");
let lbl = document.querySelector(".lbl");
textbox.addEventListener("click", function () {
  lbl.innerHTML = "left";
  console.log("left");
});
textbox.addEventListener("contextmenu", function () {
  lbl.innerHTML = "right";
  console.log("right");
});
