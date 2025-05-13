// Interface is a way to define a contract for the shape of an object it specifies the properties and their types that an object must have... interfaces are a powerful tool for enforcing a certain structure in your code.
// interfaces can also be used to describe the shape of functions classes not only for objects

// basic interface

interface Person {
    firstName : string;
    lastName : string;
    age:number;
}

// using interface

const personMod: Person = {
    firstName : "krishna",
    lastName: "mukunda",
    age:12
}
console.log(personMod.firstName)
console.log(personMod.lastName)
console.log(personMod.age)


interface Movie {
   readonly title : string;
    ratings: number;
    genre?: string
}

const movie1: Movie = {
    title : "atonement",
    ratings: 8.9,
    genre: "drama"
}

console.log(movie1.title)
console.log(movie1.ratings)
console.log(movie1.genre)

// interfaces for functions

interface MathOperation {
    (x:number, y:number): number;
}

const add: MathOperation = (a,b) => a+b
const sub: MathOperation = (a,b) => a-b 
console.log(add(2,3))
console.log(sub(7,5))


interface stringOperation {
    (a:string,b:string): string;
}

const call: stringOperation = (k,l) => "hey a hey b"

// interface for objects methods

interface Frnds {
    fname : string;
    lname : string;
    age : number;
    sayHello() : void
}

function greet(frnds: Frnds) {
    console.log(`Hello ${frnds.fname} ${frnds.lname}`)
    frnds.sayHello()
}

const alex: Frnds = {
    fname : "alex",
    lname: "ray",
    age: 34,
    sayHello() {
        console.log("helloo there")
    }
}
const tom: Frnds = {
    fname : "tom",
    lname: "keir",
    age: 34,
    sayHello() {
        console.log("helloo there world")
    }
}

greet(alex)
greet(tom)

