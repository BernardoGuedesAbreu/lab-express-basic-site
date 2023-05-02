//require the express npm Package
const express = require("express");

// Express App
//creating our server mamed app

const app = express ();

//Make everything inside public available

app.use(express.static("public"));

app.get("/home",(request, response, next)=>{
    response.sendFile(__dirname + "/views/home-page.html");
});

app.get("/about", (request, response) => {
 
  response.sendFile(__dirname + "/views/about-page.html");

});

app.get("/works", (request, response) => {
 
    response.sendFile(__dirname + "/views/works-page.html");
});

app.listen(3000, ()=> console.log("App is listening on PORT 3000"));