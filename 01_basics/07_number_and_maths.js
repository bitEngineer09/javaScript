const score = 100;
console.log(typeof score) // number

// new se object banate hai
const balance = new Number(300)
console.log(balance) // [Number: 300]
console.log(typeof balance) // object

console.log(typeof balance.toString())
console.log(balance.toFixed(3)) // constructor me fractionDigits daalte hai
// toFixed is mostly used

const number = 123.489
console.log(number.toPrecision(3)) // 3 digits tak ka rounded number

const num = 1000000000
console.log(num.toLocaleString()) // by default US Standards
console.log(num.toLocaleString('en-IN')) // Indian Standards

console.log(Number.MAX_VALUE)
Number.MIN_VALUE
Number.MAX_SAFE_INTEGER
Number.MIN_SAFE_INTEGER

//-------------------MATHS------------------------------------------------
console.log(Math.abs(-3)) // 3
console.log(Math.round(4.56)) // 5
console.log(Math.ceil(4.23)) // 5
console.log(Math.floor(4.9)) // 4
console.log(Math.min(4,5,6,2,3,6))
console.log(Math.max(34,54,12,23,67))

console.log(Math.random()) // random values b/w 0-1. Mostly decimal
console.log((Math.random()*10) + 1) // decimal se one point shift ho jaaega
                                    // 1 add karne se guranty hai ki vlaue 0 me to nahi hee aaegi

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) + min)) // ab ye 10-20 values dega