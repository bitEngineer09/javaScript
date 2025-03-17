// if
const isUserloggedIn = true
const temperature = 41

if ( temperature === 40 ){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

// <, >, <=, >=, ==, !=, ===, !==


//----------------------------------------------
const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`); // error due to its scope


//-------------Implicit Scope---------------------------
// const balance = 1000
if (balance > 500) console.log("test"); // single line aise likhte hai
if (balance > 500) console.log("test"),
                   console.log("test2"); // multiple lines aise likhte hai -> NOT RECOMMENDED


//------------Nesting-------------------------
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 900) {
//     console.log("less than 750");

// } else {
//     console.log("less than 1200");
// }


//----------Using Logical Operators---------------
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}