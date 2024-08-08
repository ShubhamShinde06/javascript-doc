/*
let score = '33abc'
console.log(typeof(score)) //output : string
let valueInNumber = Number(score) // convert in number
console.log(typeof(valueInNumber)) // NaN(not a number) special type 
console.log(valueInNumber) // output : number
*/ 

/* 
outputs :
 "33" => 33
 "33abc" => NaN
  true => 1 
  false => 0
*/

/*
let isLoggedIn = 1;
let boleanIsLoggedIn = Boolean(isLoggedIn)
console.log(boleanIsLoggedIn) //output : true
*/

/*
outputs :
    1 => true; 
    0 => false
    "" => false
    "shubham" => true
*/

// ******** Operations **********

/*
let value = 3;
let negvalue = -value;
console.log(negvalue) // output -3
*/

/*
let str1 = "hello";
let str2 = " shubham";
let str3 = str1 + str2;
console.log(str3) // output hello shubham
*/

/*
console.log("1" + 2) // output 12
console.log(1 + "2") // output 12
console.log("1" + (2 + 1)) // output 121 using () output 13
console.log(1 + 2 + "2") // output 32
*/

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3" postfix

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4" prefix
