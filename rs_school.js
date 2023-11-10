//  *********************** Task end ***********************

function getLengthOfMissingArray(arrayOfArrays) {
    let lengthArr = [];
    let unknownNum = 0;
    if (!Array.isArray(arrayOfArrays)) return unknownNum;

    for (el of arrayOfArrays) {
        if (el.length === 0) return 0;
        lengthArr.push(el.length);
    }

    lengthArr.sort((a, b) => a - b);

    for (let i = 0; i < lengthArr.length; i++) {
        if ((lengthArr[i] + 1) < lengthArr[i + 1]) {
            unknownNum = lengthArr[i] + 1;
        }
    }

    return unknownNum;
}

// console.log(getLengthOfMissingArray([
//     [null],
//     [null, null, null]
// ]));
// console.log(getLengthOfMissingArray(null));

// *********************** Task 1 ***********************

//  этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны вернуть наибольшее и наименьшее число.

function highAndLow(num) {
    let arr = num.split(' ');
    let max = +arr[0];
    let min = +arr[0];
    for (let a of arr) {
        if (+a > max) {
            max = a;
        }
        if (+a < min) {
            min = a;
        }
    }
    return max + ' ' + min;
}

// console.log(highAndLow("1 2 3 4 5")) // return "5 1"
// console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4')) // 42 -9


// *********************** Task 2 ***********************

// Изограмма — это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. Реализуйте функцию, определяющую, является ли строка, содержащая только буквы, изограммой. Предположим, что пустая строка является изограммой. Игнорировать регистр букв.

function isIsogram(str) {
    // str = str.toLowerCase().split('');
    // let out = new Set(str);
    return new Set(str.toLowerCase().split('')).size === str.length;
}

// console.log(isIsogram('avVc'));
// console.log(isIsogram('avc'));


// *********************** Task 3 ***********************

// Учитывая строку, состоящую из цифр [0-9], вернуть строку, в которой каждая цифра повторяется количество раз, равное ее значению.

function explode(s) {
    let out = '';
    for (let i = 0; i < s.length; i++) {
        let len = +s[i];
        for (let k = 0; k < len; k++) {
            out = out + s[i];
        }
    }
    return out;
}

// console.log(explode("102269")); // "12222666666999999999"


//  *********************** Task 4 ***********************

// Джонни - фермер, и он ежегодно проводит съезд фермеров-свекловодов «Брось свеклу».

// Каждый год он фотографирует рукопожатие фермеров. Джонни знает, что никакие два фермера не пожимают друг другу руки больше одного раза. Он также знает, что некоторые из возможных комбинаций рукопожатий могут не состояться.

// Однако Джонни хотел бы узнать минимальное количество людей, которые участвовали в этом году, просто подсчитав все рукопожатия.

// Помогите Джонни, написав функцию, которая берет количество рукопожатий и возвращает минимальное количество людей, необходимое для выполнения этих рукопожатий (пара фермеров рукопожатия только один раз).

function getParticipants(hands) {
    let count = 0;
    let minThreshold = 0;
    while (minThreshold < hands) {
        minThreshold += count;
        count++;
    }
    return count;
}

// console.log(getParticipants(0)); // 0
// console.log(getParticipants(1)); // 2
// console.log(getParticipants(3)); // 3
// console.log(getParticipants(6)); // 4
// console.log(getParticipants(7)); // 5


//  *********************** Task 5 ***********************

// Преобразовать строку в новую строку, где каждый символ в новой строке соответствует  
// "("  если этот символ появляется только один раз в исходной строке или 
// ")"если этот символ появляется в исходной строке более одного раза. 
// заглавные буквы при определении, как прописные.

function duplicateEncode(word) {
    let out = '';
    let arr = word.toLowerCase().split('');

    for (let i = 0; i < arr.length; i++) {
        if (arr.slice(0, i).includes(arr[i]) || arr.slice(i + 1, arr.length).includes(arr[i])) out += ')';
        else out += '(';
    }

    return out;
}

// console.log(duplicateEncode("din")); //"(((");
// console.log(duplicateEncode("recede")); //"()()()");
// console.log(duplicateEncode("Success")); //")())())","should ignore case");
// console.log(duplicateEncode("(( @")); //"))((");


//  *********************** Task 6 ***********************

// Я хотел бы, чтобы вы написали мне функцию, которая при задании числа (n) возвращает n-е число в последовательности Фибоначчи.

function nthFibo(n) {
    let out = 0;
    let temp1 = 0;
    let temp2 = 1;
    if (n === 1) return 0;
    if (n === 2) return 1;
    for (let i = 2; i < n; i++) {
        out = temp1 + temp2;
        temp1 = temp2;
        temp2 = out;
    }
    return out;
}

// console.log(nthFibo(1)); // 0 "1-st Fibo"
// console.log(nthFibo(2)); // 1 "1-st Fibo"
// console.log(nthFibo(3)); // 1 "1-st Fibo"
// console.log(nthFibo(4)); // 2 "1-st Fibo"
// console.log(nthFibo(5)); // 2 "1-st Fibo"
// console.log(nthFibo(6)); // 2 "1-st Fibo"


//  *********************** ARRAYS ***********************

//  *********************** Task 7 ***********************

// function head(arr) { return arr[0] };

// function tail(arr) { return arr.slice(1, arr.length) };

// function init(arr) {
//     arr.length -= 1;
//     return arr;
// };

// function last(arr) { return arr[arr.length - 1] }

const head = (arr => arr[0]);
const tail = (arr => arr.slice(1, arr.length));
const init = (arr => {
    arr.length -= 1;
    return arr;
});
const last = (arr => arr[arr.length - 1]);

// console.log(head([5, 1])); // 5);
// console.log(tail([1])); // []);
// console.log(tail([1, 5, 7, 9])); // [5, 7, 9]);
// console.log(init([1, 5, 7, 9])); // [1, 5, 7]);
// console.log(last([7, 2])); // 2);
// console.log(last([12, 9, 28, 4, 20, 15, 49, 39, 35, 38, 6, 10, 16, 46, 30])); // 30);


//  *********************** Task 8 ***********************

// Ваша задача — создать функцию deepCount, которая возвращает количество ВСЕХ элементов в массиве, включая вложенные.

function deepCount(arr) {
    let count = arr.length;
    if(arr.length === 0) return 0;
    
    for(let el of arr){
        // if(Array.isArray(el)) {
        //     count += deepCount(el);
        // }
        count += Array.isArray(el) ? deepCount(el) : 0;
    }

    return count;
}

// console.log( deepCount([]));                        //  0
// console.log("******************");
// console.log( deepCount([1, 2, 3]));                 //  3
// console.log("******************");
// console.log( deepCount(["x", "y", ["z"]]));         //  4
// console.log("******************");
// console.log( deepCount([1, 2, [3, 4, [5]]]));       //  7
// console.log("******************");
// console.log( deepCount([[[[[[[[[]]]]]]]]]));        //  8


//  *********************** Task 9 ***********************

// Вы получаете массив массивов.
// Если вы отсортируете массивы по их длине, вы увидите, что их значения длины следуют друг за другом.
// Но одного массива не хватает!

function getLengthOfMissingArray(arrayOfArrays) {
    if(
        typeof(arrayOfArrays) === 'undefined' || 
        arrayOfArrays === null || 
        arrayOfArrays.includes(null) ||
        arrayOfArrays.length === 0) return 0;
      
      let arrOfLength = [];
  
      for(let el of arrayOfArrays){
        console.log(el);
        if(Array.isArray(el)) arrOfLength.push(el.length);
      } 

      arrOfLength.sort((a, b) => a - b);
      if(arrOfLength[0] === 0) return 0;
      
      for(let i = arrOfLength[0], k = 0; k <= arrayOfArrays.length; k++, i++){
          if(arrOfLength[k] !== i) return i;
      }
    
    function info() {
            console.log('Длинна исходного массива => ' + arrayOfArrays.length);
            console.log('Массив длин => ' + arrOfLength);
    }
}

// console.log('>>  ' + getLengthOfMissingArray([ 1, 2, 2 ], null));                                                                                                // 0
// console.log('>>  ' + getLengthOfMissingArray([ ], [], [], [], []));                                                                                                           // 0
// console.log('>>  ' + getLengthOfMissingArray());                                                                                                                 // 0
// console.log('>>  ' + getLengthOfMissingArray(null));                                                                                                             // 0
// console.log('>>  ' + getLengthOfMissingArray(['']));                                                                                                             // 0
// console.log('>>  ' + (getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]]) === 3));                                                    // 3
// console.log('>>  ' + (getLengthOfMissingArray( [ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]]) === 2));                                                // 2
// console.log('>>  ' + (getLengthOfMissingArray([ [ null ], [ null, null, null ] ]) === 2));                                                                       // 2
// console.log('>>  ' + (getLengthOfMissingArray([[ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]]) === 5));     // 5  
// console.log('*******************************************************');
// console.log('>>  ' + (getLengthOfMissingArray([
//     [2, 3, 3, 3],
//     [1, 4],
//     [0, 0, 4],
//     [3, 3, 2, 1, 3, 3],
//     [2, 0, 2, 2, 0],
//     [1, 0, 4, 4, 0, 2, 3, 3],
//     [1, 2, 3, 4, 0, 3, 2, 3, 3]
//     ]) === 7) );                                                                                                                                                 // 7
// console.log('>>  ' + getLengthOfMissingArray([
//     [2, 3, 0, 2],
//     [1, 2, 1, 1, 0, 0],
//     [4, 1, 0, 3, 4, 4, 1, 1],
//     [3, 0, 3, 1, 1, 0, 1]
// ]));                                                                                                                                                             // 5
// console.log('>>  ' + getLengthOfMissingArray([
//     [0, 0, 4],
//     [2, 3, 3, 2, 2],
//     [1, 2, 2, 4, 2, 1]
// ]));                                                                                                                                                             // 4


//  *********************** Task 10 ***********************

/*  Пара перчаток
    Приближается зима, вы должны подготовить свои лыжные каникулы. Цель этого ката — определить количество пар перчаток, 
    которое вы можете составить из перчаток, которые есть в вашем ящике.
    Учитывая массив, описывающий цвет каждой перчатки, верните количество пар, которые вы можете составить, предполагая, 
    что только перчатки одного цвета могут образовывать пары.
*/

function numberOfPairs(gloves){
    const box = {}
    let count = 0;
    
    for(let i = 0; i < gloves.length; i++){
        if(typeof box[gloves[i]] !== 'undefined') box[gloves[i]] += 1;
        else box[gloves[i]] = 1;
    }

    console.log(box);

    for(let i in box){
        console.log(Math.floor(box[i]/2));
        count += Math.floor(box[i]/2);
    }

    return count;
}

// console.log(numberOfPairs(['red','red']));                                      // 1
// console.log(numberOfPairs(['red','green','blue']));                             // 0
// console.log(numberOfPairs(['gray','black','purple','purple','gray','black', 'gray']));  // 3


//  -------------------------------------------------------
//  *********************** TASK 11 ***********************
//  -------------------------------------------------------

/*  В этом ката вы должны отсортировать массив 32-битных целых чисел в порядке возрастания количества битов , которые они имеют.

Например, учитывая массив [7, 6, 15, 8]

7 имеет 3 бита (000...0 111 )
6 имеет 2 бита (000...00 11 )
15 имеет 4 бита (000... 1111 )
8 имеет 1 на бите (000... 1 000)
Таким образом, массив в отсортированном порядке будет [8, 6, 7, 15] .

В случаях, когда два числа имеют одинаковое количество битов, вместо этого сравните их действительные значения.
Например, между 10 (...1010) и 12 (...1100) они оба имеют одинаковое количество битов ' 2 ', но целое число 10 меньше 12, поэтому оно идет первым в порядке сортировки.

Примечание: ваше решение должно сортировать массив на месте .
*/

function sortByBit(arr) {
    let bits = arr.map(a => a.toString(2));
    console.log(bits);

    
}


let a = [3, 8, 3, 6, 5, 7, 9, 1];       // [1, 8, 3, 3, 5, 6, 9, 7]);
let b = [9,4,5,3,5,7,2,56,8,2,6,8,0];   // [0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56]
// console.log(sortByBit(a)); 
// console.log(sortByBit(b)); 


//  -------------------------------------------------------
//  *********************** TASK 12 *** 7kyu **************
//  -------------------------------------------------------

// Верните самый яркий из этих цветов!
// brightest(["#001000", "#000000"]) == "#001000"
// brightest(["#ABCDEF", "#123456"]) == "#ABCDEF"

// !!! V = max(R,G,B) =>        V = R + G + B

function brightest(colors){
    let obj = {};
    
    for(let el of colors){
        obj[el] = maxGradient(el);
    }
    
    let max = arguments[0][0];
    let value = obj[arguments[0][0]];

    for(let i = 0; i < colors.length; i++){
        console.log('**********************');
        console.log('Было max = ' + max);
        console.log(obj[arguments[0][i]]);
        console.log(obj[arguments[0][i + 1]] + '\n');

        if(obj[arguments[0][i]] > value ) {
            value = obj[arguments[0][i]];
            max = arguments[0][i];
        };
        console.log('Стало max = ' + max + "\n");
    }
    
    console.log(obj);
    return max;
}

function maxGradient(str){
    str = str.slice(1);
    [a, b, c] = str.match(/../g);
    return (a >= b && a >= c) ? a : (b >=c ) ? b : c;
}

// console.log( brightest(["#001000", "#000000"]));            // "#001000"
// console.log( brightest(["#ABCDEF", "#123456"]));            // "#ABCDEF"
// console.log( brightest(["#00FF00", "#FFFF00"]));            // "#00FF00"
// console.log( brightest(["#FFFFFF", "#1234FF"]));            // "#FFFFFF"
// console.log( brightest(["#317059","#74019C","#1668A6"]));   // "#1668A6"
// console.log( brightest(["#42BA4C","#75DFD3","#89BC45","#EBD31C","#373022","#8AA6E5"]));   // "#EBD31C"


//  -------------------------------------------------------
//  *********************** TASK 13 *** 7kyu **************
//  -------------------------------------------------------

function myLanguages(results) {
   
}

// console.log( myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}));       // ["Ruby", "Python"])
// console.log( myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}));      // ["Dutch", "Greek", "Hindi"])
// console.log( myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20}));        // [])


//  -------------------------------------------------------
//  *********************** TASK 14 *** 6kyu **************
//  -------------------------------------------------------
/*
    Вам будет предоставлен список объектов. Каждый объект имеет type, material и, возможно, secondMaterial. 
    Существующие материалы: paper, glass, organic, и plastic.
    Ваша задача состоит в том, чтобы отсортировать эти объекты по 4 мусорным бакам в соответствии с их material
    (и secondMaterial если он присутствует), перечислив type объекты, которые должны попасть в эти мусорные баки.

    Заметки
    Контейнеры должны идти в том же порядке, что и материалы, перечисленные выше.
    Все корзины должны быть перечислены в выводе, даже если некоторые из них пусты.
    Если объект сделан из двух материалов, он type должен быть указан в обеих соответствующих корзинах.
    Порядок объектов type в каждой ячейке должен быть таким же, как порядок их соответствующих объектов в списке ввода.  

    output = [
        ["wine bottle", "amazon box", "beer bottle"],
        ["wine bottle", "beer bottle"],
        ["rotten apples", "out of date yogurt"],
        ["out of date yogurt"]
    ]
*/

function recycle(arr) {
    let tanks = [[], [], [], []];
    arr.forEach(el => {
        if(el.material === 'paper' || el.secondMaterial === 'paper') tanks[0].push(el.type);
        if(el.material === 'glass' || el.secondMaterial === 'glass') tanks[1].push(el.type);
        if(el.material === 'organic' || el.secondMaterial === 'organic') tanks[2].push(el.type);
        if(el.material === 'plastic' || el.secondMaterial === 'plastic') tanks[3].push(el.type);
    });

    return tanks;
  }

  let arr = [
    {type: 'rotten apples', material: 'organic'},
    {type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic'},
    {type: 'wine bottle', material: 'glass', secondMaterial: 'paper'},
    {type: 'amazon box', material: 'paper'},
    {type: 'beer bottle', material: 'glass', secondMaterial: 'paper'}
  ];

//   console.log(recycle(arr));                

// ['wine bottle', 'amazon box', 'beer bottle'],        paper
// ['wine bottle', 'beer bottle'],                      glass
// ['rotten apples', 'out of date yogurt'],             organic
// ['out of date yogurt']                               plastic
  


//  -------------------------------------------------------
//  *********************** TASK 15 *** 7kyu **************
//  -------------------------------------------------------
/*
    Напишите вызываемую функцию checkCoupon, которая проверяет, что код купона действителен и не просрочен.

    Купон перестает быть действительным на следующий день ПОСЛЕ истечения срока действия. Все даты будут переданы в виде строк в следующем формате: "MONTH DATE, YEAR".
*/      

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    if(enteredCode !== correctCode) return false;

    let a = parseDate(currentDate);
    console.log('parseDate >> ', a);
    const endDate = new Date(parseDate(expirationDate));
    const current = new Date(parseDate(currentDate));
    console.log(endDate);
    console.log(current);
    if(endDate < current) return false;

    return true;
}

function parseDate(date){
    const year = date.match(/\d\d\d\d/)[0];
    const month = date.match(/^\w{0,}/i);
    const day = date.match(/\d{1,2}/);
    return `${day} ${month} ${year}`;
}

// console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'));                    // true
// console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'));                   // false



//  -------------------------------------------------------
//  *********************** TASK 16 *** 7kyu **************
//  -------------------------------------------------------

/*  
    Пятница 13 или Черная пятница считается несчастливым днем. Подсчитайте, сколько несчастливых дней в данном году.
*/

function unluckyDays(year){
    let arr = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    let count = 0;
    for(let i = 0; i < 12; i++){
        const date = new Date(year, i, 13);
        let fr = date.getDay();
        // console.log(date);
        // console.log(fr);
        console.log(arr[date.getDay()]);
        if(date.getDay() === 5) count++;
    }
    return count;
}



// console.log(unluckyDays(1586));    // 1
// console.log(unluckyDays(1001));    // 3
// console.log(unluckyDays(2819));    // 2
// console.log(unluckyDays(2792));    // 2
// console.log(unluckyDays(2723));    // 2
// console.log(unluckyDays(1909));    // 1
// console.log(unluckyDays(1812));    // 2
// console.log(unluckyDays(1618));    // 2
// console.log(unluckyDays(2132));    // 1
// console.log(unluckyDays(2065));    // 3



//  -------------------------------------------------------
//  *********************** TASK 17 *** 6kyu **************
//  -------------------------------------------------------
/*
    Учитывая Date, верните угол между двумя стрелками 12-часовых аналоговых часов в радианах .
*/

function handAngle (date) {
    let current = new Date(date);
    let hours = (current.getHours() === 12) ? 0 : current.getHours();
    let minutes = new Date(date).getMinutes();
    let ang1 = (360 * hours / 12) + minutes / 2;                     
    let ang2 = 0;
    
    // if(hours !== 0 && hours !== 12) {
    //     ang1 = (360 * +hours / 12) + (minutes / 12);
    // } 

    if(minutes !== 0 && minutes !== 12) {
        ang2 = 6 * minutes;
    } 
    
    let diffAngle = normalizeAngle(Math.abs(ang1 - ang2));  
    let rad = diffAngle * (Math.PI / 180);
    return rad;
}

const normalizeAngle = angle => ((angle > 180) ? 360 - angle : angle);

// console.log(handAngle('Sat Sep 17 2022 09:00:21'));                         // 1.5707963267948966
// console.log(handAngle('Sat Sep 17 2022 10:00:14'));                         // 1.0471975511965976
// console.log(handAngle('Sat Sep 17 2022 00:15:08'));                         // 1.4398966328953218

// console.log(makeDate(0, 0));                              // 0.0
// console.log(makeDate(12, 0));                             // 0.0
// console.log(makeDate(6, 0));                              // 3.141592653589793
// console.log(makeDate(1, 0));                              // 0.5235987755982988
// console.log(makeDate(9, 0));                              // 1.5707963267948966
// console.log(makeDate(10, 0));                             // 1.0471975511965976
// console.log(makeDate(0, 15));                             // 1.4398966328953218
// console.log(makeDate(0, 45));                             // 1.9634954084936207
// console.log(makeDate(12, 30));                            // 2.8797932657906435
// console.log(makeDate(7, 15));                             // 2.2252947962927703
// console.log(makeDate(6, 5));                              // 2.6616271092913526



//  -------------------------------------------------------
//  *********************** TASK 18 *** 6kyu **************
//  -------------------------------------------------------

var runLengthEncoding = function(str){
    if(str.length === 0)return [];

    let out = [];
    let arr = str.split('');

    for(let i = 0; i < arr.length; ){
        let count = 0;
        let k = i;

        for( ; k < arr.length; k++){
            if(arr[i] === arr[k]){
                count++;
            }
            else break;
        }
        out.push([count, arr[i]]);
        i = k;
    }

    return out;
  }

// console.log(runLengthEncoding(""));                         // []));      
// console.log(runLengthEncoding("abc"));                      // [[1,'a'],[1,'b'],[1,'c']]));
// console.log(runLengthEncoding("aab"));                      // [[2,'a'],[1,'b']]));      
// console.log(runLengthEncoding("hello world!"));             // [[1,'h'],[1,'e'],[2,'l'],[1,'o'],[1,' '],[1,'w'],[1,'o'],[1,'r'],[1,'l'],[1,'d'],[1,'!']]);

// console.log(runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"));        
// //  [[34,'a'], [3,'b']]);
// console.log(runLengthEncoding("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW"));
// [[12,'W'],[1,'B'],[12,'W'],[3,'B'],[24,'W'],[1,'B'],[14,'W']]



//  -------------------------------------------------------
//  *********************** TASK 19 *** 6kyu **************
//  -------------------------------------------------------
/*
    Реализуйте метод, find который принимает два параметра object и path. 
    Это path будет строка свойств, разделенных точкой, которую мы будем использовать, чтобы пройти через наш object, 
    чтобы найти наше целевое значение.
*/

function find(object, path) {
    let arrPath = path.split(/\b[.]\b/);
    console.log(arrPath);
    
    return object[arrPath[0]][arrPath[1]][arrPath[2]];
}

{
    let object = { 
        user: { 
            name: { 
              first: 'John', 
              last: 'Snow' 
            }
        } 
      };
    let path = 'user.name.first';

    // console.log(find(object, path) );   // 'John'

}

{
    //  -------------------------------------------------------
    //  *********************** TASK 19 *** 6kyu **************
    //  -------------------------------------------------------
    /*
        написать функцию, которая форматирует продолжительность, 
        заданную в виде количества секунд, удобным для человека способом.

        Функция должна принимать неотрицательное целое число. 
        Если он равен нулю, он просто возвращает "now". 
        В противном случае продолжительность выражается как комбинация years, days, hours и minutes.seconds
        1m = 60s;
        1h = 60m = 60 * 60 = 3600s;
        1d = 24h = 60 * 60 * 24 = 86400s;
        1y = 365d = 60 * 60 * 24 * 365 = 31536000s;
    */
    
        function formatDuration (time) {
            if (!time) return 'now';
            let out = [];
            let y = Math.floor(time / (60 * 60 * 24 * 365))
            let d = Math.floor(time / (60 * 60 * 24) % 365);
            let h = Math.floor(time / (60 * 60) % 24);
            let m = Math.floor(time / 60 % 60);
            let s = Math.floor(time % 60);

            if(y) out.push(removeS(y + ' years'));
            if(d) out.push(removeS(d + ' days'));
            if(h) out.push(removeS(h + ' hours'));
            if(m) out.push(removeS(m + ' minutes')); 
            if(s) out.push(removeS(s + ' seconds'));

            return doString(out);
        }

        function doString(arr){
            let str = '';
            
            if(arr.length === 1) return str += arr[0];
            if(arr.length === 2) str += arr[0];
            if(arr.length > 2){
                for(let i = 0; i < arr.length - 2; i++){
                    str += arr[i] + ', ';
                }
                str += arr[arr.length - 2];
            }

            str += ' and ' + arr[arr.length -1];

            return str;
        }

        function removeS (str){
            let num = str.match(/\d*/)[0];
            return (num == 1) ? str.slice(0, str.length - 1) : str;
        } 

        // console.log( formatDuration(0));            //  "now";
        // console.log( formatDuration(1));            //  "1 second";
        // console.log( formatDuration(62));           //  "1 minute and 2 seconds";
        // console.log( formatDuration(120));          //  "2 minutes";
        // console.log( formatDuration(3600));         //  "1 hour";
        // console.log( formatDuration(3662));         //  "1 hour, 1 minute and 2 seconds";
        console.log( formatDuration(126149472));         //  "4 years, 4 days, 1 hour, 31 minutes and 12 seconds";
          
}