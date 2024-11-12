const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

marvel_heros.concat(dc_heros);
// console.log(marvel_heros);

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);

const all_new_heros = [...marvel_heros, ...dc_heros]
//console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, 8]
const real_another_array = another_array.flat()
// console.log(real_another_array);

console.log(Array.isArray("brij"));
console.log(Array.from("brij"));
console.log(Array.from({ name: "brij" }));  // intersting topic (need to ask which make array )

let scored1 = 100
let scored2 = 200
let scored3 = 300

console.log(Array.of(scored1, scored2, scored3));