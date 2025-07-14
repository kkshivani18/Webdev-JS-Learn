const express = require("express");
const app = express();

// zod
const z = require("zod");
// const schema = z.array(z.number());

// app.use(express.json());

// app.get("/health-checkup", function(req, res){
//     // checks done here
//     const kidneyId = req.query.kidneyId;
//     const username = req.headers.username;
//     const passwd = req.headers.passwd;

//     if(username!="sejal" && passwd != "pass"){
//         res.status(403).json({
//             msg: "User doesn't exist"
//         });
//         return;
//     }

//     if(kidneyId!=1 && kidneyId!=2){
//         res.status(411).json({
//             msg: "wrong input"
//         });
//         return;
//     }

//     res.send("Your kidney is good");
// });

// app.listen(3000);

// when you have to do some checks before giving a response. We do that checks somewhere else, that somewhere else is middleware

// let noOfReq = 0;

// function calcReq(req, res, next){
//     noOfReq++;
//     console.log(noOfReq);
//     next();
// }

// app.use(express.json());

// app.post("/health-checkup", function (req, res){
//     // console.log(req.body);

    // input validation and testing fot other inputs on postman
    // kidneys = [1,2];

//     const kidneys = req.body.kidneys;
//     const kidLen = kidneys.length;

//     res.send("you have " + kidLen + " kidneys");
// });

// global catch
// It is used to display the necessary msg 
// and not info about the server if an exception or error occured

// app.use((err, req, res, next) => {
    // res.json({
    //     msg: "Internal server error (500)"
    // })

//     res.status(500).send("Internal server error");
// }); 

// zod 

// const schmea = z.array

app.use(express.json());

// app.post("/health-checkup", (req, res) => {
//     const kidneys = req.body.kidneys;
//     const response = schema.safeParse(kidneys);

//     if(!response.success){
//         res.status(411).json({
//             msg: "input is invalid"
//         })
//     }
//     else{
//         res.send({
//             response
//         })
//     }
// });

// ex 1
// function validateInput(arr) {
//     const schema = z.array(z.number());
//     const response = schema.safeParse(arr);
//     console.log(response);
// }
// validateInput([1,2,3]);

// function validateInput(obj) {
// const schema = z.object({
//     email: z.string().email(),
//     password: z.string().min(8)
// })

// ex 2
// const res = schema.safeParse(obj);
// console.log(res);
// }
// validateInput({
//     email: "sejal22@gmail.com",
//     password: "234765:)"
// });

// app.listen(3000);

// ex 3
// function validateInput(obj) {
// const schema = z.object({
//     email: z.string().email(),
//     password: z.string().min(8)
// })

// const response = schema.safeParse(obj);
// console.log(response);
// }

// app.post("/login", function(req, res){
//     const response = validateInput(req.body)
//     if(!response.success){
//         res.json({
//             msg: "Your input not valid"
//         })
//         return;
//     } 
// })

// app.listen(3000);