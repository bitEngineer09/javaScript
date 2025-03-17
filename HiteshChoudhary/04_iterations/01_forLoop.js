// for

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best number");
//     }
//     console.log(element);
// }

//---------------Nested Loops----------------
// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`Inner loop value ${j} and inner loop ${i}`);
//         console.log(i + '*' + j + ' = ' + i*j );
//     }
// }


// Eg ->
// let myArray = ["flash", "batman"]
// console.log(myArray.length)
// for(let index= 0; index < myArray.length; index++) {
//     const ele = myArray[index]
//     console.log(ele)
// }


// break and continue

for (let i = 0; i < 10; i++) {
    if (i == 6) {
        console.log(`Detected ${i}`)
        break
    }
    console.log(" value of i is: " + i)
}

for (let i = 0; i < 10; i++) {
    if (i == 6) {
        console.log(`${i} is skipped`)
        continue
    }
    console.log(" value of i is: " + i)
}