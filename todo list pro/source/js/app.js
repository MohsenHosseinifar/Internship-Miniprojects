let addButton = document.getElementById("addButton");
let clearButton = document.getElementById("clearButton");
let inputadd = document.querySelector(".form-control");
let licontent = document.querySelector(".completed well");
let ulElem = document.getElementById("todoList");

let todoArrey = [];
function addbtn() {
  let newtodoTitle = inputadd.value;

  let todoObg = {
    id: todoArrey.length + 1,
    title: newtodoTitle,
    complet: false,
  };
  inputadd.value = "";
  todoArrey.push(todoObg);
  inputadd.focus();

  setlocalstoreg(todoArrey);
  todosgenerator(todoArrey);
}

function setlocalstoreg(todoList) {
  localStorage.setItem("todos", JSON.stringify(todoList));
}
function todosgenerator(todoList) {
  let newtodolielem, newtodolblelem, newtodocompletbtn, newtododeletbtn;
  ulElem.innerHTML = "";
  todoList.forEach(function (todo) {
    console.log(todo);
    newtodolielem = document.createElement("li");
    newtodolielem.className = "completed well";

    newtodolblelem = document.createElement("label");
    newtodolblelem.innerHTML = todo.title;

    newtodocompletbtn = document.createElement("button");
    newtodocompletbtn.className = "btn btn-success";
    newtodocompletbtn.innerHTML = "Complete";
    newtodocompletbtn.setAttribute("onclick", "edittodo(" + todo.id + ")");

    newtododeletbtn = document.createElement("button");
    newtododeletbtn.className = "btn btn-danger";
    newtododeletbtn.innerHTML = "Delete";
    newtododeletbtn.setAttribute("onclick", "removetodo(" + todo.id + ")");
    if (todo.complete) {
      newtodolielem.className = "uncompleted well";
      newtodocompletbtn.innerHTML = "unComplete";
    }
    newtodolielem.append(newtodolblelem, newtodocompletbtn, newtododeletbtn);
    ulElem.append(newtodolielem);
    console.log(newtodolielem);
  });
}
function edittodo(todoId) {
  let localStoragetodos = JSON.parse(localStorage.getItem("todos"));
  todoArrey = localStoragetodos;
  todoArrey.forEach(function (todo) {
    if (todo.id === todoId) {
      todo.complete = !todo.complete;
    }
  });
  setlocalstoreg(todoArrey);
  todosgenerator(todoArrey);
}

function removetodo(todoId) {
  let localStoragetodos = JSON.parse(localStorage.getItem("todos"));
  todoArrey = localStoragetodos;
  let maintodoindex = todoArrey.findIndex(function (todo) {
    return todo.id === todoId;
  });
  todoArrey.splice(maintodoindex, 1);
  setlocalstoreg(todoArrey);
  todosgenerator(todoArrey);
}
function inputkeyDown(event) {
  if (event.keyCode === 13) {
    addbtn();
  }
}
function getlocalstoreg() {
  let localStoragetodos = JSON.parse(localStorage.getItem("todos"));
  if (localStoragetodos) {
    todoArrey = localStoragetodos;
  } else {
    todoArrey = [];
  }
  todosgenerator(todoArrey);
}
clearButton.addEventListener("click", function () {
  inputadd.value = "";
  todoArrey = [];
  todosgenerator(todoArrey);
  localStorage.removeItem("todos");
});
inputadd.addEventListener("keydown", inputkeyDown);
window.addEventListener("load", getlocalstoreg);
