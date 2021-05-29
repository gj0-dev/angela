const express = require('express');

const app = express();

app.get("/", function(req, res){

    res.send("<h1>Hello World</h1>");
})


app.get("/about", function(req, res){

    res.send("My name is Garry!");

})
app.get("/wdb", function(req, res){

    res.send("Web Developer Bootcamp page");

})
app.get("/contact", function(req, res){

    res.send("Contact me at garry@gj0.dev");
})

app.get("/*", function(req, res){

    res.send("404 Not Found");
})


app.listen(3000, function(){
    console.log("LISTENING ON PORT 3000")
});

