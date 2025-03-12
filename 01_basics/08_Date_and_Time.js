// Dates

let myDate = new Date()
console.log(typeof myDate) // object

// apni need ke according bht saare methods hi date print karne ke liye.....
console.log(myDate) // 2025-03-12T12:02:50.142Z -> not easily readable
console.log(myDate.toString()) // Wed Mar 12 2025 17:33:21 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()) // Wed Mar 12 2025
console.log(myDate.toLocaleString()) // 12/3/2025, 5:34:06 pm
console.log(myDate.toJSON()) // 2025-03-12T12:04:40.802Z
console.log(myDate.toLocaleDateString()) // 12/3/2025
console.log(myDate.toISOString()) // 2025-03-12T12:05:09.804Z
console.log(myDate.toLocaleTimeString()) // 5:35:29 pm
console.log(myDate.toUTCString()) //Wed, 12 Mar 2025 12:05:42 GMT

// Create own Date
// way 1
let createDate = new Date(2025, 2, 13) // (yyyy, moth_index, dd)
                                                                // Month index start from 0
console.log(createDate) // 2025-03-12T18:30:00.000Z
console.log(createDate.toLocaleString()) // 13/3/2025, 12:00:00 am

// way 2
let date = new Date(2025, 2, 13, 5,3) // (yyyy, moth_index, dd, hours, minutes)

// way 3
let othDate = new Date("2025-03-14") // (yy-mm-dd)
console.log(othDate.toLocaleString()) // 14/3/2025, 5:30:00 am

// way 4
let othsDate = new Date("01-03-2025") // (mm-dd-yy)
console.log(othsDate.toLocaleString()) // 3/1/2025, 12:00:00 am
//-------------------------------------------------------------------------------

let myTimeStamp = Date.now()
console.log(myTimeStamp) // 1 Jan 1970 UTC se abhi tak ke total milliseconds

let date2 = new Date("12-03-2025")
console.log(date2.getTime()) // given date tak ke milliseconds print hoga

console.log(Date.now()) // time in milliseconds

console.log(Math.floor(Date.now() / 1000))

let taareek = new Date();
console.log(taareek.getMonth()) // 2 {abhi March chal ra hai, monthIndex 0 se start hota hai}
console.log(taareek.getHours())
console.log(taareek.getDay()) // 0-sunday so, 3-Wed
// EXPLORE

//---------------------------------------------------------------------------------
taareek.toLocaleString('default', {
    weekday: "long"
})