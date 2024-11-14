// for

for (let i = 0; i < 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("element is 5");
  }
  //console.log(element);
}


// for (let i = 0; i < 20; i++)   {
//   console.log(`outer loop number ${i}`);
//   for (let j = 0; j <= 10; j++){
//     //console.log(`inner loop number ${j} and inner loop number ${i}`);
//     console.log(i + '*' + j + '=' + i * j);
//   }
// }

let myArray = ["flash", "batman", "superman", "ironman"]
console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  //console.log(element);
}


// break and continue

// for (let i = 0; i < 20; i++) {
//   if (i == 5) {
//     console.log("element is 5");
//     break;
//   }
//   console.log(`VALUE OF I IS ${i}`);
// }


for (let i = 0; i < 20; i++) {
  if (i == 5) {
    console.log("element is 5");
    continue;
  }
  console.log(`VALUE OF I IS ${i}`);
}
