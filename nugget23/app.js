// selecting item classes and single classes:

const heading = document.querySelector(".heading");
// console.log(heading);

const items = document.querySelectorAll(".list-item");
// console.log(items);

// to handle errors which might occur because we used a wrong selector:
const getDocument = (selector, isList)=>{
    const el = isList;
    const d = el ? document.querySelectorAll(selector) : 
    document.querySelector(selector);
    // handles nodeList and also unique selectors: 
    if((isList && !d.length < 1) || (!isList && d))return d;

    else throw new Error(`Please double check selector ${selector}`);
}

console.log(getDocument('.heading'));