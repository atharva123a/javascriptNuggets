// fetch errors:
const url = "https://www.course-api.com/react-tours-projects";

// let's fetch url data:
// fetch throws an error only when there are network errors
// while fetching requests!!

const fetchData = async() =>{
    try {
        const res = await fetch(url);
        if(!res.ok){
            const msg = `Error while fetching ${res.status} ${res.statusText}`
            throw new Error(msg);
        }
        const data = await res.json();
        console.log(data.map((obj) => obj.name))
    }
    catch(error){
        console.log(error);
    }
}

const btn = document.querySelector('.btn');


// remember to pass in instances instead of invoking func while passing
// in as arguments
btn.addEventListener("click", fetchData);