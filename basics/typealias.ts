// custom type

type User = {
    name: string;
    age : number;
    location : string;
};
// user is annotated with USer
const printUserInfo = (user:User) => {
    return `Name: (${user.name}) Age:(${user.age}) Location: (${user.location}) `
}

const res = printUserInfo({name: "chandu" , age : 21 , location : "India"})
console.log(res)

// Optional properties 

type User2 = {
    name : string;
    age? : number, // optional
   readonly location: string
}

const user: User = {
    name: "Huna",
    location : "newyork"
}
console.log(`Name: ${user.name} , Age: ${user.age}, location: ${user.location}`)

// intersection types 
