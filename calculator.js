function calc(str) {
    let a = +str.match(/\d*/)[0];
    let znak = str.match(/[+-/*]/)[0];
    str = str.substring(str.indexOf(znak));
    let b = +str.match(/\d/);
    if (a === 0 || b === 0) return 0;
    switch (znak) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return "непонятная движуха";
    }
}

const a = (str) => eval(str);

console.log(a(3 + 4));
console.log(a(3 - 4));
console.log(a(3 * 4));
console.log(a(3 / 4));

// console.log(calc("12 + 3"));
// console.log(calc("12 - 3"));
// console.log(calc("12 * 3"));
// console.log(calc("12 / 3"));