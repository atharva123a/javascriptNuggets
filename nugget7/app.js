// array destructuring is a fast way to access elements inside an array:

const fruits = ['apple', 'banana', 'pineapple'];

// one way to destructure the fruits array is this:
// let fruit1 = fruits[0];
// let fruit2 = fruits[1];
// console.log(fruit1, fruit2)

// but with array destructuring this becomes very easy:
const [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1, fruit2, fruit3);

fruits.push('grapes', 'pumpkin');

// we can skip over fruits by using commas for elements we don't want:
const [a, , b, , c] = fruits;

// this shows we can skip over items:
console.log(a, b, c);

// if we try to access element that does not exist, it returns undefined:

// this is very useful when swapping:
let first = "john";
let second = 'athens';

// swap becomes so much more easy instead of creating a third variable:
[second, first] = [first, second];

console.log(first, second);