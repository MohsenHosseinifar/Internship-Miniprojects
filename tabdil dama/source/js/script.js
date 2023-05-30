let $ = document;
/* f&c */
const onevalue = $.querySelector(".C");
const twovalue = $.querySelector(".F");
/* converter */
const converter = $.querySelector("#converter");
/* result */
const result = $.querySelector(".result");
/* btn */
const convertButton = $.querySelector(".convertButton");
const resetButton = $.querySelector(".resetButton");
const changeButton = $.querySelector(".changeButton");

function convertButtons() {
  if (converter.value === "" ) {
    result.innerHTML = "Enter a number";
  } else {
    if (onevalue.innerHTML === "°C") {
      let ctof = converter.value * 1.8 + 32;
      let ctof2 = "Fahrenheit: " + ctof.toFixed(1);
      result.innerHTML = ctof2;
    } else {
      let ftoc = (converter.value - 32) * (5 / 9);
      let ftoc2 = "Celsius: " + ftoc.toFixed(1);

      result.innerHTML = ftoc2;
    }
  }
}
function resets() {
  result.innerHTML = "";
  converter.value = "";
}
function swaps() {
  if (onevalue.innerHTML === "°C") {
    onevalue.innerHTML = "°F";
    twovalue.innerHTML = "°C";
    converter.setAttribute("placeholder", "°F");
    $.title = "| Js | °F to °C";
  } else {
    onevalue.innerHTML = "°C";
    twovalue.innerHTML = "°F";
    converter.setAttribute("placeholder", "°C");
    $.title = "| Js | °C to °F";
  }
}
