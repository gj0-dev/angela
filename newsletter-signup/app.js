const express = require('express');
let bodyParser = require('body-parser')
const request = require('request');
const { response } = require('express');


const app = express();

app.get('/', (req, res)=>{
    res.send("HELLO");
})


app.listen(3000, function(){
    console.log("LISTENING ON PORT 3000")
});
