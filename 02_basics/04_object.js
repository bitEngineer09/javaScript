// const tinderName = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name ="Gautam"
tinderUser.isLoggedIn = "false"
// console.log(tinderUser) // { id: '123abc', name: 'Gautam', isLoggedIn: 'false' }


const regUser = {
    email: "some@gmail.com",
    fullName: {
        FirstName: "Gautam",
        LastName: "Yadav"
    }
}
console.log(regUser.fullName.FirstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}


// Adding objects in object----------------------------------------

// ---------------way 1-------------
// const obj3 = {obj1, obj2}  // objects ke ander object
// console.log(obj3)

//----------------way 2-------------
// const obj3 = Object.assign(obj1, obj2) // ye bhi kar sakte hai
const obj3 = Object.assign({}, obj1, obj2) // Good practice
// {} is target and other objects are source

//----------------way 3--------------
// by SPREADING
const obj4 = {...obj1, ...obj2}


// Note jab database se users aate hai, to vo array me aate hai
const user = [
    {
        id: 1,
        email: "some@gmail.com",
        name: "Gautam"
    },
    {
    },
    {
    }
]  // aise hee hamare pass array of objects aate hai, unpe kaam karna hota hai


//----------Some Methods-----------------------
console.log(Object.keys(obj4)) // return array of keys

console.log(Object.values(obj4)) // return array of values

console.log(Object.entries(obj4)) // return array of entries

console.log(obj4.hasOwnProperty("1")) // checks ki aise koi key hai yaa nahi