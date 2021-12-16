// window width and window height:

// boundingClientRect()

console.log("window height : " + window.innerHeight);
console.log("window width: " + window.innerWidth)

const btn = document.querySelector('.btn');
const box = document.querySelector('.box');

btn.addEventListener('click', ()=>{
    const dimensions = box.getBoundingClientRect();
    console.log(dimensions);
})