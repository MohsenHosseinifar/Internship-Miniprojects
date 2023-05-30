let select_contry = document.querySelector(".contry");
let select_city = document.querySelector(".cityselect");
let countriesData = {
  iran: ["yazd", "esfahan", "tehtan", "shiraz"],
  caneda: ["Ontario", "Alberta", "British Columbia", "Manitoba"],
  turke: ["stanbol", "atlanta", "tiland", "kosh adasi"],
};
select_contry.addEventListener("change", function () {
  if (select_contry === "plase seleted") {
    select_city.innerHTML = "";
    select_city.innerHTML += "<Option> select contry <Option>";
  } else {
    let cuntry_value = select_contry.value;
    let contry_print = countriesData[cuntry_value];
    select_city.innerHTML = "";
    contry_print.forEach(function (citys) {
      select_city.innerHTML += "<Option>" + citys + "<Option>";
    });
  }
});
