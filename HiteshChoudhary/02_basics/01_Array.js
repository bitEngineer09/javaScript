// Array

const arr = [1,2,3,4]
// JS arrays are resizable and can contain a mix of different data types
// These are not associative arrays means, array elements cannot be accessed using arbitary strings as indexes
// 0 based indexing
// JavaScript array-copy operations create shallow copies.
// A SHALLOW copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too.
// A DEEP copy of an object is a copy whose properties do not share the same references (point to   the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too. That behavior contrasts with the behavior of a shallow copy, in which changes to nested properties in the source or the copy may cause the other object to change too.
console.log(arr[0])

const arr2 = [1,3,"Apple", true, 45.00]
const arr3 = ["Apple", "Mango", "Pear"]
const arr4 = new Array(1, 2, 3, 4, 5)
// jab console me array declare karenge, then length fn aaega, then _prototype_ then again _prototype

// Methods
const myArray = new Array(11, 2, 3, 4, 5)
myArray.push(7)
myArray.push(90)
myArray.pop() // pop last value
myArray.unshift(45) // insert at starting of array, but it requires shifting of elements
myArray.shift() // first element remove karega

console.log(myArray.includes(43))
console.log(myArray.indexOf(56))

const newArray = myArray.join()
console.log(newArray) // 11,2,3,4,5,7  w/o brackets output aaega
console.log(typeof newArray) // join string me convert kar deta hai

// slice, spice

// slice()
// Does NOT change the original array.
// Takes a part of the array and returns a new one.
// Syntax: array.slice(start, end) (end is not included).

// splice()
// Changes the original array.
// Can remove, add, or replace items.
// Syntax: array.splice(start, deleteCount, item1, item2, ...)


const newArray2 = [21, 22, 23, 24, 24, 25, 26, 27]
console.log('A', newArray2)

const myn1 = newArray2.slice(1,4)

console.log("slice", myn1)
console.log('Original array is not changed after slice: ', newArray2)

const myn2 = newArray2.splice(1,4)
console.log("splice", myn2)

console.log("Original array has been changed after splice",newArray2)