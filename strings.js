// function disemvowel(str) {
//     return str.match(/[^aeiou]/gi).join('');
// }

// console.log(disemvowel('This website is for losers LOL!'));

// console.log(disemvowel("This website is for losers LOL!") && "Ths wbst s fr lsrs LL!");
// console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read") && "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd");
// console.log(disemvowel("What are you, a communist?") && "Wht r y,  cmmnst?");

// function wordsToMarks(string) {
//     const ABC = 'abcdefghijklmnopqrstuvwxyz';
//     return string.split('')
//         .map(el => ABC.indexOf(el) + 1)
//         .reduce((sum, el) => sum + el);
// }

// console.log(wordsToMarks("attitude"));

let str = '1 2 3 4 55 11'
str = str.split(' ').map(Number) // вернет массив цифр
// console.log(str);

// _______________________________________________ ПРИВЕДЕНИЕ ТИПОВ _____________________________________

console.log(5 .toString(2))
console.log(typeof (null + ''))
console.log(3 ** '')
console.log(10 + +   '20') // 30
console.log(+ "  ")        // 0
console.log(2 + "  ")      // 2
console.log(+ true)        // 1
console.log('***********************')
console.log("" + 1 + 0)
console.log("" - 1 + 0)
console.log(true + false)
console.log(6 / "3")
console.log("2" * "3")
console.log(4 + 5 + "px")
console.log("$" + 4 + 5)
console.log("4" - 2)
console.log("4px" - 2)
console.log("  -9  " + 5)
console.log("  -9  " - 5)
console.log(null + 1)
console.log(undefined + 1)
console.log(" \t \n" - 2)
console.log('***********************')

console.log(5 > 4)
console.log("ананас" > "яблоко")
console.log("2" > "12")
console.log(undefined == null)
console.log(undefined === null)
console.log(null == "\n0\n")
console.log(null === +"\n0\n")
console.log('***********************')

let object = [2, 3, 4, 5, 6, 7]
out:                                            // Метка для break/continue
for (const iterator of object) {
    console.log("iterator " + iterator)
    for (const i of object) {
        if (i === 5) break out                      // break
        console.log(i)
    }
}
console.log("***********************")

const a = []
let i = 0

while (i !== 10) {
    a[i++] = function () { return i }
}

console.log(a[3]())

console.log("***********************")

const name = 'vasia'
console.log(Math.abs(name.length - 15))
console.log(Math.min(10, 222, -5, 0, '-33'))
name.length = 50
console.log(name.length)
console.log("***********************")
let ii = 10
while (ii < 10) {
    console.log('ok')
}
console.log("css", ii, "js")
// const aa = () => arguments[0] + arguments[1];
// const aa = (a, b) => a + b;
// const aa = (c = a + b) => c;
// const aa = (a, b) => {return a + b};
const aa = (a, b) => { return a, b }
console.log("RSSchool " + aa('2001', 'Q3'))
console.log("***********************")

console.log(name[name.length - 1])
console.log(!(!true || !true))
{
    console.log("***********************")
    const a = ''
    const b = 9
    const c = null

    console.log(!!(!a || !b && !c))
    console.log(!!(a || !b && !c))
    console.log(!!(a || !b || c))
    console.log(!(!a && b && !c))
    console.log(!(a || !b && !c))
}
{
    console.log("***********************")
    console.log('it\'s cool')
    const a = true
    const b = true
    console.log(!a && !b)
    console.log('\nHey'[1])
    console.log(NaN + 12)
    console.log(1 == '1')
    console.log(4 === 3 + 1)
    console.log('A' > 'a')
    console.log(13 > 12)
    console.log('13px' > 12)
    console.log({} == 1)
    console.log(4 * 'five')
    console.log(4 ** 10)
    console.log(10 ** 4)
    // a.g();
    for (let i = 0; i <= 4; i++) {
        console.log(++i)
    }
    let x
    console.log(x)
    let i = 0
    while (i <= 3) {
        console.log(i)
        i++
    }
    console.log(8 / 2 + 5 - -3 / 2)
    let bb = '123'
    bb[1] = '7'
    console.log(bb)
    console.log(typeof ('4' * 9))
    console.log(Math.floor(-12.8))

}
{
    let i = 0
    let c = 0
    const str = "roling csool sclo"
    while (i < str.length) {
        if (str[i] === 'o') { c++ }
        i++
    }
    console.log(c)
    console.log('1    ' + '    2')
    let a = 5
    console.log(++a)
    console.log(a++)
    console.log(typeof null)
    console.log(typeof number)
    console.log(typeof string)
    console.log(typeof NaN)
    console.log(typeof bigInt)
    console.log(typeof Infinity)
    console.log(typeof 'ivan'.toUpperCase().length.toString())
    const f = 1, s = 2
}
{
    console.log("========================================")
    console.log(null == undefined)
    console.log(typeof 1n)
    console.log(0 && '' && [])
    console.log(0 && '' || [])
    let v = !!'0'
    console.log(v)
    console.log(0 || 1 && 2 || 3)
    console.log(typeof Symbol('JS'))
    console.log(1.15 + 2.30)
    console.log(typeof function () { })
    console.log(typeof typeof function () { })
    console.log(typeof (null + 40))
    console.log(Boolean('0'))
    console.log(Boolean('0') == Boolean(0))
    console.log('123' == 123)
    console.log(typeof null)
    console.log(true - 'hello')
    console.log({} == {})
    console.log(12 && '12')
    console.log(typeof (function () { })())
    console.log(typeof Math)
    console.log(isNaN(''))
}
{
    console.log('++++++++++++++++++++++++++++++++++++++++++')
    function foo() {
        return { bar: 1 }
    }
    console.log(typeof foo().bar)

    function f(a, b) {
        console.log(arguments)
    }
    f(10, 20)

    const data = {
        name: 'hren'
    }

    function ff(m) {
        console.log(`${m} ${this.name}`)
    }
    ff.apply(data, ['Полная'])

    let name = "Jon"
    function printName() {
        console.log(name)
    }

    // setTimeout(() => {
    //     let name = 'Peder';
    //     printName();
    // }, 1000);

    function fff() {
        console.log(this)
    }

    // fff.call(null);
    // let b = bar();
    // const x = 333;
    // function bar(){return x;}

    let s = new Function('a', 'b', 'return a + b')
    // let s = (a, b) => a + b;
    console.log(s(30, 50))
    let ss = function d() { return 11 }
    // console.log(typeof d());

    // console.log(aaaa);
    let aaaa = "ccccc"

    'use strict'
    const det = {
        m: 'hello'
    }
    function gm() {
        return this.m
    }
    console.log(gm.call(det))

    var nn = 333, b = function nn(x) { x + 11 }
    console.log(nn)

    // for(var l = 0; l < 3; l++){
    //     setTimeout(function(){console.log('ll > ' + l);}, 1000);
    // }

    console.log(hhh)
    var hhh = 'hahaha';

    (
        function (a) {
            arguments[0] = 10
            return a
        }
    )(5)

    function gg() {
        return this
    }
    console.log(gg())

    var name2 = "gg"

    function p() {
        console.log(name2)
        var name2 = "ee"
        console.log(name2)
    }
    p()
}
{
    'use strict'
    function gg() {
        return this
    }
    console.log(gg())
}
{
    function f(a, b) { return a * b }
    const b = f.bind(null, 2)
    console.log(b(2))
    for (var fg = 0; fg < 10; fg++) { }
    console.log(fg)
}
{
    var s = 'sex'
    var ob = {
        s: 'no',
        aa() {
            console.log(this.s)
        }
    }
    let aa = ob.aa
    aa()
}
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
{
    String.prototype.toAlternatingCase = function () {
        let outString = ''
        this.split('').map(val => {
            (val.toUpperCase() === val) ? outString += val.toLowerCase() : outString += val.toUpperCase()
        })
        return outString
    }
    console.log("HEllo world".toAlternatingCase())
}