// sync func - you have to wait for it to complete
// async func - delegate the task to another thread

// till now, we have used sync func 
// setTimeout - async func 

// here, firstly the below console statement executes and then the
// findSumTill100 runs after 3 secs

function findSum(n) {
    let ans = 0;
    for (let i = 0; i < n; i++) {
      ans += i;
    }
    return ans;
  }
  
  function findSumTill100() {
    console.log(findSum(100));
  }
  
  setTimeout(findSumTill100, 3000);
  console.log("Hiiiii");

  // output - Hiiiii
  //            4950
  
  // what are common async funcs ?
  // setTimeout
  // fs.readFile - to read file from your filesystem
  // Fetch - to fetch some data from API endpoint
  // callbacks are really neccessary for async funcs 


// sync func example

function findSum(n) {
    let ans = 0;
    for (let i = 0; i < n; i++) {
      ans += i;
    }
    return ans;
  }
  
  function findSumTill50() {
    console.log(findSum(50));
  }
  
  function syncSleep(){
    for(i=0; i<100000; i++){
      i++;
    }
  }
  
  syncSleep();
  setTimeout(findSumTill50, 3000);
  console.log("Hiiiii");
  
  // after sometime because of syncSleep() func 
  // output - Hiiiii
  //            4950


  // filesystem module with sync and async 

  const fs = require("fs");
  // filesystem module
  
  fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data);
  });
  
  console.log("hi 1")
  
  // once a thread is started, it will be busy. After that, it will proceed to the other thread even if the task of that thread was completed earlier
  
  for(i=0; i<100000; i++){
    i++;
  }
  
  console.log("hi 2");


  // Promises
  // promises are more cleaner way of doing callbacks
  // pretty code

  // async func
const fs = require('fs');

function myReadFile() {
  return new Promise(function (resolve) { 
    fs.readFile("a.txt", "utf8", function(err, data) {
      resolve(data);
    });
  });
}

// callback function to call

function onDone(data) {
  console.log(data);
}

myReadFile().then(onDone);


// ugly code with callbacks

const fs = require('fs');

function myReadFile(cb) {
    fs.readFile("a.txt", "utf8", function(err, data) {
      createBrotliCompress(data);
  });
}

// callback function to call

function onDone(data) {
  console.log(data);
}
myReadFile(onDone);


// promise pending
// promise is like any other class
// promise is a class that is used to handle asynchronous operations

var d = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("Helllo");
  }, 2000);
});

function callback() {
  console.log(d);
}

console.log(d);
// .then gets called whenever the async function resolves
d.then(callback);

// .catch gets called whenever the call gets rejected
// If you are using async func then use setTimeout or other func, just 
// don't include console.log statement 

// Async await 

function AsyncFunc(){
  let p = new Promise(function(resolve) {
    setTimeout(function () {
      resolve("Tried Async func");
    }, 2000);
  });
  return p;
}

async function call() {
  let value = AsyncFunc()
  console.log(value);
}

call();

// output
// Promise { <pending> }

// -------------------------------------------
// no callbacks, no .then syntax 
// makes code more readable than promises and callbacks 

function AsyncFunc(){
  let p = new Promise(function(resolve) {
    setTimeout(function () {
      resolve("Tried Async func");
    }, 2000);
  });
  return p;
}

async function call() {
  let value = await AsyncFunc()
  console.log(value);
}

call();

// output
// Tried Async func

// We can't use await at top level bodies, we can only use await inside the async function


