//Dates-----------------------------

/*
let myDate = new Date()
console.log(myDate.toString()) // Wed Aug 14 2024 20:32:35 GMT+0530 (India Standard Time)
console.log(myDate.toJSON()) // 2024-08-14T15:02:35.920Z
console.log(myDate.toDateString()) // Wed Aug 14 2024
console.log(myDate.toLocaleString()) // 14/8/2024, 8:32:35 pm
console.log(typeof myDate) // object
*/

/*
let myCreateDate = new Date(2004, 8, 9)
console.log(myCreateDate.toDateString()) // Thu Sep 09 2004
*/

/*
let myCreateDateTime = new Date(2004, 8, 9, 5, 3, 45)
console.log(myCreateDateTime.toLocaleString()) // 9/9/2004, 5:03:45 am
*/

//Time-------------------------

/*
let myTimeStamp = Date.now()
console.log(myTimeStamp) // compare to myCreatedateTime to this.1723648940262
*/

/*
let myTimeStamp = (Math.floor(Date.now()/100))
console.log(myTimeStamp)
*/

let newdate = new Date()
// console.log(newdate.getDay())

console.log(newdate.toLocaleDateString('default',{
    weekday: "long",
}))

