//? Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

//todo When a function declaration is hoisted, its entire definition (including the body) is moved to the top of its containing scope during the creation phase. This means that you can call the function before it's actually declared in the code, and it will still work as expected.


//* Before executing our code, JavaScript engine scans the code and creates a property for each variable or function in the code. For variable, It reserves space for them in memory and sets an initial value of undefined, and for functions it also reserves space but sets an initial value as a reference to the actual function in memory. That's why we can call a function, but if we try to access a variable, we will get undefined.


// NOTE => Hoisting will occur only in case of var only, not in let and const, cuz they both have blocked scope.

// fat arrow function me bhi kaam nahi karega

console.log(myVar); // undefined
// agar var ko uski initialization se pehle call kar dete hai, to use globally undefined assign kiya jata hai, use value tab assign hogi jab actual me code, execution context me chalega

// function ke case me original fn ka reference hee pass kar diya jata hai
greet(); // execute ho jaaega

let myVar = 10;
const greet = () => {
  console.log("Welcome, If you are reading this, Don't forget you are awesome");
};

console.log(myVar); // 10
greet(); // execute ho jaaega
