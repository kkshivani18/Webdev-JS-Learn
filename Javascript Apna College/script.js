// DOM -> Document Object model

// let heading = document.getElementById("heading");
// console.dir(heading);

// let Classheading = document.getElementsByClassName("ClassHeading");
// console.dir(Classheading);

// let button = document.getElementById("buttonbagr");
// console.dir(button)

// let para = document.getElementsByTagName("p");
// console.dir(para);

// let elements = document.querySelectorAll("p")
// console.dir(elements);

// let HeadingEle = document.querySelector("#heading")
// console.dir(HeadingEle);

// let ClassEle = document.querySelectorAll(".ClassHeading")
// console.dir(ClassEle);  

// let buttonEle = document.querySelector("#buttonbagr")
// console.dir(buttonEle);  

// console.log(document.querySelector("div"));

// let div = document.querySelector("div")
// console.dir(div);

// let h2 = document.querySelector("h2");
// console.dir(h2);

// Prac ques 1
// Qs. Create a H2 heading element with text - “Hello JavaScript”.
// Append “from Apna College” to this text using JS.
// h2.innerText = h2.innerText + " from Apna College";

// Prac ques 2
// Qs. Create 3 divs with common class name - “box”.
// Access them & add some unique text to eachof them.

// let divs = document.querySelectorAll(".box")
// console.log(divs);
// console.log(divs[0].innerHTML = divs[0].innerHTML + " 1");
// console.log(divs[1].innerHTML = divs[1].innerHTML + " 2");
// console.log(divs[2].innerHTML = divs[2].innerHTML + " 3");

//----------------------------------------------------------------------

// DOM Part - 2 
// div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newClass"));

// Insert Elements
// For inserting an element you have to create one 
// let newBtn = document.createElement("button");
// newBtn.innerText = "Select";
// console.log(newBtn);

// div = document.querySelector("div");
// div.append(newBtn); // adds at the last 
// div.prepend(newBtn); // adds at the beginning
// div.before(newBtn); // adds before the node (outside)
// div.after(newBtn); // adds after the node (outside)
 
// let heading = document.createElement("h1");
// heading.innerHTML = "<u>JS is FUN!</u>";
// document.querySelector("body").prepend(heading);
// heading.remove(); // to remove element

// Prac 1
// let newbtn = document.createElement("button");
// newbtn.innerHTML = "<i>Click me</i>"; 
// newbtn.style.backgroundColor = "red";
// newbtn.style.color = "white";
// document.querySelector("body").prepend(newbtn);
// console.log(newbtn);

// Prac 2
// let para = document.querySelector("p");
// para.classList.add("newClass");
// We can use the above to add the newClass properties 
// without eradicating the older class properties. For this we use classList. 

//----------------------------------------------------------------------------------

// Events

// Event Handling 

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a=25;
//     a++;
//     console.log(a);
// };

// In Events, the inline code in html is written and JS code is present for the event too.
// Then JS code for event is runned.

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt) => {
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// };

// let div = document.querySelector("div");
// div.onmouseover = (evt) => {
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// };
 
// Event Listeners
// With the event listeners we can allot multiple tasks to the same event 

// btn1.addEventListener("click", (evt) => {
    // console.log("button was clicked");
    // console.log("Handler 1");
    // console.log(evt); // event object 
// });

// btn1.addEventListener("click", () => {
//     console.log("Handler 2");
    // console.log(evt.type);
// });

// const handler3 = () => {
//     console.log("Handler 3");
// };

// btn1.addEventListener("click", handler3);

// btn1.addEventListener("click", () => {
//     console.log("Handler 4");
// });

// For removing the event listener we need to save the function
// We need to pass the funstion in the callback to add the event listener and to remove it too. 

// btn1.removeEventListener("click", handler3);

// Prac ques 
// Q) Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.
// let mode = document.querySelector("#mode");
// let body = document.querySelector("body");
// let currMode = "light"; 
// Alt 1
// mode.addEventListener("click", () => {
//     console.log("Changing the mode");
//     if(currMode === "light") {
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     } else{
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
//     console.log(currMode);
// });

// Alt 2
// mode.addEventListener("click", () => {
//     console.log("Changing the mode");
//     if(currMode === "light") {
//         currMode = "dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }
//     else{
//         currMode = "light";
//         body.classList.add("light");
//     }
//     console.log(currMode)
//     });

// Prac 2
// let div = document.querySelector("div");
// div.onmouseover = () => {
//     alert("The cursor on box");
// };
// div.onmouseleave = () => {
//     alert("The cursor not on box");
// }

