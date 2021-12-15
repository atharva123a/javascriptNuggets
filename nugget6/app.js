// Reduce Object:

const cart = [
    {
      title: 'Samsung Galaxy S7',
      price: 599.99,
      amount: 1,
    },
    {
      title: 'google pixel ',
      price: 499.99,
      amount: 2,
    },
    {
      title: 'Xiaomi Redmi Note 2',
      price: 699.99,
      amount: 4,
    },
    {
      title: 'Xiaomi Redmi Note 5',
      price: 399.99,
      amount: 3,
    },
  ]

let {totalItems, cartTotal} = cart.reduce((total, item) =>{
    
    const {amount, price} = item;

    total.totalItems += amount;
    total.cartTotal += amount * price;

    return total;
}, {
    // return an object with 2 properties:
    totalItems : 0,
    cartTotal : 0
});

// toFixed returns a string:
cartTotal = parseFloat(cartTotal.toFixed(2));

console.log({totalItems, cartTotal});

// returns json of 100 github repos:
const url = 'https://api.github.com/users/john-smilga/repos?per_page=100';

// fetch data from the api:
const fetchRepos = async () =>{
    const response = await fetch(url);
    // convert the response to a json object:
    const data = await response.json();

    // filter data to figure out the number of language repos:
    const newData = await data.reduce((total, repo) => {
        
        const {language} = repo;
        // the language exists and is not null:
        if(language){
            //if the lang does not exist adding 1 would return 
            // undefined, which is false!
            // in that case it would simply return 1 here:
            total[language] = total[language] + 1 | 1;
        }
        
        return total;
    }, {})


    console.log(newData)
}
fetchRepos();