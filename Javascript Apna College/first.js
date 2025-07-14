// Variables and Data types
// console.log("Ohyeah");
// {const age =25;
// name = "Rahul";
// }

// collection of values is object
// key:value
// const Stud =
// {
//     fullName : "Rohan",
//     age : 86,
//     isPass : true
// }
// console.log(Stud["age"])
// console.log(Stud.fullName)
// Stud.age = Stud.age + 1;
// console.log(Stud["age"])

// const product = 
// {
//     title: "Ocean gel Pen",
//     rating: 4,
//     offer: 5,
//     price: 200
// }
// console.log(product)

// const Insta_profile = 
// {
//     profilename: "shradhakhapra",
//     followers: 599760,
//     IsFollow: true,
//     job_title: "Entrepreneur",
//     description: "Apna College | Ex-Microsoft, DRDO"
// }
// console.log(Insta_profile);
// console.log(Insta_profile.job_title);
// console.log(typeof(Insta_profile.job_title));
// console.log(Insta_profile["profilename"]);

//----------------------------------------------------------------

// Operators and Comments

// console.log(34 + 87);
// console.log(32>93);

// let color;
// let mode = "light-mode";

// if(mode === "dark-mode"){
//     color = "black";
//     console.log(color);
// }
// else{
// console.log("light-mode");
// color = "white";
// console.log(color);
// }

// let num = prompt("Used for input");
// console.log(num);

// Prac 1
// let num = prompt("Enter a num: ");
// console.log("Checking if the number is a multiple of 5");
// if(num%5 == 0){
//     console.log("It is a multiple of 5");
// }
// else{
//     console.log("Not a multiple of 5");
// }

// Prac 2
// let score = 60;
// let grade;
// if(score > 80 && score<=100){
//     grade="A";
// }
// else if(score > 70 && score<=80){
//     grade="B";
// }
// else if(score > 60 && score<=70){
//     grade="C";
// }
// else if(score > 50 && score<=60){
//     grade="D";
// }
// console.log("The final grade is:", grade);

//----------------------------------------------------------------

// Loops and Conditionals
// for(i=1; i<=5; i++){
//     console.log("JS");
// }

// for-of loop
// let str = "Ohyeah";
// //   var-name  string-variable 
// for(let i of str){
//     console.log("i=",i);
// }

// for-in loop --> for object to return keys
// let Stud =
// {
//     fullName : "Rohan",
//     age : 86,
//     isPass : true
// }
// for(let key in Stud){
//     console.log("key:",key, "|", "value:", Stud[key]);
// }

// Prac 1 Print all even no.s from 0 to 100
// for(i=0; i<=100; i++){
//     if(i%2==0){
//         console.log("Even:",i);
//     }
// }

// Prac 2 
// Create a game where you start with any random game number. 
// Ask the user to keep guessing the game number until the user enters correct value.

// let correctNum = 25;
// let enterNum = prompt("Guess the correct Number:");
// while(enterNum!=correctNum){
//     enterNum= prompt("Try again: ");
// }
// console.log("Congo! Number is correct");

// Strings
// let star = "Ohyeah";
// console.log(star.length);
// console.log(star[1],star[3],star[2]);

// Template Literals --> Special type of string | `` --> Backtick
// let sentence = `This is a template literal`;
// console.log(sentence);
// console.log(typeof(sentence));

// let object =
// {
//     name: "Silk Saree",
//     cost: 234,
//     category: "Traditional Clothing"
// }
// `text ${} text` --> String Interpolation | escape character = \n, \t
// let output = `The product is: ${object.name} of ${object.cost} rupees belongs to ${object.category}`;
// console.log(output);

// String methods 
// let star = "Ohyeah";
// console.log(star.toUpperCase());
// console.log(star.toLowerCase());
// console.log(star.trim());

// Prac ques 
// Prompt the user to enter their full name. Generate a username for them based on the input.
// Start username with @, followed by their full name and ending with the fullname length.

// username = prompt("Enter the fullname: ");
// strAdd = "@";
// FinalUsername = strAdd.concat(username);
// console.log(`Username: ${username}, username should be: ${FinalUsername}`);

//----------------------------------------------------------------------------------------

// Arrays
// let marks = [ 96, 75, 48, 83, 66 ];
// // console.log(marks[0]);
// for(i=0; i<marks.length; i++){
//     console.log(`Element ${i+1}: ${marks[i]}`);
// }

// Prac ques 1
// let mark = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for(i=0; i<mark.length; i++){
//     sum+=mark[i];
// }
// Avg_sum = sum/mark.length;
// console.log(`The average marks of the class is ${Avg_sum}`);

// Prac ques 2 
// let itemPrices = [250, 645, 300, 900, 50];
// finalPrice = [];
// for(i=0; i<itemPrices.length; i++){
//     finalPrice[i] = itemPrices[i] - 0.1 * itemPrices[i];
// }
// for(i=0; i<finalPrice.length; i++){
//     itemPrices[i] = finalPrice[i];
// }
// console.log("Final list: ");
// for(i=0; i<itemPrices.length; i++){
//     console.log(`Element ${i+1} : ${itemPrices[i]}`);
// }

// let heroes = ["Ironman", "Hulk", "Thor", "Batman", "Loki", "Deadpool", "Aquaman"];
// heroes.push("Superman");
// console.log(heroes);
// console.log(heroes.pop());
// console.log(heroes.toString());
// heroes.unshift("Venom");
// let val = heroes.shift();
// console.log(heroes);
// let sliced = heroes.slice(0,3);
// console.log(sliced);
// console.log(heroes);
// let spliced = heroes.splice(3,2,"Spiderman", "Wonderwoman");
// console.log(spliced);
// console.log(heroes);

// Prac ques
// Qs. Create an array to store companies -> “Bloomberg” , “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix”
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end
// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// let delFromStart = companies.shift();
// console.log(delFromStart);
// console.log(companies);
// let spliced = companies.splice(1,1,"Ola");
// console.log(companies);
// companies.push("Amazon");
// console.log(companies);

//-------------------------------------------------------------------------------------------------------------------------

// Functions

// function sum(a, b) {
//     return a+b;
// }

// Modern JS
// const arrowMul = (a,b) => {
//     return a*b;
// }

// Prac ques 1
// Create a function using the “function” keyword that takes a String as an argument &
// returns the number of vowels in the string.

// function VowelCount(str){
//     let count = 0;
//        for(let i=0; i<str.length; i++){
//         let strSub = str[i];
//             if(strSub == 'a' || strSub == 'e' || strSub == 'i' || strSub == 'o' || strSub == 'u' || strSub == 'A' ||  strSub == 'E' ||  strSub == 'I' ||  strSub == 'O' ||  strSub == 'U'){
//                 count++;
//             }
//        }
//        return count;
// }

// const countVow = (str) => {
//     let count = 0;
//            for(let i=0; i<str.length; i++){
//             let strSub = str[i];
//                 if(strSub == 'a' || strSub == 'e' || strSub == 'i' || strSub == 'o' || strSub == 'u' || strSub == 'A' ||  strSub == 'E' ||  strSub == 'I' ||  strSub == 'O' ||  strSub == 'U'){
//                     count++;
//                 }
//            }
//            return count;
// }

// forEach loop in Arrays  --> method
// In JS function can also be used as a parameter and function can be returned --> Higher order function
// A callback is a function passed as an argument to another function

// let arr = [1,2,3,4,5];
// let sum=0;
// arr.forEach(function printVal(val){ // val at each index
//     sum+=val;
//     console.log(sum);
// })

// let arr = ["yellow", "black", "blue"];
// arr.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(), idx, arr);
// })

// let arr = [1,2,3,4,5];
// arr.forEach((val) => { // val at each index
//     console.log(val * val);
// })

// Prac 1 
// We are given array of marks of students. Filter our of the marks of students that scored 90+.
// let arr = [41,92,83,94,65];
// let newArr = arr.filter((val) => {
//     return val > 90
// })

// Prac 2 
// Take a number n as input from user. Create an array of numbers from 1 to n.
// let n = prompt("Enter n: ");
// let arr = [];
// for(i=1; i<=n; i++){
//         arr[i-1] = i;
//     }
// console.log(arr);

// Prac 3
// Use the reduce method to calculate sum of all numbers in the array.
// let arr =[2,6,7,8,9,4];
// let initial=0;
// const SumOfArr = arr.reduce((prev, curr) => prev + curr, initial)
// console.log(SumOfArr);

// Prac 4
// Use the reduce method to calculate product of all numbers in the array.
// let arr =[2,6,7,8,9,4];
// let initial=1;
// const ProdOfArr = arr.reduce((prev, curr) => prev*curr, initial)
// console.log(ProdOfArr);

// 6:01:11