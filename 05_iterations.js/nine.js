const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, curval) {
//   console.log(`acc:${acc} and curval: ${curval}`);
//   return acc + curval
// }, 0)

const myTotal = myNums.reduce((acc, curval) => acc + curval, 0)

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 299
  },
  {
    itemName: "python course",
    price: 199
  },
  {
    itemName: "cpp course",
    price: 499
  },
  {
    itemName: "java course",
    price: 599
  }
]

const total = shoppingCart.reduce((acc, curval) => acc + curval.price, 0)
console.log(total);
