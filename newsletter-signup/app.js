const express = require('express');
let bodyParser = require('body-parser')
const request = require('request');
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/signup.html");
});

app.post('/', (req, res)=>{

    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME:firstName,
                    LNAME: lastName
                }

            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us6.api.mailchimp.com/3.0/lists/f3d950cf0e";

    const options = {
        method: "POST",
        auth: "gj0:8b21db907ff79ae20afcf943ebbc6261-us6"
    }

    const request = https.request(url, options, function (response){

        if(response.statusCode === 200){
            res.sendFile(__dirname + "/success.html")
        }
        else{
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function(data){
            console.log(JSON.parse(data));
        });
    });

    request.write(jsonData);
    request.end();

});

app.post("/failure", function(req, res){
    res.redirect("/")
})

app.listen(process.env.PORT || 3000, function(){
    console.log("LISTENING ON PORT 3000")
});

// Audience ID
// 8b21db907ff79ae20afcf943ebbc6261-us6

// List ID
// f3d950cf0e