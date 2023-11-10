// function derive(coefficient, exponent) {
//     return `${coefficient * exponent}^${--exponent}`;
// }

// console.log(derive(7, 8));

// function solution(num) {
//     if (num <= 0) return 0;
//     let arr = [];
//     let a = [...new Array(num).keys()];
//     // a = a.filter(a => a % 5 === 0);
//     console.log(a);
//     for (let i = 0; i < num; i++) {
//         if (i % 3 === 0 || i % 5 === 0) arr.push(i);
//     }
//     arr = arr.reduce((r, n) => r + n);
//     return arr;
// }

// console.dir(solution(10));


// Return Negative

function makeNegative(num) {
    return (num > 0) ? num * -1 : num
}