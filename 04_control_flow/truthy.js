const userEmail = "xgQa8@example.com";

// if (userEmail) {
//   console.log("Got user email");
// } else {
//   console.log("Don't have user email");
// }

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// true, {}, [], 1, -1, "0", "false"


// if (userEmail.length === 0) {
//   console.log("array is empty");
// }


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
  console.log("object is empty");
}

// nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
///val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20

console.log(val1);

// ternary operator

// condition ? true : false

const iceTeaprice = 100
iceTeaprice < 80 ? console.log("less than 80") : console.log("more than 80");
