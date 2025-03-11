// https://262.ecma-international.org/5.1/#sec-11.4.3

"use strict";   // treat all JS code as newer version.
                // not necessary but a good practice.

// alert("hello world") // we are using node js, not browser. That,s why error aeaega terminal me

let name = "Gautam"  // string
let age = 34        // number
let isLoggedIn = false // boolean
let ask;                    //undefined

// number -> 2^53
//bigint
// string -> ""
// boolean -> true/ false
// null -> standalone value
// undefined -> varibale declared hai, memory space declared hai but kya daalenge ye pata nahi
// symbol -> used for uniqueness (kisi bhi value ko unique banane ke liye use hote hai)
// object

console.log(typeof (age))
console.log(typeof isLoggedIn)


//--------------NULL & UNDEFINED--------------------------
let sayHello; // undefined
let sayBye = null

console.log(typeof null)        // o/p -> object
console.log(typeof undefined)  // o/p -> undefined


//----------------SYMBOL-----------------------------------
const id = Symbol('123') // esme jo return type milega vo bhi Symbol dataType ka hoga
            // () esme fir values pass kar dete hai
const anotherId = Symbol('123')
console.log(id === anotherId) // false -> returned value is not same


//-----------------BIGINT----------------------------------
const bigNumber = 183475074618734718675137n
console.log(typeof bigNumber)


//-----------------ARRAY ----------------------------------
const heros = ["shaktiman", "naagraj", "hatim"]  // square brackets: Arrays
console.log(heros)


// -----------------OBJECT----------------------------------
let data = { // Middle brackets: Object
    name : "gautam",
    age: 34
}


//------------------FUNCTION---------------------------------
// function can be stored in variables
let myFunction = function (){
    console.log("Helllo World")
}

console.log(typeof myFunction) // function, but ese detail me bola jata hai FUNCTION OBJECT.
