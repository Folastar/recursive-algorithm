

//palidronme checker


let palidromeChecker=(str)=>{

    if(typeof str !== 'string')return `not a palidrome`

    return str===str.split("").reverse().join("")

}


console.log(palidromeChecker("level"))  //returns true 
console.log('sdksdksldksdl') //returns faLSE



//power



let powerNum = (num, expo=2)=>{
        return Math.pow(num, expo)
}

console.log(powerNum(5))




function getTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

// Prompt the user for their age
const age = parseInt(prompt("Enter your age:"));

if (!isNaN(age)) {
    const price = getTicketPrice(age);
    alert(`The ticket price is: $${price}`);
} else {
    alert("Please enter a valid age.");
}




function getClothingAdvice(temp, isRaining) {
    let advice = "";

    if (temp <= 0) {
        advice = "It's freezing! Wear a heavy coat, scarf, gloves, and a hat.";
    } else if (temp > 0 && temp <= 10) {
        advice = "It's very cold. Wear a warm jacket, sweater, and gloves.";
    } else if (temp > 10 && temp <= 20) {
        advice = "It's cool outside. A light jacket or sweater should be enough.";
    } else if (temp > 20 && temp <= 30) {
        advice = "The weather is mild. Wear comfortable clothing.";
    } else {
        advice = "It's hot! Wear light, breathable clothing like shorts and a t-shirt.";
    }

    if (isRaining) {
        advice += " Don't forget an umbrella or raincoat!";
    }

    return advice;
}

// Prompt the user for the temperature and whether it's raining
const temperature = parseInt(prompt("Enter the current temperature (°C):"));
const raining = prompt
