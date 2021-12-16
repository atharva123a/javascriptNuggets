
// TimeStamps:
console.log(new Date());

// for unix time using getTime method!:
console.log((new Date()).getTime());

// Here we have date.now method to get us time!
console.log(Date.now());

// using value of:
console.log((Date.now()).valueOf());


// setTimeout to get 2 different dates:
setTimeout(()=>{
    console.log(Date.now());
}, 1000)


let date = Date.now();

// let's try to get this using the unix value in our case:
console.log(new Date(date));

let date1 = (new Date()).valueOf();
date1
let date2 = date1 + 12623522345;
date2

const dif = date2 - date1

const mins = Math.round(dif / (1000*60));
console.log(mins);
const hours = Math.round(dif / (1000*60*60));
console.log(hours)


console.log(new Date(date2))