// OBJECTS
// ways to create -> 1. by literals  2. by constructor
// difference is that: In constructor method singleton object is created. It means ye apne tarah ka ek hee object hai
// but in literals method, uske multiple instances ban jaate hai

// 1.
const jsUser = {}  // empty object
// non singleton object

// 2.
// Object.create

// 3.
// const name = new Object() // singleton object

//----------------------------------------------------
const jsUser2 = {
    name: "Gautam",
    age: 67,
    "location": "Faridabad",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday", "Thursday"]
}
// Accessing elements---------
// Note -> aise to . se access kar rahe honge mostly, but alag alag cases me sabki jarurat pad ri hoti hai.
// vo cases interviews me bhi puchhe jaate hai

console.log(jsUser2["name"])  // behind the scene name variable ko as a string track kiya jaa ra hai, so in this method wite it in "".
console.log(jsUser2.name) // same o/p

console.log(jsUser2["age"])
console.log(typeof jsUser2["age"]) // number

// NOTE -> If keys are in double quotes then cannot be accessed by . operator
console.log(jsUser2.location) // undefined
console.log(jsUser2["location"]) // Faridabad


//-----------------------------------------------------
//--------------Using Symbol as Key--------------------
const mySym = Symbol("key1")

const jsUser3 = {
    name: "Gautam",
    surName: "Yadav",
    age: 32,
    [mySym]: "My Symbol", // symbol variable ko [] esme likte hai
    mySym: "Not a symbol" // ye ek normal var jaisa treat hoga
}

console.log(jsUser3[mySym]) // w/o quotes access hoga
console.log(typeof mySym) // symbol


//--------------Changing Values-------------------------
jsUser3.name = "Sonu" // changing values
// Object.freeze(jsUser3) // ab change nahi kar skate kuch bhi

jsUser3.age = 45 // not changes

console.log(jsUser3)


//---------------Adding Fn----------------------------
jsUser3.greeting = function() {
    console.log("Hello Js User")

}
jsUser3.geetingTo = function() {
    console.log(`Hello js User, ${this.name}`)
}
console.log(jsUser3.greeting)   // [Function (anonymous)] -> fun ka reference aya hai, fn return hua hai

console.log(jsUser3.greeting()) // Hello Js User

console.log(jsUser3.geetingTo()) // Hello js User, Sonu


