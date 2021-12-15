const people = [
    {
        name : "athens",
        age : 20,
        position : "intern"
    },
    {
        name : "harsh",
        age : 24,
        position : "developer"
    },
    {
        name : "kennedy",
        age : 30,
        position : "manager"
    }
]

// map is used to iterate over every single element inside an array
// and then pass that element through a callback!
const newPeople = people.map((person)=>{
    return {
        firstName : person.name.toUpperCase(),
        age : person.age + 20
    }    
});

// for every name inside the array wrap it inside the h3 tag:
const names = people.map((person) => `<h3>${person.name}</h3>`);
// console.log(names);
// get the documet with id result:
const doc = document.querySelector("#result");

// return as innerHTML and remove commas:
doc.innerHTML = names.join("");