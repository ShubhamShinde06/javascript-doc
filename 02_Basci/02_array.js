const marvel_heros = ["thor","iroman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros) // [ 'thor', 'iroman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

//console.log(marvel_heros[3][1])

/*
const all_heros = marvel_heros.concat(dc_heros) // [ 'thor', 'iroman', 'spiderman', 'superman', 'flash', 'batman' ] new array
console.log(all_heros);
*/

/*
const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);
*/

/*
const another_array = [1,2,3,4, [5,6,7],7,[8,9,10]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array) // show all in array
*/

/*
console.log(Array.isArray("SHUBHAM")) // array yes or no
console.log(Array.from("SHUBHAM")) // convert string to array
console.log(Array.from({name: "shubham"})) // empty array
*/

/*
let score1 = 100 
let score2 = 200
let scorr3 = 300

console.log(Array.of(score1,score2,scorr3));
*/