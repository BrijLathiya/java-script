// array

const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const myHeros = ["brij", "naagraj", "doga"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods
// myArr.push(10)
// myArr.push(11)
// myArr.pop()
// myArr.pop()

myArr.unshift(10)
myArr.shift()

// console.log(myArr.includes(10))
// console.log(myArr.indexOf(11));
// const newArr = myArr.join(",")
// console.log(newArr);
// console.log(myArr);

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 5)

console.log(myn2);