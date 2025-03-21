// fetch API is used to get the data over the internet.
// fetch() -> promise return karti hai
// jab bhi fetch use karte hai, to hume ek promise mil jaati hai

// SYNTAX
// let promise = fetch(url, [options]) 

// w/o options a get req is sent {get req: means simply hum url se data laa re hai}

// NOTE-> status 200 means success


// let p = fetch("https://goweather.herokuapp.com/weather/new%20york")
// const res = p.then ((value) => {
//     console.log(value.status);
//     console.log(value.ok);
//     return value.json(); // ek baar me ek hee type me data get kar sakte hai, means ki agar value.json() kiya hai to value.text() nahi kar sakte
// }).then ((value) => {
//     console.log(value);
// }).catch((err) => {
//     console.log(err);
// })


// An async function in JavaScript is a special type of function that always returns a Promise and allows you to use the await keyword inside it.

const URL = "https://cat-fact.herokuapp.com";

const getFacts = async () => {
    console.log("getting data...");
    let response =  await fetch(URL); // await esliye karaya kyuki ho sakta hai ki api se data laane me time lage to wait karlo
    // console.log(response); // JSON Format not JSON object
    // console.log(response.body) // aise hum response object me se data print karva sakte hai by its key
    // console.log(response.ok);
    
    let data = await response.json(); // .json conerts the response into JSON object
                                      // returns second promise
                                      // It gives usable data
    console.log(data);

    
}
getFacts()





