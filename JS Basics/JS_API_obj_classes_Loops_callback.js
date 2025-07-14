function getLength(str) {
  console.log("String: ", str);
  console.log("Length: ", str.length);
}
getLength("November");
console.log("\n");

// const { log } = require("console");
// const { copyFileSync } = require("fs");

function findIndexOf(str, target) {
  console.log("String: ", str);
  console.log("Length: ", str.indexOf(target));
}
findIndexOf("Halloween is over, we're in November", "over");
console.log("\n");

function lastindexOf(str, target) {
  console.log("String: ", str);
  console.log("Index: ", str.lastIndexOf(target));
}
lastindexOf("Hello world world", "world");
console.log("\n");

function getSlice(str, start, end) {
  console.log("String: ", str);
  console.log("After Slice: ", str.slice(start, end));
}
getSlice("Hello world", 1, 6);
console.log("\n");

let ans = "helloworldrohan".slice(1, 5);
console.log(ans);
// let ans2 = ans.substring(1, 5);
console.log(ans2);

// substr is deprecated, use slice instead

function cutIt(str, startIndex, endIndex) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i >= startIndex && i < endIndex) {
      newStr = newStr + str[i];
    }
  }
  return newStr;
}

// const val = "harkirat singh";
let ans2 = ans.substring(1, 5);
console.log(ans2);
console.log(cutIt(val, 2, 5));

const val = "harkirat singh";
const words = val.split("a");
console.log(words);

// trim to trim the white spaces

Arrays
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function logThing(str){
  console.log(str);
}

array.forEach(logThing);

// callbacks, Map, Filter. Find, Sort

const dog = {
  name: "Tommy ",
  legCount: 4,
  speaks: "bhow bhow ",
};

const cat = {
  name: "Billy ",
  legCount: 4,
  speaks: "meow meow ",
};

console.log("Animal: " + dog["name"] + dog["speaks"]);
console.log("Animal: " + cat["name"] + cat["speaks"]);

// better approach
function printStr(animal){
  console.log("Animal: " + animal["name"] + animal["speaks"]);
}

printStr(cat);

Class
class Fruit {
  constructor(name, color, taste) {
    this.name = name;
    this.color = color;
    this.taste = taste;
  }

  static stcFunc() {
    console.log("Static Functions alag hote hai");
  }

  names() {
    console.log("Hi, I am " + this.name);
  }
}

let fruit1 = new Fruit("Apple", "Red", "Sweet");

// object accessing the func
console.log(fruit1.names());
console.log("\n");

// class static funcs ko call laga sakta hai
console.log(Fruit.stcFunc());

Date, month, year
const currDate = new Date();
console.log(currDate.getMonth() + 1);
console.log(currDate.getTime() + 1);
console.log(currDate.getTime() + 1);

function currentTimePrint (){
  console.log(new Date.getTime())
}

// JSON

const user = {
  name: "Rohan",
  gender: "male",
};

const final = JSON.stringify(user);
console.log(final);

// str to object
const str = JSON.parse(final);
console.log(str);

const obj = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  };
  
  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign() ", newObj);

  //---------------------------------------------------------------------------------------------------

  // writing the funciton and calling it back

  function sq(n){
    return n*n;
  }
  
  function prodOfsqaures(a, b){
    const val1 = sq(a);
    const val2 = sq(b);
  
    return val1 * val2;
  }
  
  let answer = prodOfsqaures(5, 3);
  console.log(ans);

// doing the above using callback

function sq(n){
  return n*n;
}

function prodOfsquares(a, b, callback){
  const val1 = callback(a);
  const val2 = callback(b);

  return val1 * val2;
}

const answer2 = prodOfsquares(5, 3, sq);
console.log(ans);

// anonymous function
// whole func defined in it but can't be used from outside
const answer3 = prodOfsquares(5, 3, function sq(n){
  return n*n;
  });
  console.log(ans);