const languages = {
    js: 'javascript',
    cp: 'c++',
    rb: 'ruby',
    swift: 'by Apple'
}

//---------forIn loop-----------------
for (const key in languages) {
    console.log(key) // keys
    console.log(languages[key])  // values
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// using in array
// const programming = ["js", "rb", "py", "java", "cpp"]
// for (const key in programming) {
//     console.log(key) // ye keys return kar deta hai
//     // jabki aise for of loop values return kar deta hai
//
//     console.log(programming[key]) // ye values dega
// }



// using in maps
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const  value in map) { // it will not work
//     console.log(value)
// }