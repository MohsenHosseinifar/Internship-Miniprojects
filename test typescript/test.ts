// تابع جمع دو عدد
function sum(num1: number, num2: number) {
  return num1 + num2;
}

// استفاده از تابع جمع
const s = sum(10, 20);

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
console.log(s);

console.log(per.gender);

const stu :null=null;
const mohsen:(string|number)=12;
