// declaration ->
// function fnReference(parameters...)
// const aFunc = function(){}

sayName()
function sayName() {
    // function declared with this method can be called anywhere once it is declared.
    // inside brackets is FUNCTION SCOPE
    console.log('S')
    console.log('u')
    console.log('n')
}

// diff(3,4) // ERROR
const diff = function (a, b) {
    return a - b
}

//-------------------------------------------------------
function addTwoNumbers(number1, number2) {
    // function defintion me PARAMETERS hum define karte hai
    console.log(number1 + number2)
}
    // function calling me jo pass karte hai that are ARGUMENTS
addTwoNumbers(2,5)

// Note ->
const result = addTwoNumbers(2,5)
// o/p to 7 aaega, but jab result ko print karenge to undefined aaega
// its not necessary ki console return values ko hamesha print hee kar dega

function addThreeNumbers(n1, n2, n3) {
    // let result = n1 + n2 + n3
    return n1 + n2 + n3
}
console.log(addThreeNumbers(2,3,4))


//---------------------------------------------------------
function loginUserMessage(username) {
    return `${username} has logged in!`
}
console.log(loginUserMessage('munna bhai'))
// console.log(loginUserMessage()) // jab kuch pass nahi karenge to parameter me undefined aa jaaega, esko tackle karne ke liye neeche diye code par dhyaan do

function loginUser(username) {
    if (username === undefined) {
        return
    }
    return `${username} has logged in!`
}
console.log(loginUser())


//-----------default argument------------------------
function loginUsers(username = "sam") {
    if (username === undefined) {
        return
    }
    return `${username} has logged in!`
}
// on no arg passign, default arg will be executed
console.log(loginUsers())


//----------------...---------------------------------
// ... this is (REST operator) also (SPREAD operator) bhi kehte hai
// according to its usecase, ese alag naam se bulate hai


// EG-> 1--------
function name(...num1) {
    // here it is like varArgs
    // here ... will return Array
    return num1
}
// console.log(name(1,2,3,45))


// EG-> 1----------
function name1(num1, num2, ...num3) {
    return num3
}
console.log(name1(1,2,3,4,5,6,7,78,8)) // only num3 values will be printed here
// agar return num1 -> only num1 value will be returned


// EG-> 3----------
const user = {
    name: 'John',
    id: 345,
    email: 'john@gmail.com'
}
// esme hume type safety ka dhhyaan rakhna padta hai, cuz any change in object keys will give error
function userInfo(anyObject) {
    console.log(`${anyObject.name} has logged in! having id ${anyObject.id}`)
}
userInfo(user)
// we can pass objects directly in functions
userInfo({
    name: "David",
    id: 1455
})


// EG-> 4----------
function returnFirst(anArray) {
    return anArray[0]
}

console.log(returnFirst([69,1,2,3,4,5,6,7]))