const express = require('express');
const https = require('https');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {

    res.sendFile(__dirname + "/index.html")

});

app.post("/", function(req, res){
    
    const query = req.body.cityName;
    const apiKey = "4fafe1962cbe7400d44a2811ad2e2037"
    const unit = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
    https.get(url, (response) => {

    response.on("data", function (data) {
        const weatherData = JSON.parse(data);
        const temp = weatherData.main.temp;
        const weatherDescription = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;
        const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
        console.log(imageURL);
        res.write ("<p>The weather is currently " + weatherDescription + "</p>");
        res.write ("<h1>The temperature in " + query + " is " + temp + " degrees Celsius</h1>")
        res.write ('<img src="' + imageURL + '"></img>');
        res.send();
    });
});
})





app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})