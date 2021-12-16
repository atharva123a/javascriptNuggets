// requirements:

// these requirements would change when we bring in a sequence:
// first should change color to red in 1sec;
// second should change color to blue in 3 seconds;
// third should turn green in 2 seconds:

const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");

// this is callback hell where we have callbacks inside other callbacks
// messy and hard to maintain/reuse our code
setTimeout(() =>{
    first.style.color = "red";
        
    setTimeout(() =>{
    second.style.color = 'blue';

    setTimeout(() =>{
        third.style.color = 'green';
    }, 2000)

    }, 3000);

}, 1000)

// setTimeout(() =>{
//     second.style.color = 'blue';
// }, 3000);

// setTimeout(() =>{
//     third.style.color = 'green';
// }, 2000)