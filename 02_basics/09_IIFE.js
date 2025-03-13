// Immediately Invoked Function Expressions (IIFE)

// jaise hee function likha, use turant execute karana hota hai
// suppose sometimes koi database file hai, or hum chahte hai ki hamari application jaise hee start ho, to us file me hamara database ka connection ban jaaye
// USECASE: -> we don't want pollution from global scope, kayi baar global scope ke pollution se problem hoti hai
//               then jo bhi us global scope ke variables yaa declarations hai, uske pollution ko hatane ke liye IIFE use karte hai
//          -> we want to execute that function immediately
// (function(){})()
// baad vala jo bracket hai, use aise samjho ki vo us function kon call kar ra hai, to hum usme arguments bhi de sakte hai

//-------------named IIFE---------------
(function chai() {
    console.log("DB connected")
})();   // DB connected
        // ye function to invoke ho gaya hai, but aise case me JS ko pata nahi hai ki context ko kaha end karna hai
        // Therfore to end the funtion ; is required


//-------------unnamed IIFE-------------
(() => {
    console.log("DB disconnected")
}) ();

((name) => {
    console.log(`hello my name is ${name}`)
}) ("David"); //hello my name is David


