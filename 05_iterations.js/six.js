const coding = ["js", "rb", "py", "java", "cpp"]

// const values = coding.forEach((item) => {
  // console.log(item);
//   return item
// })
// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((item) => {
//   return item > 5
// })


// const newNums = []
// myNums.forEach((item) => {
//   if (item > 5) {
//     newNums.push(item)
//   }
// })
// console.log(newNums);



const books = [
  { title: 'Book One', gender: 'fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', gender: 'History', publish: 1992, edition: 2001 },
  { title: 'Book Three', gender: 'non-fiction', publish: 1999, edition: 2007 },
  { title: 'Book Four', gender: 'non-fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', gender: 'Science', publish: 2000, edition: 2006 },
  { title: 'Book Six', gender: 'fiction', publish: 2002, edition: 2016 },
  { title: 'Book Seven', gender: 'non-fiction', publish: 1987, edition: 1996 },
  { title: 'Book Eight', gender: 'History', publish: 1983, edition: 1991 },
  { title: 'Book Nine', gender: 'fiction', publish: 1999, edition: 2000 },
  { title: 'Book Ten', gender: 'History', publish: 2009, edition: 2010 },
]
  
let userBooks = books.filter((bk) => bk.gender === 'History')

userBooks = books.filter((bk) => {
  return bk.publish > 2000 && bk.gender === 'History'
})


console.log(userBooks);