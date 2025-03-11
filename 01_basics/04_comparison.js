// console.log(2 > 5)
// console.log(2 >= 5)
// console.log(2 < 5)
// console.log(2 <= 5)
// console.log(2 == 5)
// console.log(2 != 5)

console.log("2" > 1) // automatically type conversion
console.log("34" < 67)
// Note -> Not recommended to do incompatible data types comparison
// due to unpredictable result

// The reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why (3) null = 0 is true and (1) null 0 is false.

// These type of Conversion can create confusion. So mostly avoid these.
// console.log(null > 0) //false
// console.log(null == 0) // false
// console.log(null >= 0) // true
//
// console.log(undefined > 0) // all false
// console.log(undefined >= 0)
// console.log(undefined <= 0)
// console.log(undefined == 0)

// === STRICT CHECK -> It check values as well as dataTypes
console.log("2" == 2) // true due to automatically conversion
console.log("2" === 2) // false
