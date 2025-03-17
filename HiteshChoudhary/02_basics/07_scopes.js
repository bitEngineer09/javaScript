// * Java like scopes
// * var c: ye vala variable declaration ka koi scope hee nahi hai, agar ye kisi particular scope me hai to bhi use dusre scope se access kar sakte hai

let a = 90 // This is in GLOBAL scope

if (true) {
    // This is BLOCK scope
    let a = 10  // this can be accessed within this scope
    const b = 80 // this can be accessed within this scope
    var c = 70 // ye bahar bhi access ho jaaega

    console.log(a) // 10
    console.log(c) // 70
}

console.log(a) // 90
console.log(c) // 70

// -------------------------------------------------------
// parent scope vars are accessed to child scope, but not vice versa
// if else ke case me bhi vahi hoga

function one() {
    const userName = 'John'

    function two() {
        // eska parent one() hai, so ye access kar sakta hai uske variables ko
        const website = "youtube"
            console.log(userName)
    }
    // ye child fun two() ke varibales ko access nahi kar sakta hai
    // console.log(website)
    two()
}
one()


