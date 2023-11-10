// function Person() {
//     // Конструктор Person() определяет `this` как экземпляр самого себя.
//     this.age = 0;

//     setInterval(() => this.age++, 1000);
// }
// var p = new Person();

// console.log(p.age);
// setInterval(() => {
//     console.log(p.age);
// }, 3000);

function foo(x, y, z) {
    console.log(x, y, z);
}

let arr = [1, 2, 3];
foo(...arr); // 1 2 3