// dot operator:
const person = {
    name : "Atharva",
    // we need to use double inverted comaas for a name of underscores
    // or even a couple values:
    "person-items" : ["item1", "item2", "item3"]
}

// accessing object props with underscores or more than 1 word:
console.log(person["person-items"])

person.age = 20;

console.log(person)

const appState = "loading";


const app = {
    [appState] : true
}

// the prop's name is now the value of the variable we passed it:
console.log(app);

const state = {
    'loading' : true,
    "name" : "",
    "job" : "",
}

// updates our keys dynamically and can also set object keys:
const updateState = (key,value)=>{
    state[key] = value;
}

// we can update our states here:
updateState('name', "atharva");
updateState("job" , "developer");

updateState("loading", false);

// we can also create new object props and give them values:
updateState("products" , []);


console.log(state)