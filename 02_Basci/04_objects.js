/*
//const tinderUser = new Object() // signal trem

const tinderUser = {} // this is object (non-signal trem)

tinderUser.id = "01"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn =false

console.log(tinderUser) // {}
*/

/*
const regularUser = {
    email: 'some@gmail.com',
    fullname: {
        userfullname: {
            fristname: "shubham",
            lastname: "shinde"
        }
    }
}

console.log(regularUser.fullname.userfullname)
*/

/*
const obj1 = {1: "a",2: "b"}
const obj2 = {1: "a",2: "b"}

//const obj3 = Object.assign({} ,obj1 , obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3)
*/

/*
const users = [
    {
        id: 1,
        email: "some@gmail.com"
    },
    {
        id: 2,
        email: "some@gmail.com"
    },
    {
        id: 3,
        email: "some@gmail.com"
    }
]

console.log(users[1].email)
*/


/*
const tinderUser = {}

tinderUser.id = "01"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn =false
console.log(tinderUser)

//console.log(Object.keys(tinderUser))
//console.log(Object.values(tinderUser))
//console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
*/


/*
const course = {
    coursename: "js in js",
    price:"999",
    courseIn : "shubham"
}

//course.courseIn //normal write

// object distructure
const {courseIn: name} = course
console.log(name)
*/

/*
// in react useing props

const navbar = ({company}) => {

} // app.js
 
navbar(company = "renot") // home.js
*/


