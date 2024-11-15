const coding = ["js", "rb", "py", "java", "cpp"]

// coding.forEach(function (item) {
//   console.log(item);
// })

// coding.forEach((item) => {
//   console.log(item);
// })

// function printMe(item) {
//   console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach((item, index,  arr) => {
//   console.log(item, index, arr);
// })


const myCoding = [
  {
    language: "js",
    type: "scripting",
  },
  {
    language: "rb",
    type: "scripting",
  },
  {
    language: "py",
    type: "scripting",
  },
  {
    language: "java",
    type: "scripting",
  },
  {
    language: "cpp",
    type: "scripting",
  },

]

myCoding.forEach((item) => {
  console.log(item.language);
})