// NOTE: JavaScript is a dynamic, interpreted, and lightweight programming language that conforms to ECMAScript standards.

// Primitve
// 7 types : string, number, boolean, null, undefined, Symbol, bigint

// Reference (Non primitive)
// Array, Objects, Functions
//--------------------------------------------------------------------------------------------------------------

// Stack (Primitive) ->
//  * for primitive types, stack memory is used.
//  * esme jab bhi variable declare karenge to uski copy milti hai

// Heap (Non Primitive) ->
//  * for non primitive, heap memory is used.
//  * esme declare karne par milta hai reference.

let myName = "Gautam";
let houseName = myName;
console.log("Copied value of variable myName: ",houseName) // "Gautam" cuz value of myName copy, houseName ko mili hai.
houseName = "Sonu"
console.log(houseName) // eski value change hogi to Sonu, kyuki hoouseName me myName ki copy mili thi


let email = {
    "email": "sonu@gmail.com"
}
let changeEmail = email // reference of email is passed to changeEmail
changeEmail.email = "gautam@gmail.com"  // so the change will be on the original value

console.log(email) // "sonu@gmail.com"
console.log(changeEmail)  // "gautam.@gmail.com"


