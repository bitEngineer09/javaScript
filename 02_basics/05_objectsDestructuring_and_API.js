const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "hitesh"
}

// eski values ko hum dot operator se access kar sakte hai, but vo accha nahi lagta hai
// So new syntax -----DESTRUCTURING----
const {courseInstructor} = course
console.log(courseInstructor)

const {coursename} = course
console.log(coursename)

// supoose ab hume cousreInstructor bada naam lag ra hai so use naya naam bhi assign kar sakte hai
const {courseInstructor: Instructor} = course
console.log(Instructor)

//--------API--------------
// jab bhi apna kaam dusre ke sar par daal dena hota hai, use API kehte hai
// API in simple words are some backend values, and unhe hum kaise likhhte hai
// pehle values xml me aati thi, to vo complex hota tha
// ab values aati hai JSON me

//   {
//       // yehi JSON hai, like obbjects but koi naam nahi hota
//       // also keys are and values both written in ""
//       "name": "Hitesh",
//       "courseName": "Js in hhindi",
//       "price": "free"
//   }

// kayi baar Api are also in form of array of objects
    [
        {},
        {}
    ]