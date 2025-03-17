// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const month = "march"
// case & var ka datatype same hona chahiye
switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default: // agar kuch match nahi hua to default apply hoga
        console.log("default case match");
        break;
}