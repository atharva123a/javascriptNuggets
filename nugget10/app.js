// spread ...
// copies data instead of referencing it:

const boys = ['john', 'athens'];

const girls = ['anna', 'susan'];

const bestFriend = 'anirudha';

// allows us to copy array elements without creating a nested array:
const friends = [...boys, bestFriend, ...girls];

console.log(friends);

// referencing something:
// const newFriends = friends; //pointing towards the same location in memory:

// passing a copy using the spread operator:
const newFriends = [...friends];
newFriends[0] = 'patlik'; // no change in the friends array!
console.log(newFriends);
console.log(friends)

// using spread to copy objects:
const person = {
    name : "peter",
    "job" : "developer"
}

// we can also overwrite the original prop values inside the object:
const newPerson = {...person, city : "Chicago", 'name' : "athens"};

console.log(newPerson);
console.log(person);