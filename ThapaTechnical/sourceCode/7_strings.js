//* =========================================
//* String in JavaScript
//* =========================================

//? Strings in JavaScript are a fundamental data type that represents a sequence of characters.

// Note:
//? Strings created with single or double quotes works the same.
// There is no difference between the two.

//* String Properties:
//? length: Property that returns the length of the string (number of characters).

const str = "Hello,    World!";
console.log(str.length);
// including space n all




//* =========================================
//* Escape Character
//* =========================================

//? Escape Character: In JavaScript, the backslash \ is used as an escape character. It allows you to include special characters in a string.

// Code	   Result	    Description
// \'	    '	        Single quote
// \"	    "	        Double quote
// \\	    \	        Backslash

// let text = "My name is " Thapa Technical " & I am a Full Stack Developer. "; // not allowed

// let text =  "My name is ' Thapa Technical ' & \\ I am a \"Full Stack \" Developer. ";

// // let text = 'My name is " Thapa Technical " & I am a Full Stack Developer. ';

// console.log(text);




//* =========================================
//* String Search Methods
//* =========================================

//? 2: String Search Methods------

//? a:  indexOf(): 
// The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
// syntax
// indexOf(searchString)
// indexOf(searchString, position)

let text = "Vinod Thapa";
console.log(text.indexOf("thapa")); // -1
// The indexOf() method is case sensitive.
console.log(text.indexOf("Thapa"));

let strArr = Array.from(text);
console.log(strArr);

let strMap = strArr.map((curElem, index) => `${curElem} - ${index}`);
console.log(strMap);



//? b: lastIndexOf() : 
// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
// syntax
// lastIndexOf(searchString)
// lastIndexOf(searchString, position)

let text1 = "Hello JavaScript, welcome to our world best JavaScript course";
let index1 = text1.indexOf("JavaScript"); // 6
let index2 = text1.indexOf("JavaScript", 40); // 44 ---------> index dene par forward search karega
let index3 = text1.lastIndexOf("JavaScript"); // 44
let index4 = text1.lastIndexOf("JavaScript", 40); // 6 <--------- index dene par backward search karega
console.log("te",index4);



//? c:  search(): 
// The search() method searches a string for a string (or a regular expression) and returns the position of the match.
//* Returns the index number where the first match is found. Returns -1 if no match is found.

// *** in this we can use regular exp, but we can't use this in indexOf methods

let text2 = "Hello JavaScript, welcome to our world best JavaScript course";
let result = text2.search("Javascript") // -1
let result1 = text2.search("JavaScript") // 6 -> first position of that word
let result2 = text2.search(/JavaScript/) // this is regular exp
let result3 = text2.search(/JavaScript/g) // 6 // g means global -> ab pure program me se first occurring position bataega
let result4 = text2.search(/Javascript/i); // 6 // i flag use karne se hum caseSensitive bhi search kar sakte hai
console.log("this",result4);
//*👉 Important Tips
// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).
// They accept the same arguments (parameters), and return the same value



//? match() : 
// Returns an array of the matched values or null if no match is found.
// bht kuch data ye return karta hai
// ** todo here the js converts the normal text into regular expression text.match(/JavaScript/); without the g flag

let text3 = "Hello JavaScript, welcome to our world best JavaScript course";
let result5 = text3.match("Javascript");
let result6 = text3.match("JavaScript");

let result7 = text3.match(/Javascript/gi); // [ 'JavaScript', 'JavaScript' ]
console.log("this", result7);



//? matchAll() : 
// * Returns an iterator of all matches, providing detailed information about each match. 
// * Returns an empty iterator if no match is found.
//todo  here the js converts the normal text into regular expression text.match(/JavaScript/g); also adds the g flag at the end

let text4 = "Hello JavaScript, welcome to our world best JavaScript course";
let matchResult = text4.matchAll("javascript"); // Returns an empty iterator
let matchResult1 = text4.matchAll("JavaScript"); // // ye sabhi matched words ka info vala array return karega

console.log(...matchResult1);  // ye sabhi matched words ka info vala array return karega

for (let item of matchResult1) {
  console.log(item); // same as console.log(...matchResult1);
}

for (let item of matchResult1) {
  console.log(item[0]); // same as console.log(...matchResult1);
}


for (let index of matchResult1) {
  console.log(index.index);
}

for (let { index } of matchResult1) { // directly index print hoga
  console.log(index);
}



//? includes(): 
// Returns true if the string contains the specified value, and false otherwise.
// cannot be a regular exp
// Note: includes() is case sensitive. includes() is an ES6 feature.

let text5 = "Hello JavaScript, welcome to our world best JavaScript course";
// let includeResult = text.includes(/java/i); // not allowed
let includeResult1 = text5.includes("J"); // word ka single letter bhi dhoondh sakte hai
console.log("this is",includeResult1); // true



//? startsWith():
// The startsWith() method returns true if a string begins with a specified value.
// Otherwise it returns false:

let text6 = "Hello JavaScript, welcome to our world best JavaScript course";
let result9 = text6.startsWith("Helcome");
let result10 = text6.startsWith("Hello");
console.log(result10); // true

//* start position for the search can be specified
let result11 = text.startsWith("welcome", 18); // 18 ke baad se check hoga // false
let result12 = text.startsWith("welcome", 17); // 17 ke baad se check hoga // true
console.log(result11);



//? endsWith():
// The endsWith() method returns true if a string ends with a specified value. 
// Otherwise it returns false:

let text7 = "Hello JavaScript, welcome to our world best JavaScript course";
let result13 = text7.endsWith("welcome"); // false
let result14 = text7.endsWith("course"); // true
console.log(result13);  // fasle




//* =========================================
//* Extracting String Parts:
//* =========================================
//! Extracting String Parts:

//? String.prototype.substr() it is deprecated  ❌

//? a: slice() extracts a part of a string and returns the extracted part in a new string.
// syntax
// slice(start, end); // last index is not included

// Todo  JavaScript counts positions from zero.
//? First position is 0. Second position is 1.

let text8 = "Hello JavaScript, welcome to our world best JavaScript course";
let result15 = text8.slice(6); //JavaScript, welcome to our world best JavaScript course
let result16 = text8.slice(6, 15); // last index is not included 
console.log(result16); //JavaScrip


//  ** aise subString() hona chahiye tha but ye aise substring() hai

//? a: substring:
//  Extracts a portion of the string based on starting and ending indices.
//* camelCase is used to separate words, substring is not to be intended as Sub String but as Substring

// syntax
// substring(indexStart) // index starts with 0
// substring(indexStart, indexEnd)
// last index is excluded

//* substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring().

let text9 = "Hello JavaScript, welcome to our world best JavaScript course";
let result17 = text9.substring(-6) // return whole string in case of negative values
// let result17 = text9.slice(-6); // course // peeche se ginta hai
console.log(result17);

//! Homework
let text10 = "Hello JavaScript, welcome to our world best JavaScript course";
// let result18 = text10.substring(0); // start to end
let result18 = text10.substring(1); // 1 to end
// let result = text.substring(-5); // whole string
console.log(result18);

//! similarities
//todo  In both the slice() and substring() methods, the end parameter indicates the ending index up to which the extraction occurs, but the character at the end index is excluded from the extracted substring.




//* =========================================
//* Interview Question
//* =========================================
//! What is the output for the following code?

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.slice(1);
// let result = text.replace("H", "");
// let result = text.substring(1);

//? Optional
let result19 = text.replace("JavaScript", "Vinod");
let result20 = text.replaceAll("JavaScript", "Vinod");

console.log(result19);
console.log(result20);




//* =========================================
//* Extracting String Characters
//* =========================================
//! Extracting String Characters
// There are 3 methods for extracting string characters:

//? The charAt(position) Method
//? The charCodeAt(position) Method
//? The at(position) Method

//? charAT() : 
// The charAt() method returns the character at a specified index (position) in a string
let text11 = "Hello JavaScript, welcome to our world best JavaScript course";
let result21 = text11.charAt(6);
let result22 = text11.charAt(-6); // empty string
console.log(result21);



//? charCodeAt() : 
// The charCodeAt() method returns the code of the character at a specified index in a string. The method returns a UTF-16 code (an integer between 0 and 65535).
let text12 = "Hello JavaScript, welcome to our world best JavaScript course";
let result23 = text.charCodeAt(6); // ASCII value 
console.log(result23); // 84



//** ES2022 introduced the string method at():

//? The at()
// method returns the character at a specified index (position) in a string. 
// The at() method returns the same as charAt().
// negaitve index ka bhi pata kar sakte hai, in chatAt() we can't put negative index

let text13 = "Hello JavaScript, welcome to our world best JavaScript course";
let result24 = text13.at(-6);
console.log(result24); // c

//todo Note
// The at() method is a new addition to JavaScript.
// It allows the use of negative indexes while charAt() do not.
// Now you can use myString.at(-2) instead of charAt(myString.length-2).




//* =========================================
//* Replacing String Content:
//* =========================================
//! Replacing String Content:
//? replace() : The replace method is used to replace a specified value with another value.
const str1 = "Hello, World!";
const newStr = str1.replace("World", "JavaScript");
console.log(newStr); // Outputs: Hello, JavaScript!


//? Case-Insensitive Replacement: To perform a case-insensitive replacement, you can use the i flag in the regular expression.
let originalString = "Hello, World! How are you, World?";
let replacedString = originalString.replace(/world/gi, "vinod");
console.log(replacedString);

// NOTE-> For using reg exp in replaceAll global exp is necessary


//* =========================================
//* Other Useful Methods:
//* =========================================

//! Other Useful Methods:
//? toUpperCase() and toLowerCase(): 
// Converts the string to uppercase or lowercase.

const str2 = "JavaScript";
console.log(str2.toUpperCase()); // Outputs: JAVASCRIPT
console.log(str2.toLowerCase()); // Outputs: javascript


//? trim(): 
// Removes whitespace from both ends of the string.

const str3 = "   Hello, World!   ";
console.log(str3.length);

let trimStr = str3.trim();
console.log(trimStr);
console.log(trimStr.length);


//? split(): 
// Splits the string into an array of substrings based on a specified delimiter.

const str4 = "apple,orange,banana";
let strArr1 = str4.split(); // teeno ko as a single element of array return kar dega

// let strArr1 = str4.split("") // seprates each char with commas, even spaces also

// let strArr1 = str4.split(",") // [ 'apple', 'orange', 'banana' ]

// let strArr1 = str4.split(",").reverse() // [ 'banana', 'orange', 'apple' ]

// let strArr1 = str4.split(",").reverse().join(); // banana,orange,apple

console.log(strArr1);




//* =========================================
//* //! Interview Questions
//* =========================================

//! 1: Write a JavaScript function that prints the letters 'a' through 'z' in the console. You should use a loop to iterate through the letters and print each one on a new line.

console.log("a".charCodeAt(0)); // 97
console.log("z".charCodeAt(0)); // 122

for (let char = 97; char <= 122; char++) {
  console.log(String.fromCharCode(char));
}

//! 2: Write a function to count the number of vowels in a string?

const countVowels = (str) => {
  const vowels = "aeiou";
  let count = 0;
  for (let char of str) {
    console.log(char);
    // console.log(str.includes(char));
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};
  console.log(checkAllVowelPresentOrNot("my name u is vinod @  thapa"));
console.log(countVowels("Hello a i o u world"));

//! 3: Write a function to check if all the vowels presents in a string or not?

const checkAllVowelPresentOrNot = (str) => {
  const vowels = "aeiou";
  for (let char of vowels) {
    // console.log(char);
    // console.log(str.includes(char));
    if (!str.includes(char)) {
      return false;
    }
  }
  return true;
};

console.log(checkAllVowelPresentOrNot("my name u is vinod @  thapa"));

//! 4: Write a JavaScript function to check if the given sting is Pangram or not?

const pangramChecker = (str) => {
  let inputArr = str.toLowerCase().split("");
  // console.log(inputArr);
  // // console.log("z".charCodeAt());
  const values = inputArr.filter(
    (curElem) =>
      curElem.charCodeAt() >= "a".charCodeAt() &&
      curElem.charCodeAt() <= "z".charCodeAt()
  );
  // console.log(values);

  return new Set(values).size === 26;

  // return [...new Set(values)].length === 26;
};

console.log(pangramChecker("The quick  @ brown fox jumps ove the lazy dog"));
