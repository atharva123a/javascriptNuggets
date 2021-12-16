// fetch API for getting requests:

// FETCH API - Browser API for HTTP (Ajax) Requests
// Default = GET requests, supports other methods as well
// Return a promise!

const url = "https://www.course-api.com/react-tours-project";


// chaining together promises:
// fetch returns a promise
// fetch(url).then((res =>{
//     // likewise res.json returns a promise!
//     res.json().then((data) => {
//         const names = data.map((obj) => obj.name)
//         console.log(names)
//     }).catch((error)=> console.log(error));

//     // finally we have data and then we console.log it!
// })).catch((err) => console.log(err));


// async-await simplifies it!
const func = async() =>{
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        // the json returns an array of objects!
        const names = data.map((obj) => obj.name);
        return names;
    }catch(error){
        console.log(error)
    }
}
// if instead we were returning data from our async func,
// it would be a promise and to access that data we would have to use .then

func().then((data)=>console.log(data)).catch((error) => console.log(err))