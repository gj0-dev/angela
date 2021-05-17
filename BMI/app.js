function bmiCalculator (weight, height) {
    
    let score = (weight / (height*height));
    if (score < 18.5){
        return "Your BMI is " + score + ", so you are underweight.";
    }
    else if ((score >= 18.5) && (score <= 24.9)){
        return "Your BMI is " + score + ", so you have a normal weight.";
    }
    else{
        return "Your BMI is " + score + ", so you are overweight.";
    }
}