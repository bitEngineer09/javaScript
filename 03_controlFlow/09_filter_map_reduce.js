//-------------filter--------------------------------------

// predicate fn pass karte hai

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newNums = myNums.filter((num) => num > 4)
console.log(newNums)

let newNums1 = myNums.filter((num) => {return num > 4})
console.log(newNums1)

// es logic ko forEach me alag logic se likh sakte hai

const myNums4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const myArray = []
myNums4.forEach( (num) => {
    if (num > 4) {
        myArray.push(num)
    }
})
console.log(myArray)


const books = [
    // database se values aisi hee milti hai
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter( (bk) => bk.genre === 'History' )
console.log(userBooks)

let publishDate = books.filter( (bk) => bk.publish > 1981)
console.log(publishDate)

let userKitaab = books.filter( (bk) => bk.publish > 1990 && bk.genre === 'History')
console.log(userKitaab)

//---------------map------------------------
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let map = myNumbers.map( (num) => num + 10);
console.log(map)

// --> chaining
let newMap = myNumbers.map( (num) => num + 2)
                                .map( (num) => num * 10 )
                                .filter( (num) => num > 40)
// asie hee bht chaining kar sakte hai
console.log(newMap)


//---------------reduce-------------------------
// callback func leta hai
// ACCUMULATOR ek khaali empty variable diya jata hai, accumulator ko initially pata nahi hota ki kaha se shuru karu, therfore use ek initial value deni hoti hai
// hum jo initial value accumulator ko dete hai, vo initial value loop me first time use assign ho jaaegi.
// fir ab jo bhi result aaega ACCUMULATOR + CUURRENTVALUE ka, ab vahi assign hoga accumulator ko
// CURRENTVALUE -> ki abhi array ki current value kya chal ri hai

const test = [1,2,3]
const myTotal = test.reduce(function (accumulator, currentValue) {
    console.log(`Accumulator: ${accumulator} and currentValue: ${currentValue}`)
    return accumulator + currentValue;
}, 0) // 0 is initial value of accumulator
console.log(myTotal)

// using arrow function
const myTest = test.reduce( (acc, currVal) => {
        return acc+currVal;
}, 0)
console.log(myTest)


// real life eg------------------------------------
const shoppinCart = [
    {
        itemName: 'jsCourse',
        price: 899
    },
    {
        itemName: 'pythonCourse',
        price: 799
    }
]
// ek functionality given hai jitne bhi prices hai enhe add kar do
const priceToPay = shoppinCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay)

