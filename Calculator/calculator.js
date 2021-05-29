const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.post('/', (req, res) =>{
    let n1 = Number(req.body.n1);
    let n2 = Number(req.body.n2);
    let sum = (n1 + n2);

    res.send("Answer is " + sum)
});

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post('/bmicalculator', (req, res) => {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    let bmi = (weight / (height*height));
    res.send("Your BMI is " + bmi)
});

app.get('*', (req, res) => {
    res.send("404 Not Found")
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})