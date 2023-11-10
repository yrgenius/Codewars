// function sum(arr) {
//     "use strict";
//     return arr.reduce((r, a) => r + a, 0);

// };

// console.log(sum([1, 5.2, 4, 0, -1]));
// console.log(sum([]));

// function countBy(x, n) {
//     let z = [x];
//     temp = x;
//     for (let i = 1; i < n; i++) {
//         temp += x;
//         z[i] = temp;
//     }

//     return z;
// }

// console.log(countBy(1, 10));

// function cockroachSpeed(s) {
//     return Math.floor(s * (100000) / 3600);
// }

// console.log(cockroachSpeed(1.9));

// function calculateBmi(weight, height) {
//     const bmi = weight / (height * height) * 10000; //индекс массы тела
//     const DATA = [
//         //  from,  to,       category
//         [0, 15, "Very severely underweight"],
//         [15, 16, "Severely underweight"],
//         [16, 18.5, "Underweight"],
//         [18.5, 25, "Normal (healthy weight)"],
//         [25, 30, "Overweight"],
//         [30, 35, "Obese Class I (Moderately obese)"],
//         [35, 40, "Obese Class II (Severely obese)"],
//         [40, 45, "Obese Class III (Very severely obese)"],
//         [45, 50, "Obese Class IV (Morbidly obese)"],
//         [50, 60, "Obese Class V (Super obese)"],
//         [60, Infinity, "Obese Class VI (Hyper obese)"],
//     ];
//     const val = Math.round(bmi * 10);
//     const out = {
//         value: val,
//     }

//     DATA.forEach(el => {
//         if (val >= el[0] && val <= el[1]) {
//             console.log(el);
//             out.category = el[2];
//         }
//     });

//     return out;
// }


// console.log(calculateBmi(43, 151));

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         let min = args[0];
//         args.map(a => {
//             if (a < min) min = a;
//         });
//         return min;
//     }
// }

// let arr = [1, 2, 3]
// arr.splice(0, 1, 333, 444)

// var twoSum = function (nums, target) {

//     let i = 0
//     let k = i + 1
//     for (; i < nums.length - 1; i++) {
//         for (; k < nums.length; k++) {
//             if (nums[i] + nums[k] === target) return [i, k]
//         }
//     }
// }

// console.log(twoSum([2,7,11,15],9));


// To square(root) or not to square(root)

// function squareOrSquareRoot(array) {
//     let outArray = []
//     for (number of array) {
//         if (Number.isInteger(Math.sqrt(number))) {
//             outArray.push(Math.sqrt(number))
//         }
//         else {
//             outArray.push(Math.pow(number, 2))
//         }
//     }
//     return outArray
// }

// console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]))


// Neutralisation

// function neutralise(s1, s2) {
//     let outString = ''
//     for (let i = 0; i < s1.length; i++) {
//         (s1[i] === s2[i]) ? outString += s1[i] : outString += '0'
//     }
//     return outString
// }


// Flick Switch

function flickSwitch(arr) {
    let flag = true
    let outArray = []
    for (value of arr) {
        if (value === 'flick') flag = !flag
        outArray.push(flag)
    }
}
