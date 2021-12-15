// reduce method reduces an array to a single element - a Number
// an Array or an Object!
// it takes in two parameters-
// 1 : accumulator or total
// 2 : element inside the array:

const people = [
    {name : "bob", age : 20, position : "intern", salary : 10},
    {name : 'peter', age : 25, position : "developer", salary : 100},
    {name : "hector", age : 30, position : "designed", salary : 300},
    {name : "radz", age : 35, position : "product manager", salary : 400},
    {name : 'athens', age : 34, position : 'developer', salary : 250}
]


// use reduce to calculate the total salaries offered:
const totalSalary = people.reduce((total, person) => {
    
    total += person.salary;
    
    // always return total or the cumulative value:
    return total;
}, 0)

console.log(totalSalary)