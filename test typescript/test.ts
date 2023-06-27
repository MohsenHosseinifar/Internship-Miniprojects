// تابع جمع دو عدد
function sum(num1: number, num2: number) {
  return num1 + num2;
}

// تعریف متغیرها
const a = 12;
const b = 42.55;
const flag: boolean = false;
const c: number = 12;
const fname: (string | number)[] = ["mohsen", 1];
const test: Array<string | number> = ["mohsen", 1];

// تعریف یک شی با فیلدهای مختلف
enum perunal {
  name = "mohsen",
  age = 12,
  gender = 14,
}
const per: {
  first: perunal;
  number: number;
  gender: perunal;
  sum: {
    z: number;
    y: number;
  };
} = {
  first: perunal.name,
  number: 12,
  gender: perunal.gender,
  sum: {
    z: 20,
    y: 30,
  },
};

// تعریف یک tuple
const f: [string, boolean] = ["mohsen", true];

// نمایش خروجی در کنسول
console.log(per);
console.log(sum(10, 20));
console.log(per.gender);

const stu: null = null;
const mohsen: string | number = 12;

type strvanubmer = string | number;

const abas: strvanubmer = 12;
const jafar: strvanubmer = 145;
const seyed: strvanubmer = 18;

type func = (num1: number, num2: number) => number;
const f2: func = (num1, num2) => {
  return num1 + num2;
};
console.log("func " + f2(20, 30));

class news {
  public static title: string;
  constructor(n: string) {
    news.title = n;
  }
  static printnews() {
    console.log(news.title);
  }
}

const ne = new news("hello");
news.title = "news ";
news.printnews();

const circ = function(deameter: number)  {
  return deameter * Math.PI;
};
console.log(circ(25));

const arrei: string[] = ["mohsen", "abas"];

let person: {
  name: string;
  age: number;
  gender: boolean;
} = {
  name: "mohsen",
  age: 25,
  gender: true,
};

let person2: {
  name: any;
  age: any;
  gender: any;
} = {
  name: 654,
  age: 48489,
  gender: 777,
};
person2 = {
  name: 446,
  age: 53345,
  gender: 45,
};
console.log(person2);
