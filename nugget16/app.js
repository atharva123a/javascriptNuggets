// refactor code into using promises for callbacks!


// these requirements would change when we bring in a sequence:
// first should change color to red in 1sec;
// second should change color to blue in 3 seconds;
// third should turn green in 2 seconds:

const btn = document.querySelector('.btn');

const addColor = (color, selector, time)=>{
    const element = document.querySelector(selector);
    return new Promise((resolve, reject)=>{
        if(element){
            // set the color to the desired value after the timeout
            setTimeout(()=>{
                element.style.color = color;
                // we resolved the promise in this case!
                resolve();
            }, time);
        }
        else {
            reject();
        }
    })
}

const err = ()=>{
    console.log("error occured!")
}

btn.addEventListener("click", ()=>{
    addColor('red', ".first", 1000).then(()=>{
    addColor("blue", ".second", 3000).then(()=>{
    addColor("green", ".third", 2000);
    })
})})