// Filter returns a new array but is capable of changing the size of
// the original array unlike map. It is a mutable method:

// Find returns the first instance inside the array where 
// there is a match, else returns undefined:

const people = [
    {name : "bob", age : 20, position : "intern"},
    {name : 'peter', age : 25, position : "developer"},
    {name : "hector", age : 30, position : "designed"},
    {name : "radz", age : 35, position : "product manager"},
    {name : 'athens', age : 34, position : 'developer'}
]

// filter the people as old as 25:
const youngPeople = people.filter((person) =>{
    return (person.age <= 25);
})
console.log(youngPeople)
console.log(people)

// get developers only:
const developers = people.filter((person) => person.position == 'developer');
console.log(developers)

// no match:
const cofounders = people.filter((person) => person.position == 'cofounder');
console.log(cofounders);

//filter:
const peter = people.find((person) => person.name == 'peter');
console.log(peter)

// undefined if it does not find anything:
const anna = people.find((person) => person.name === 'anna');
console.log(anna)
// it does not necessarily return an object, it simply returns first instance of the type of array element

const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson) // should return the first person object

console.log(peter.position)

// it will always be an array that filter returns:
const athens = people.filter((person) => person.name === "athens");
// accesssing the array would mean accessing the first element:
console.log(athens[0].position)