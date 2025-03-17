// All DOM selectors
document.getElementsByClassName
document.getElementsByName
document.getElementsByTagName
// or bhi bht saare hai do explore
document.getElementById('title') // id as a parameter
document.getElementById('title').id // shows id name

// document.getElementById('title').class // esse class nahi bataega, cuz behind the doc use className samjhta hai

document.getElementById('title').className
document.getElementById('title').getAttribute('id') // attribute itself pass karte hai, ki konsa attribute chahiye, suppose class likha hai to class attribute kaa naam dega
document.getElementById('title').setAttribute('class', 'test') // always overrides
document.getElementById('title').setAttribute('class', 'test heading') // esse dono set ho jaaega -> class = "test heading" 

//----------------------------------------------------------------------------------------
// we can also store these in variables
const title = document.getElementById('title')
// ab hum title variable se dot operator se bht functions access kar sakte hai
// hum use ab html ke jaise styles bhi sakte hai
title.style.backgroundColor = "green"
title.style.padding = "15px"
title.style.borderRadius = "10px"

// ye content ke ander jo bhi HTML content defined hui hongi, vo bhi show karta hai
title.innerHTML 
// ----> 'DOM learning on Chai or Code <span style="display: none">test text</span>'

// textContent shows all the content even if they are hidden
title.textContent 
// ----> 'DOM learning on Chai or Code test text'

// innerText shows only those values that are readable, means it doesn't show hidden text
// vahi dikhaega jo sirf visibile hai webPage pe
title.innerText 
// ----> 'DOM learning on Chai or Code'


//------------QUERY SELECTOR-------------------

// SELECTORS acche se padh le
// * css selectors passed hai as input 

// element selector
document.querySelector('h2')  // pehle vala h2 dega

// id selector
document.querySelector('#title')  // <h1 id="title" class="heading">…</h1>

// class selector
document.querySelector('.heading')
document.querySelector('input[type="password"]')  // <input type="password" id="pswd" name="password" value>

// EG -> 
const myLi = document.querySelector('ul')
const turnGreen = myLi.querySelector('li')
turnGreen.style.backgroundColor = "red"
turnGreen.style.pading = "10px"
turnGreen.innerText
turnGreen.innerText = "hello World" // inner Text bhi change kar sakte hai


//------------QUERY SELECTORALL-------------------

// * returns NodeList
// * returns all element descendants of node that match selectors.
document.querySelectorAll('li')
// * it returns node, ab hum pata kar sakte hai ki vo kis datatype ka hai taaki uske methods apply kar sake 
// * to hum prototype ke ander jaake dekhenge ki konse methods available hai, us hisaab se pata chalta hai
// * esme foreach hai but map nahi, it means it is not an array
// * array vali functionalities use krne ke liye NODELIST ko ARRAY me convert karna padega
// NOTE -> NodeList And HTMLCollection are not pure array

const temp = document.querySelectorAll('li')
temp.style.color = "yellow" // give error cuz, konse vale li pe apply karna hai ye to bataya nahi
temp[1].style.color = "yellow"

temp.forEach((item) =>
{
    item.style.backgroundColor = "pink"
})


//------------getElementsByClassName---------------------

// * returns HTMLCollection
const tempClassList = document.getElementsByClassName('list-item')
tempClassList.forEach((li) => {
    console.log(li);
}) // will not work, cuz it is not an array

// now converting in array
// ------Array.from(tempClassList)

const myConvertedArray = Array.from(tempClassList)

