let $ = document;
let inputElem = $.querySelector("input");
let addTodoForm = $.querySelector(".add");
let todoUlElem = $.querySelector(".todos");

function addnewtodo(newtodovalue) {
  let newtodoli = $.createElement("li");
  newtodoli.className =
    "list-group-item d-flex justify-content-between align-items-center";
  let newtodolistspan = $.createElement("span");
  newtodolistspan.innerHTML = newtodovalue;
  let newtodotrash = $.createElement("i");
  newtodotrash.className = "fa fa-trash-o delete";
  todoUlElem.append(newtodoli);
  newtodoli.append(newtodolistspan, newtodotrash);
  console.log(newtodoli);
  newtodotrash.addEventListener("click", function (event) {
    event.target.parentElement.remove();
  });
}
addTodoForm.addEventListener("submit", function (event) {
  event.preventDefault();
});

inputElem.addEventListener("keydown", function (event) {
  let newtodovalue = event.target.value.trim();
  console.log(newtodovalue);
  if (event.keyCode == 13) {
    if (newtodovalue) {
      inputElem.value = "";
      addnewtodo(newtodovalue);
    }
  }
});
