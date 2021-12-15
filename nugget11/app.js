//Array.from that is used to convert anything into something iterable!

const youtube = "youtube";

// returns an array from an iterable object!
console.log(Array.from(youtube))

// this returns a NodeList and we can't really apply array methods on it:
const text = document.querySelectorAll(".text");

// textContent returns the content inside our text class:
const newText = Array.from(text).find((item)=> item.textContent==="Athens");
console.log(newText);


// let's take a look at how array.from is useful while populating stuff:

// populate our Array:
const items = Array.from({length : 120}, (_, index) =>{
    // the length parameter specifies the number of times you 
    // have to apply the callback function
    return index;
})

// render 9 items per page for our project!
const itemsPerPage = 14;

// total pages for our pagination
const totalPages = Math.ceil(items.length / itemsPerPage);

// returns a nested array for every page according to itemsPerPage we want to render!
const newItems = Array.from({length : totalPages}, (_, index) =>{
    // we want to return new arrays which have max len = itemsPerPage 
    // always start from index which is itemsPerPage greater than last iteration!
    let start = index * itemsPerPage;

    // this function slices from the start index upto the end index but excluding it
    const returnArr = items.slice(start, start+itemsPerPage);

    return returnArr;
})

console.log(newItems)