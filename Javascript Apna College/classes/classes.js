// const student = {
//     fullName: "Shivani KK",
//     marks: 94.2,
//     printMarks: function() {
//         console.log("marks = ", this.marks);
//     },
// };

// prototype : Ek object ke ander ek aur object with special properties

// const employee = {
//     calcTax(){
//     console.log("Tax rate is 10%");
//     },
// };

// const karan = {
//     salary: 5000,
// };

// const karan2 = {
//     salary: 9800,
//     calcTax(){
//         console.log("Tax rate is 20%");
//     }
// };

// // If object & prototype have same func, object's func will be used 
// karan.__proto__ = employee
// karan2.__proto__ = employee

// Classes
// class ToyotaCar {
//     constructor(model, mileage) {
//         console.log("Creating a new object");
//         this.model = model;
//         this.mileage = mileage;
//     }
//     start() {
//         console.log("start");
//     }

//     stop() {
//         console.log("stop");
//     }

//     setBrand(brand) {
//         this.brand = brand;
//     }
// }

// let tesla = new ToyotaCar("model x", 70);
// console.log(tesla);
// let lexus = new ToyotaCar("lexus", 20);
// console.log(lexus);

// Inheritance
// Child and parent has same properties and methods. Child methos is used, it is method overidding
// class Person{
//     constructor() {
//         this.species = "homo sapiens";
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
//     work(){
//         console.log("Do your work");
//     }
// }

// class Engineer extends Person { 
//     work() {
//         console.log("Solve problems and build something);                                          xlve problems, build solutions");
//     }
// }

// class Docter extends Person {
//     work(){
//         console.log("Treat Patients");
//     }
// }

// let obj1 = new Engineer();
// let obj2 = new Docter();

// super keyword
// child class ko he  derived class kehte hai 
// Must call super constructor in derived class before accessing 'this' or returning from derived constructor   
// class Person{
//         constructor(name) {
//             this.species = "homo sapiens";
//             console.log("Parent constructor");
//         }
//         eat(){
//             console.log("eat");
//         }
//     }

// class Engineer extends Person { 
//     constructor(branch) {
//         console.log("Child constructor");
//         super(); //to invoke parent class constructor 
//         this.branch = branch;
//         console.log("Child constructor ends");
//     }
//         work() {
//             console.log("Solve problems and build something");   
//         }
//     }

// let eo1 = new Engineer("chemical engineer");

// class Person{
//     constructor(name) {
//         this.species = "homo sapiens";
//         this.name = name;
//     }
//     eat(){
//         console.log("eat");
//     }
// }

// class Engineer extends Person { 
// constructor(name) {
//     super(name); //to invoke parent class constructor 
// }
//     work() {
//         super.eat();
//         console.log("Solve problems and build something");   
//     }
// }

// let eo2 = new Engineer("Shivani");

// Practise Question 1
// You are creating a website for your college. Create a class User with 2 properties, name &
// email. It also has a method called viewData( ) that allows user to view website data.

// let DATA = "Secret Info";

// class User{
//     constructor(name, email){
//         this.name=name;
//         this.email=email;
//     }
//     viewData(){
//         console.log(DATA);
//     }
// }

// let user1 = new User("Anshuman", "anshuj@5.gmail.com");
// let user2 = new User("Shubham", "shubh@8.gmail.com");
// let teacher1 = new User("Dean", "dean@gmail.com");

// Practise Question 2
// Create a new class called Admin which inherits from User. Add a new method called
// editData to Admin that allows it to edit website data

// class Admin extends User{
//     constructor(name, email){
//         super(name, email);
//     }
//     editData(){
//         DATA = "New Secret Information";
//     }
// }

// let admin1 = new Admin("admin", "admin@gmail.com");

// Error Handling
// try-catch
// let a = 5;
// let b = 6;
// console.log("a = ", a);
// console.log("b = ", b);
// console.log("a + b = ", a+b);
// try{
// console.log("a * c", a*c);
// } 
// catch (err){ // error
//     console.log(err);  
// }
// console.log("a + b", a+b);
// console.log("a + b", a+b);
// console.log("a + b", a+b);

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Callback
// Sync in JS

// console.log("1");
// console.log("2");
// setTimeout(() => {
//     console.log("JS");
// }, 4000); // timeout
// console.log("3");
// console.log("4");

// Async and Sync programming in JS is like Sync mein execution is orderwise. 
// But Async mein flow of code break nahi hota hai. The code that takes the least time to execute are executed first, then the others which are more time consuming. 

// Callbacks
// If func is passed as an argument to another function is called callbacks

// function Sum(a,b){
//     console.log(a + b);
// }
// function calculator(a, b, SumCallback) {
//     SumCallback(a,b);
// }
// calculator(1, 2, Sum);

// const hello = () => {
//     console.log("hello");
// };
// setTimeout(hello, 3000); // yeh bhi tho callback he huva na 

// Disadvantage = Callback Hell
/*
function getData(dataId, getNextData){
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData){
        getNextData();
        }
    }, 2000);
}

// callback hell: This is the nested callbacks
getData(1, () => {
    console.log("Fetching data 2");
    getData(2, () => {
        console.log("Fetching data 3");
            getData(3,  () => {
                console.log("Fetching data 4");
                getData(4);
        });
    }); // If we directly pass the argument then error is generated. 
        // Like baadmein wala argument pehle execute hoga than pehle wala
});
*/

// Promises
// It is for "eventual" completion of task. Object in JS
// resolve - work done, reject - work done but faced issues
// Promise is of 3 types pending, fulfilled (resolved) and rejected 
/*
let promise = new Promise((resolve, reject) => { 
    console.log("I am a promise");
    resolve(321);
}); 

function getData(dataId, getNextData){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    // console.log("data", dataId);
    // resolve("success");
    reject("error");
    if(getNextData){
    getNextData();
    }
    }, 5000); 
    })
}

// .then is used to get the promise which is resolved
// .catch is used to get the promise which is rejected 
const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am promise");
        // resolve("success");
        reject("server error");

    }); 
};

// let pro = getPromise();
//     pro.then((res) => {
//     console.log("Promise fulfilled", res);
// })
let pro = getPromise();
    pro.catch((err) => {
    console.log("promise rejected", err);
})
*/

/*
// In the above dono promises saath mein resolve huve but to do that one after the other, chaining use karte hai
// ek then ke ander dusra then
function asynFunc1() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("data1");
    resolve("Hogaya");
    }, 4000);    
    });
}

function asynFunc2() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("data2");
    resolve("Hogaya");
    }, 6000);    
    });
}

console.log("Fetching data1........")
let p1 = asynFunc1();
p1.then((res) => {
    console.log(res);
})

console.log("Fetching data2........")
let p2 = asynFunc2();
p2.then((res) => {
    console.log(res);
})
*/

/*
function asynFunc1() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("data1");
    resolve("Hogaya");
    }, 4000);    
    });
}

function asynFunc2() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("data2");
    resolve("Hogaya");
    }, 4000);    
    });
}

console.log("Fetching data1........");
let p1 = asynFunc1();
p1.then((res) => {
    console.log(res);
    console.log("Fetching data2........");
    let p2 = asynFunc2();
    // p2.then((res) => {
    //     console.log();    
    // })
    asynFunc2().then((res) => {});
});
*/

// Async-Await
// Async func always returns a promise 
/*
async function hello() {
    console.log("hello");
}
// await is used to pause the surrounding execution and wait until the promise has arrived

function api(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("weather data");
        resolve(200);
        }, 2000);
    });
}

async function getWeatherData(){
    await api();
    await api();
}

//await ko use karna hai tho async func banana padega or else will face an error 
function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("succes");
        }, 2000);
    });
}

async function getAllData() {
    console.log("Getting Data 1");
    await getData(1);
    console.log("Getting Data 2");
    await getData(2);
    console.log("Getting Data 3");
    await getData(3);
    console.log("Getting Data 4");
    await getData(4);
    console.log("Getting Data 5");
    await getData(5);
}

function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("succes");
        }, 2000);
    });
}

// IIFE directly executes the function without inserting the func
(async function () {
    console.log("Getting Data 1");
    await getData(1);
    console.log("Getting Data 2");
    await getData(2);
    console.log("Getting Data 3");
    await getData(3);
    console.log("Getting Data 4");
    await getData(4);
    console.log("Getting Data 5");
    await getData(5);
})();
*/
