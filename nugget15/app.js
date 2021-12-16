// promises in JavaScript!

// There are only 2 states possible:
// Pending Fulfilled Rejected!

const num = 2;

const promise = new Promise((resolve, reject) =>{
    const random = Math.floor(Math.random() * 3); // 0, 1, 2
    console.log(random);
    if(random === num){
        resolve("you guessed correctly!")
    }
    reject("incorrect guess!");
})

console.log(promise);

// we handle our resolved data using then method
// we handle our error data using err method!
promise.then((data) =>{
    console.log(data);
}).catch((err) =>{
    console.log(err);
})

