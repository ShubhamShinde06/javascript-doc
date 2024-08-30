// singleton
//Object.create constotur


// object literals


const mySym = Symbol('key1')

const Jsuser = {
    name: "Shubham",
    "full name":"shubham shinde",
    [mySym] : "key2",
    age: 18,
    location: "mumbai",
    email: "sh@admin.com",
    isLog: true,
    lastLogDays:["Monday", "Sunday"]
}

/*
console.log(Jsuser["full name"]);
console.log(Jsuser["email"]);
console.log(Jsuser[mySym]);
console.log(typeof(Jsuser[mySym]));

Jsuser.isLog = false
console.log(Jsuser.isLog)

Object.freeze(Jsuser) // not chanage value
Jsuser.email = "done"
console.log(Jsuser)
*/


Jsuser.greeting = function(){
    console.log('hello i am here!!!')
}

Jsuser.greetingTwo = function(){
    console.log(`hello i am here ${this["full name"]}!!!`)
}

console.log(Jsuser.greetingTwo())
console.log(Jsuser.greeting())