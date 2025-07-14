// Fetch API
// Application Programming Interface
// fetch() method is used to fetch a resource (data)
// free-apis.github.io

const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const butn = document.querySelector("#btn");

const getFacts = async () => {
    console.log("Getting data ...");
    let response = await fetch(URL);
    console.log(response); // req and response is an object 
    let data = await response.json();
    console.log(data[1].text);
    factPara.innerText = data[1].text;
};

// Promise chaining 
// function getFacts(){
//     fetch(URL)
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             console.log(data);
//             factPara.innerText = data[2].text;
//         });
// }

butn.addEventListener("click", getFacts);

// AJAX is async JS and XML
// JSON JS Object Notation
// the first promise returns the data in json format and second promise .json() used to convert json to JS format
