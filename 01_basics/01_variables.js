const accountId = 2445;

let accountEmail = "gautam.columbian@gmail.com"
var accountPsw = "12345"
accountCity = "Faridabad" // aise bhi initialize kar sakte hai, but not recommended.

let accountState;  // not initialized vars ko js undefined maanti hai

/* var ->
    Prefer not to use var,
    cuz of issue in block scope and functional scope
*/

// accountId = 2  // constant values cannot be changed -> not allowed

console.log(accountCity)
accountEmail = "github@gmail.com"
console.log(accountEmail)

console.table([accountId, accountCity, accountEmail, accountPsw])