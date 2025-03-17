// Note -> No diff in single and double quotes, single quotes can also be used for string.

const name = "Gautam"
const age = 34
// console.log("Hello my name is " + name + " and my age count is " + age) // not a good practice

// STRING INTERPOLATION
console.log(`Hello my name is ${name} and my age count is ${age}.`)

// Declaration
const surName = "Yadav ji"
console.log(typeof surName) // type: string


const gameName = new String("Gautam") // type: object

// console.log(typeof gameName)
// console.log(gameName[0]) // aise java me nahi kar sakte
// console.log(gameName.__proto__) // {}
//
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(0))
// console.log(gameName.indexOf('t'))
// console.log(gameName.charAt(2).toUpperCase())

const newString = gameName.substring(0,3) // 3 is exculded
console.log(newString)
// ?? Diff b/w substring and slice
const anotherString = gameName.slice(-5, 2)
console.log(anotherString)

const spaceName = " Hello   "
console.log(spaceName.trim())
console.log(spaceName.trimEnd())
console.log(spaceName.trimStart())

const url = "https://www.gautam.%20com/" // agar ur me space ho jo browser apne aap %20 daal deta hai
// so suppose hume %20 ko replace karna hai
console.log(url.replace("%20", "_"))
console.log(url.includes('gautam'))

const cordName = "Apple Yadav"
console.log(cordName.split()) // [ 'Apple Yadav' ]
console.log(cordName.split(""))
// [
// 'A', 'p', 'p', 'l',
//     'e', ' ', 'Y', 'a',
//     'd', 'a', 'v'
// ]




