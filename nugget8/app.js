// destructuring an object in javascript:
const person = {
    "first" : "athens",
    "last" : "badass",
    "age" : 20,
    sibling : {
        name : "Advait"
    }
}

// to destructure this person object:

// we can also give an alias, i.e a different name to the prop value
// that we want to store:

// we can access to objects which have some levels of dept as well!
const {first:firstName, last:lastName, age, sibling:{name:favoriteSibling}} = person;

console.log(firstName, lastName, age, favoriteSibling)

// one way to destructure would be inside the function:

// another way would be destructuring right at the place of declaration:
printPerson = ({first, last, age, sibling : {name}}) =>{
    // const {first, last} = person;
    console.log(name); // advait:
}

printPerson(person)