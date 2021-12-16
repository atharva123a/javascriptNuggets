const people = [
    {
        name : "athens",
        location : { street : '123 seasame street',
        timezone : { offset : "+7:00"}
        }
    },
    {
        name : 'askleadd',
        location : { street : "123 main street" }
    },
    {
        name : "gojo",
        location : {street : "222 main street", 
        timezone : {offset : "+12.00"}}
    }
]

people.forEach((person) =>{
    // throws an error because timezone is undefined here:
    // console.log(person.location.timezone.offset)

    // using the && operator to ensure that they are chaining together:
    // console.log(person && person.location && person.location.timezone && person.location.timezone.offset);
    // the above method was the old way of optional chaining:


    // A better way to do the same is:
    console.log(person?.location?.timezone?.offset || "no such prop");
    // we can use || to output something else instead!
})



