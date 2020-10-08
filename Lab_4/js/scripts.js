let myFullName = "Amina AlAraki"; // 12 characters in name...not including space
// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"
let header = document.querySelector(".header");
header.innerHTML = myfullName + "'s Lab 4 ";

// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name
let paragraphOne = document.createElement("p1"); 
let paragraphTwo = document.createElement("p2");
paragraphOne.className = "content1";
paragraphTwo.className = "content2"; 
let newParagraph = document.querySelector(".content");
newParagraph.append(paragraphOne);
newParagraph.append(paragraphTwo);

// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).
let mylengthName = document.createTextNode("My name has " + myfullName.length +" characters");
paragraphOne.append(mylengthName);

// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name
let thirdCharacter = document.createTextNode(myfullName.charAt(2).toUpperCase());
paragraphTwo.append(thirdCharacter);

// 6 Add a new line to your second paragraph
let newbreak = document.createElement("br");
paragraphTwo.append(newbreak);

// 7 Return the final three characters of your last name to that new line
let mylastLetters = document.createTextNode(myfullName.substr(-3));
paragraphTwo.append(lastLetters);

// 8 Substring your first and last name into two separate variables
let myfirstName = myfullName.substring(0, 5);
let mylastName = myfullName.substring(7, 12);

// 9 Add the total length of your first and last names together
let mynameLength = myfirstName.length + mylastName.length;

// 10 Display that total next to your name in your header
document.querySelector(".header").append("The length of my name is " + mynameLength);