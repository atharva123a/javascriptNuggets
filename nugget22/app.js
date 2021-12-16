// ES2022

// Top level await 
// at to get elements in very short hand fashion:

// import fetchTabs:
import fetchTabs from "./fetchTabs.js";

const tabs = await fetchTabs();
console.log(tabs.map((tab) => tab.title));
const arr = [1, 2, 3];

//old method:
// const oldLast = arr[arr.length - 1];
// console.log(oldLast)

// new at method in javascript!:
const newMethod = arr.at(0);
console.log(newMethod)

// new await functionality:
// old method of await was to use async functions:
// now we top level await we can simply use await without
// wrapping them inside async functions!

const url = "https://www.course-api.com/react-tabs-project";

const resp = await fetch(url);
const data = await resp.json();
console.log(data.map((item) => item.title));
