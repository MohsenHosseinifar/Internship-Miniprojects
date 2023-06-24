"use strict";
// تابع جمع دو عدد
function sum(num1, num2) {
    return num1 + num2;
}
// تعریف متغیرها
const a = 12;
const b = 42.55;
const flag = false;
const c = 12;
const fname = ["mohsen", 1];
const test = ["mohsen", 1];
// تعریف یک شی با فیلدهای مختلف
var perunal;
(function (perunal) {
    perunal["name"] = "mohsen";
    perunal[perunal["age"] = 12] = "age";
    perunal[perunal["gender"] = 14] = "gender";
})(perunal || (perunal = {}));
const per = {
    first: perunal.name,
    number: 12,
    gender: perunal.gender,
    sum: {
        z: 20,
        y: 30,
    },
};
// تعریف یک tuple
const f = ["mohsen", true];
// نمایش خروجی در کنسول
console.log(per);
console.log(sum(10, 20));
console.log(per.gender);
const stu = null;
const mohsen = 12;
const abas = 12;
const jafar = 145;
const seyed = 18;
const f2 = (num1, num2) => {
    return num1 + num2;
};
console.log("func " + f2(20, 30));
class news {
    constructor(n) {
        news.title = n;
    }
    static printnews() {
        console.log(news.title);
    }
}
const ne = new news("hello");
news.title = "news ";
news.printnews();
