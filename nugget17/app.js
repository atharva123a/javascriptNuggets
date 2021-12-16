//  Javascript Nuggets
// async / await
// async allows us to write asynchronous functions in a syncronous way!
// async must be present, always returns a promise
// await waits till promise is settled
// error handling - try/catch block

// async functions always return a promise!!
const func = async() =>{
    return "hello world!"
}
// a fulfilled promise with some data!
// console.log(func());

// another async function that handles a promise!
// const myFunc = async(someFunc) =>{
//     const value = await someFunc();
//     console.log(value);
//     console.log("Hello There!")
// }
// myFunc(func);



const users = [
    { id: 1, name: 'john' },
    { id: 2, name: 'susan' },
    { id: 3, name: 'athens' },
  ]
  
  const articles = [
    { userId: 1, articles: ['one', 'two', 'three'] },
    { userId: 2, articles: ['four', 'five'] },
    { userId: 3, articles: ['six', 'seven', 'eight', 'nine'] },
  ]

// set up functions to make fake promises!
// get user with a specific id:
const getUser = (name)=> {
    return new Promise((resolve, reject) =>{
        const user = users.find((user) => user.name === name);
        
        if(user){
            return resolve(user);
        }
        else {
            return reject(`No user exists with name "${name}"`)
        }
    })
}

// get articles here:
const getArticles = (userId)=>{
    return new Promise((resolve, reject) =>{
       const userArticles = articles.find((user) => user.userId === userId);

       if(userArticles){
           return resolve(userArticles.articles);
       }
       else {
           return reject("Wrong ID");
       }
    })
}


const getData = async () =>{
    try{
        const user = await getUser("athens");
        const articles = await getArticles(user.id);
        console.log(articles)
    }catch (error) {
        console.log(error)
    }
}
getData()

// const a = articles.find((article) => article.userId = 2);
// console.log(a);