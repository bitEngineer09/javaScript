const marvelHeros = ["IronMan","Thor","SpiderMan"]
const dcHeros = ["SuperMan", "BatMan", "AquaMan"]
//-------PUSH-------------------------
// marvelHeros.push(dcHeros) // push pushes in existing array

// console.log(marvelHeros)
// console.log(marvelHeros[3])     // [ 'SuperMan', 'BatMan', 'AquaMan' ]
// console.log(marvelHeros[3][1])  // BatMan

//-------CONCAT-----------------------
const allHeros = marvelHeros.concat(dcHeros) // concat returns a new array
console.log(allHeros)    //  [ 'IronMan', 'Thor', 'SpiderMan', 'SuperMan', 'BatMan', 'AquaMan' ]
console.log(typeof allHeros) // object


//-------SPREAD------------------------
// mostly used to concat array
const allNewHeros = [...marvelHeros, ...dcHeros]
console.log(allHeros)


//--------FLAT---------------------------
// flat() method of Array  instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const another_Array = [1,2,3,[4,5,6],7,[8,9,[10,11]]]

const real_AnotherArray = another_Array.flat(Infinity)
console.log(real_AnotherArray)


//-----------isArray----------------------
console.log(Array.isArray(another_Array))


//-----------from-------------------------
console.log(Array.from("Gautam")) // array bana dega
console.log(Array.from({name: "Gautam"})) // [] -> jise ye array nahi bana paaega to [] return kar dega


//-----------of----------------------------
// The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
let score1 = 89
let score2 = 90
let score3 = 91
console.log(Array.of(score1, score2, score3)) // [ 89, 90, 91 ]