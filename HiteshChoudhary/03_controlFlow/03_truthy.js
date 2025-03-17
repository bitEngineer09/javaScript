// const email = "gautam@gmail.com"  // considered TRUE
// const email = []  // EMPTY ARRAY is considered TRUE
// const email = ""  // EMPTY STRING is considered FALSE

// if (email) { // by default ese true maan liya hai
//     console.log("Email: " + email)
// } else {
//     console.log("Don't have enough emails")
// }

// ye values aise hee nahi kuch bhi true yaa false hai

// falsy values -> false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values -> "0", 'false', " ", [], {}, function(){} (empty fn hai ye)


//----------to check if data type is array or not------------
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


//--------Empty Object Check---------------
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    // Object.keys array return karega, fir uski length check kar lo
    console.log("Object is empty")
}


// false == 0 // true
// false == '' // true
// 0 == '' // true


//-------Nullish Coalescing Operator (??): null undefined--------

// kayi baar ye hota hai ki jab databse se call karenge, kuch firebase ka use karenge, to hume directly response nahi milta hai, hume do values milti hai.
// to chances hai ki hamare pass null aa jaaye, yaa undefined aa jaaye, us case me pura code structure bigdega
// esliye ye operator introduce hua, ki agar null ho to use null assign kar do taaki use usi ke hisaab se case ko adjust kar saku
// undefined aa ri hai to alag case karu

let val1;
val1 = 5 ?? 10
console.log(val1)  // 5

let val = null ?? 10
console.log(val)  // 10

let val2 = undefined ?? 15
console.log(val2)  // 15

val3 = null ?? 10 ?? 45
console.log(val3)  // 10


//--------Ternary Operator-------------------------

// condition ? true : false

const icePrice = 100;

icePrice >= 80 ? console.log("greater than 80") : console.log("less than 80")
