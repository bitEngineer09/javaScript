// ["", "", ""]
// [{}, {}, {}] // array of objects


//---------for of loops--------------

// * for (const iterator of object) {}
// * iterator variable hai
// * yaha object ka matlab ki kiske uper loop lagana hai
// * object ki jagah object hona jaruri nahi hai

// NOTE -> **** Arrays: forOf loop
//         **** Objects: forIn loop

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num)
}

const greet = "Greetings"
for (const char of greet) {
    // console.log(char)
    console.log(`Each char is ${char}`)
}


//----------Maps overview---------------
// * map itself is an object.
// * holds key value pair
// * maintains insertion order
// * duplicates not allowed

const map = new Map()
map.set("USA", "America")
map.set("IN", "India")

console.log(map)  // Map(2) { 'USA' => 'America', 'IN' => 'India' }

// es method se saari values print hongi
// for (const key of map) {
//     console.log(key) // [ 'USA', 'America' ]
//                     // [ 'IN', 'India' ]
//
// }


// aise hum key and value alag alag bhi print karva sakte hai
for (const [key, value] of map) {
    console.log(key, ":", value)

}

// const myObj = {
//     name: "John",
//     userName: "John6969"
// }
// // object will not iterate by this
// for (const [key, value] of myObj) {
//     console.log(key, ":", value)
// }