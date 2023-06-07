let $ = document;
let input = $.querySelector(".form-control");
let btndelete = $.getElementById("btn-delete");
let btnsave = $.getElementById("btn-save");
let colors = $.querySelectorAll(".color-box");
let list = $.getElementById("listed");
function clickedBtnSave() {
  newNote();
}
function clickedBTNdelet() {
  input.value = "";
  input.style.backgroundColor = "white";
}
function newNote() {
  if (input.value) {
    let division = $.createElement("div");
    division.className = ".card shadow-sm rounded";
    division.addEventListener("click", clickdivision);
    let ptext = $.createElement("p");
    ptext.className = ".card-text p-3";
    ptext.innerHTML = input.value;
    division.append(ptext);
    list.append(division);
    division.style.backgroundColor = input.style.backgroundColor;

    input.value = "";
    input.style.backgroundColor = "white";
  } else {
    alert("Enter a text");
  }
}
function clickdivision(event) {
  event.target.parentElement.remove();
}
function keydowninput(event) {
  if (event.keyCode == 13) {
    newNote();
  }
}
colors.forEach(function (bagcolor) {
  bagcolor.addEventListener("click", function (event) {
    let colorMain = event.target.style.backgroundColor;
    input.style.backgroundColor = colorMain;
    /* console.log(colorMain); */
  });
});

input.addEventListener("keydown", keydowninput);
btnsave.addEventListener("click", clickedBtnSave);
btndelete.addEventListener("click", clickedBTNdelet);
