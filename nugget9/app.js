// REST...
// it allows us to access the rest of the array or object using rest
// before the name of the variable we want to store the values:
// stores it as an array or an object depending on what it is called upon


const arr = ['apple', 'banana', "mango", "pineapple"];

// placement is important:
const [first, ...restOfFruits] = arr;

console.log(first, restOfFruits)

// similarly with objects:
const person = {
    name : "athens",
    age : 19,
    "city" : "Mumbai"
}

// returns an object with the rest of the properties:
const {city, ...rest} = person;

console.log(city, rest)

// using rest operator on a function:
const countAverage = (name, ...scores) =>{
    // scores will be dynamically stored:
    let total = scores.reduce((total, score) =>{
        total += score;
        return total;
    }, 0)
    total = parseFloat((total/scores.length).toFixed(2));
    console.log("the average scored by " + name + " is " + total);
}

const marks = [10, 20, 30, 420];

// now when we want to pass this array we have to make use of the spread operator
// which spreads out our array:
countAverage("athens", ...marks);
