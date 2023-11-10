let str = '1 2 3 4 55 11';
str = str.split(' ').map(Number);   // вернет массив цифр    [ 1, 2, 3, 4, 55, 11 ]
console.log(str);

let num = 11;
num = num.toString(2);              // ветнет число-строку в заданной системе исчисления    1011
console.log(typeof num);
console.log(num);

let ff = 'FFFF34';
ff = parseInt(ff, 16);              // распарсит в число в заданной системе исчисления    16777012
console.log(ff);

Object.keys(arr).forEach(k => console.log(arr[k]));         // пробежаться по объекту

const obj2 = JSON.parse(JSON.stringify(obg1));              // скопировать объект со всеми вложенностями