// Investigation Study

let score = "45";
console.log(typeof score) // string
let valueInScore = Number(score)
console.log(typeof valueInScore) // number
console.log(valueInScore)   // 45

let score1 = "23abc"
let valueOfscore1 = Number(score1)
console.log(typeof valueOfscore1) // number
console.log(valueOfscore1) // Nan -> not a number

let score2 = null
console.log(typeof score2) // object
console.log(score2) // null

let value = Number(score2)
console.log(value) // 0

let score3 = undefined
console.log(score3) // undefined
let value1 = Number(undefined)
console.log(value1) // NaN

let score4 = true
console.log(Number(score4)) // 1

let name = "Gautam"
console.log(Number(name)) //NaN

let isLoggedIN = 1;
console.log(Boolean(isLoggedIN))

let someNumber = 8
let stringNumber = String(someNumber)
console.log(typeof stringNumber) // string
// SUMMARY
// "33" -> 33
// "33abc" -> NaN
// true -> 1; false -> 0; VICE VERSA
// "" -> false; "Gautam" -> true

let value = 8
let negValue = -value
console.log(negValue)

//-----------------------------------------------------------------
// console.log( 2 + 2 )
// console.log( 2 - 2 )
// console.log( 2 * 2 )
// console.log( 2 / 2 )
// console.log( 2 % 2 )
//------------------------------------------------------------------


let str1 = "Gautam"
let str2 = " Yadav"
let str3 = str1 + str2
console.log(str3)


// string on first: Then all will be considerd as String
// string in last: Then first calculate the first comming numbers then concat to String value.
console.log(typeof(1 + "2")) // type: string; value: 12
console.log("1" + 2 + "2" + 5) // 1225; type: string
console.log(2 + 3 + 4 + "56") // 9 + "56" = 956
console.log(Number("45") + 67) // 112

//-----------------------------------------------------------------------
// PostFix Increment
let x = 4;
let y = x++; // pehle print hoga fir badhega
console.log(x) // 5
console.log(y) // 4

// PreFix Increment
let a = 4;
let b = ++a; // pehle badhega fir print ho jaaega
console.log(a) // 5
console.log(b) // 5
