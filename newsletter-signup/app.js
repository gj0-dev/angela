const express = require('express');
let bodyParser = require('body-parser')
const request = require('request');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/signup.html");
});

app.post('/', (req, res)=>{

    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;
    console.log(firstName);
    console.log(lastName);
    console.log(email);

});


app.listen(3000, function(){
    console.log("LISTENING ON PORT 3000")
});


// e501cd90d9d6d5da7a36a0981e83ab1d-us6
// mailchimp api key