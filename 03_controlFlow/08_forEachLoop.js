const programming = ["js", "rb", "py", "java", "cpp"]

// NOTE -> dot karke or bhi methods explore kar liyo

// programming.forEach()    // * esme callBack fn pass karte hai
                            // * doesn't return any thing

// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;

//  normally hum function aise likhte the
//  --> coding.forEach(function greet() {})
//  --> but paramter me callBack function dena hota hai, so uska naam nahi hoga
//  --> coding.forEach( function () {})

programming.forEach( function (item) {
    console.log(item)
})


//-----------using arrow Function------------------
programming.forEach((item) => {
    console.log(item)
})


//-----------passing function as argument---------------
function printMe(item) {
    console.log(item)
}
programming.forEach(printMe) // function ka reference dena hota hai


programming.forEach((item, index, arr) => {
    console.log(item, index, arr)
})


//---------working on array of objects--------------

// ye bht common operation hai, cuz database se jo values aati hai vo array ki formal me aati hai, and har ek value object hoti hai
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item)
})
