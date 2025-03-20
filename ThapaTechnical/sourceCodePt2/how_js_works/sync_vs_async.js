//* Synchronous code executes line by line, blocking further execution until each line is completed, while asynchronous code allows other code to continue executing while it waits for an asynchronous operation to complete.


// Sync-->
// const fun2 = () => {
//   console.log("fun2 starts and ends");
// };

// const fun1 = () => {
//   console.log("fun1 is start");
//   fun2();
//   console.log("fun1 ends");
// };
// fun1();


// Async -->
const fun2 = () => {
  setTimeout(() => {
    console.log("fun2 starts and ends"); 
    // ab ye vala fn web APi me chala jaaega and vaha do seconds ke liye ruk jaaega, then just uske baad next statement exe kar dega, i.e., console.log("fun1 ends");
    // fir 2 sec complete hote hee vo CALLBACK QUEUE me chala jaaega
    // then usme ek event loop hota hai, jiska kaam hai ki jo bhi opearions callBack queue me hai, unko callStack me pass kar dena, and ye bhi dekhna ki callStack me koi or kaam naa ho ra ho 
    // fir operation ho jaaega

    // Therefore, javascript single threaded hone ke baavjood bhi due to these three elememts, CALLSTACK, WEB API & CALLBACK QUEUE, it can perform multiple operations

    // jo bhi asynchronous vale task hote hai vo web API me jaate hai.
    // Web API contains TIMERS, DOM, AJAX?API CALLS, etc
    // It is not a part of javascript, it is a part of the browser.

    // Then after two seconds, it will execute the fun2()
  }, 2000);
};

const fun1 = () => {
  console.log("fun1 is start");
  fun2();
  console.log("fun1 ends");
};
fun1();
