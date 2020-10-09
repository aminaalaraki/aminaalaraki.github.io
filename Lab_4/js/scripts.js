const fullName = "Amina AlAraki"; // 12 characters in name...not including space
// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"
let header = document.querySelector(".header");
header.innerHTML = fullName + "'s Lab 4 ";

// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name
const pOne = document.createElement("p1"); 
const pTwo = document.createElement("p2");
pOne.className = "content1";
pTwo.className = "content2"; 
let newPar = document.querySelector(".content");
newPar.append(pOne);
newPar.append(pTwo);

// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).
let lenName = document.createTextNode("My name has " + fullName.length +" characters");
pOne.append(lenName);

// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name
let thirdChar = document.createTextNode(fullName.charAt(2).toUpperCase());
pTwo.append(thirdChar);

// 6 Add a new line to your second paragraph
let newLine = document.createElement("br");
pTwo.append(newLine);

// 7 Return the final three characters of your last name to that new line
let lstLetters = document.createTextNode(fullName.substr(-3));
pTwo.append(lstLetters);

// 8 Substring your first and last name into two separate variables
const firstName = fullName.substring(0, 5);
const lastName = fullName.substring(7, 12);

// 9 Add the total length of your first and last names together
const fullNameLength = myFirstName.length + myLastName.length;

// 10 Display that total next to your name in your header
document.querySelector(".header").append("The length of my name is " + fullNameLength);