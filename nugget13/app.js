const makeUpperCase = (val) =>{
    console.log(val.toUpperCase());
}

const handleValue = (str, cb)=>{
    const name = `${str} badass`;
    cb(name);
}

// a trivial example of a callback!
handleValue("athens", makeUpperCase);

// declaring the callback functions right when we call a function!
handleValue("askeladd", (val) => {console.log(val)})


// adding an event listner for onClick event on our button:
const button = document.querySelector("#btn");

// callback handles the click event!
button.addEventListener('click', () =>{
    console.log("button was clicked!")
})