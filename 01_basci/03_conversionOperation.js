let score = '33abc'
console.log(typeof(score)) //output : string
let valueInNumber = Number(score) // convert in number
console.log(typeof(valueInNumber)) // NaN(not a number) special type 
console.log(valueInNumber) // output : number 
/* 
 "33" => 33
 "33abc" => NaN
  true => 1 
  false => 0
*/

let isLoggedIn = 1;
let boleanIsLoggedIn = Boolean(isLoggedIn)
console.log(boleanIsLoggedIn) //output : true
/*
    1 => true; 
    0 => false
    "" => false
    "shubham" => true
*/