const express = require('express');
let bodyParser = require('body-parser')

const app = express();


app.get("/", function(req, res){


    var today = new Date();
    var currentDay = today.getDay();

    if(currentDay === 7 || currentDay === 0){
        res.write("<h1>Yay it's the weekend!</h1>");
    } else{

        res.sendFile(__dirname + "/index.html");
    }
});



app.listen(3000, function(){
    console.log("Listening on port 3000");
});
