// const express = require("express");
// const app = express(); 
// // const port = 3000;
// const port = process.env.PORT || 3000
// app.use(express.json());

// app.get('/', function(req, res) {
//     res.send('<i>Getting a request</i>');
// });

// sending get req
// app.get('/', function(req, res) {

//     let a=0;
//     console.log("request has been reached");
//     for(let i=0; i<1000000000; i++){
//         a = a + 1;
//   q   }

//     res.json({
//         name: "Laila",
//         age: 23
//     })

//     res.send("Studying JS");
// });


// // sending post req
// app.post('/', function(req, res) {
//     // const message = req.body.message;
//     const message = req.query.message;
//     console.log(message);
//     res.send('<i>Posted a request</i>');
// });

// app.listen(port, function() {
//     console.log(`App listening on ${port}`);
// });


// npm is node package manager. npx is node package executable.
// npm brings and installs it to the machine
// npx doesn't installs but executes it on the machine


//---------------------------------------------------------------------------------------

// Express with examples

// const express = require("express")

// function calcSum(n){
//     let ans = 0;
//     for(let i=1; i<n; i++){
//         ans = ans + i ;
//     }
//     return ans;
// }

// const app = express();

// app.get("/", function(req, res){
//     const n = req.query.n;
//     const ans = calcSum(n);
//     res.send(ans.toString());
// })

// app.listen(3000);

// query param is always string else if number that it can be mistaken as status code


//-----------------------------------------------------------------------------------------------

// hospital example
// const express = require("express");
// const app = express();

// const users = [{
//     name: "George",
//     liver: [{
//         healthy: false
//     }]
// }];

// app.use(express.json());

// app.get("/", function(req, res){
//     const Georgeliver = users[0].liver;
//     console.log(Georgeliver);
//     const noOfLiver = Georgeliver.length;
//     let noOfHealthyLivers = 0;
//     for(let i=0; i<Georgeliver.length; i++){
//         if(Georgeliver[i].healthy)
//         noOfHealthyLivers = noOfHealthyLivers + 1;
//     }  
//     const numberofUnhealthyLivers = noOfLiver - noOfHealthyLivers;

//     res.json({
//         noOfLiver, 
//         noOfHealthyLivers,
//         numberofUnhealthyLivers
//     })
// })

// app.post("/", function(req, res){
//     const isHealthy = req.body.isHealthy;
//     users[0].liver.push({
//         healthy: isHealthy 
//     })
//     res.json({
//         msg: "Done!"
//     })
// })

// app.put("/", function(req, res){
//     for(let i=0; i<users[0].liver.length; i++){
//         users[0].liver[i].healthy = true;
//     }
//     res.json({});
// })

// app.delete("/", function(req, res){
//     if(AtleastOneUnhealthyLiver()){
//     const NewLiver = [];

//     for(let i=0; i<users[0].liver.length; i++){
//         if(users[0].liver[i].healthy){
//             NewLiver.push({
//                 healthy: true
//             })
//         }
//     }
//     users[0].liver = NewLiver;
//     res.json({msg: "done"});
//     }
//     else{
//         res.status(411).json({
//             msg: "No bad liver"
//         });
//     }
// })

// function AtleastOneUnhealthyLiver(){
//     let UnhealthyLiver = false;
//     for(let i=0; i<users[0].liver.length; i++){
//         if(!users[0].liver[i].healthy){
//             UnhealthyLiver = true;
//         }
//     }
//     return UnhealthyLiver;
// }

// app.listen(3000);


//------------------------------------------------------------------------------------------


// map, filter, arrow funcs

//map 

// function sum(a, b){
//     return a+b;
// }

// const add = (a,b) => {
//     return a+b;
// }

// app.get("/", (req, res) => {

// })

// app.get("/", function(req, res) {

// })

// const ans = sum(6,9);
// console.log(ans)
// const ans2 = add(3,5);
// console.log(ans2);


// give an array and then give back the array in which every value is multiplied by 2 

// const input = [2,3,4,5,6,7,8];
// const newArr = [];

// for(let i=0; i<input.length; i++){
//     newArr.push(input[i] * 2);
// }

// console.log(newArr);

// // other solution
// function transform(i){
//     return i*3;
// }

// // you use map to tranform arrays
// const ans3 = input.map(transform);
// console.log(ans3);

// filtering

// const arr = [2,3,4,5,6,7,8];

// const newArr = [];
// for(let i=0; i<arr.length; i++){
//     if(arr[i] % 2 == 0){
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);

// filter
// function filterFunc(n){
//     if(n%3 == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const ans = arr.filter(function filterFunc(n){
//     if(n%3 == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// });
// console.log(ans);


//------------------------------------------------------------------------------------------


// Assignment 1 - GET, POST, PUT, DELETE, map, filter of node js (chatgpt assignment)

// Book Library API

const express = require("express");
const app = express();

const books = [
    { id: 1, title: "1984", author: "George Orwell", isAvailable: true },
    { id: 2, title: "The Great Gatsby", author: "F. Scott Fitzgerald", isAvailable: false },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", isAvailable: true }
];

// app.use(express.json()); is middleware in Express.js that allows your application 
// to parse incoming requests with a JSON payload
app.use(express.json());

// GET request

app.get("/books", function(req, res){
    const booksWithTitle = books.map(books => books.title);
    res.json(booksWithTitle);
});

app.get("/books/filter", (req, res) => {
    const {author, title} = req.query;

    const filteredBooks = books.filter(book => {
        const BookAuthor = author ? book.author.toLowerCase().includes(author.toLowerCase()): true;
        const BookTitle = title ? book.title.toLowerCase().includes(title.toLowerCase()): true;
        return BookAuthor && BookTitle;
    });

    res.json(filteredBooks);
});

app.get("/books/filteradv", (req, res) => {
    const transformRes = books.map(book => {
        return {
            id: book.id,
            message: `Book ${book.title} by ${book.author} is ${book.isAvailable ? "available" : "not available"}`
        }
    });
    res.json(transformRes);
});

// POST request
app.post("/books", (req, res) => {
    const { title, author, isAvailable } = req.body;

    if (!title || !author || typeof isAvailable !== "boolean") {
        return res.status(400).json({ msg: "Invalid request body" });
    }

    const newId = books.length ? books[books.length - 1].id + 1 : 1;

    const newBook = { id: newId, title, author, isAvailable };

    books.push(newBook);

    res.status(201).json({
        msg: "Book added",
        book: newBook,
    });
});

// PUT request
app.put("/books/:id", (req, res) => {
    const bookid = parseInt(req.params.id);
    const {isAvailable} = req.body;
    const book = books.find(b => b.id == bookid);
    if(!book){
        return res.status(404).json({msg: "Book not found"});
    }
    book.isAvailable = isAvailable;
    res.json({msg: `Book ${book.title} availability updated`, book});
});

app.delete("/books/:id", (req, res) => {
    const bookId = parseInt(req.params.id);

    const bookIndex = books.findIndex(b => b.id == bookId);

    if(bookIndex == -1){
        return res.status(404).json({ msg: "Book not found" });
    }

    books.splice(bookIndex, 1);

    res.json({msg: "Book deleted"});
})

app.listen(3000);