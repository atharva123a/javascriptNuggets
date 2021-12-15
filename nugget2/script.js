
// our data that we want to query from:
const menu = [
    {
        name : "pancakes",
        category : "breakfast"
    },
    {
        name : "burger",
        category : "lunch"
    },
    {
        name : "steak",
        category : "dinner"
    },
    {
        name : "bacon",
        category : "breakfast"
    },
    {
        name : "eggs",
        category : "breakfast"
    },
    {
        name : "pasta",
        category : "dinner"
    }
]

// for every item inside the menu give me a unique category:
const categories = ["all", ...new Set(menu.map((item) => item.category))]

console.log(...categories)

const doc = document.querySelector(".result");

doc.innerHTML = categories.map((category) => {
    return `<button>${category}</button>`
}).join("");