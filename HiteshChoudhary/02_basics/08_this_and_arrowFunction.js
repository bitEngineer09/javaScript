// this keyword refers current context
// context means values, matlab ki variables kya kya hold kar re hai

const user = {
    name: "Gautam",
    id: 6,
    isLoggedIn: true,

    welcomeMessage: function () {
        // this, yaha esi context ko refer kar ra hai
        console.log(`${this.name} is logged in: ${this.isLoggedIn}`)
    }
}

user.welcomeMessage()
user.name = "Sonu"
user.welcomeMessage() // name is changed

console.log(this)   // return an empty oject {} cuz it is currently referring to global context, yaha koi object nhi hai abhi
                    // yehi jab console me karenge to Window o/p aaega, Window is a global object
                    // Browser ke ander jo global obj hai vo hai Window object

// Note -> Pehle JS ko browser me hee execute kiyta jata tha
// browser me engine hota tha jo use execute karta tha
// but ab standalones engine bana diye hai browser se alag kar ke
// use fir alag alag naam de diye such as, NODE, DINO, BUN


//---------------------------------------------
function chai() {
    let username = "Happy"
    console.log(this.username) // o/p: undefined, ye nahi kar sakte kyuki yaha koi object thodi naa bana hai

    console.log(this) // bht kuch data print kar dega
}
chai()


//--------------Arrow Function--------------------
// function keyword hatake only write: () => { your logic }

const chai2 = () => {
    let username = "Sad"
    console.log(this.username)
    console.log(this) // {}
}

chai2() // undefined


//-----------Explicit return---------
// esme return lagana padta hai


//----------Implicit Return-----------
// implicit matlab hhai ki mai maan leta hu ki aapko return likhne ki jarurat nahi hai kyuki, ek hee line ka stmnt hai
// parenthesis me wra ar diya to return likhna padega

const chai3 = (num1, num2) => num1 + num2

const chai4 = (num1, num2) => (num1 + num2)

const chai5 = (num1, num2) => ({name: "Anand", id: 1})