type Person = {
    name: string;
};
const person: Person = {
    name: "Chandu",
};
console.log(person.name)

// strings booleans numbers

let myName: string = "maha"
myName = "chandu"
console.log(myName)

let favNumb: number = 9
console.log(favNumb)

let isExist: boolean = true
console.log(isExist)

let tech = "typescript"
console.log(tech)

// anytype 

let color : any = "red";
color = 20
color = true
console.log(color)

// regular func

function addOne(num:number){
    return num + 1
}
function subOne(num:number){
    return num - 1
}

const res = addOne(3)
console.log(res)

const res2 = subOne(3)
console.log(res2)

// arrow func 

const double = (x:number , y:number) => x*y
const res3 = double(1,2)
console.log(res3)

// default params value

function greet(person = 'Ani') {
    return `Hello ${person}`
}
const res4 = greet()
console.log(res4)

// defining return annotations regular function

function double1 (x:number) : number {
    return x*x
}
function triple1 (y:number) : number{
    return y*y
}

const res5 = double1(2)
console.log(res5)
const res6 = triple1(3)
console.log(res6)

// arrow func

const double2 = (x:number) :number => x*x;
console.log(double2(2))

// void in ts
// as we are not retuning anything here it returns void
function printMessage(message:string){
    console.log(`this is my ${message}`)
}
printMessage("message")

// never keyword

// a func that always throws an error 
// a func that has an infinite loop
// a variable that can never have a Value

// 1st example

function throwError(msg:string) : never
{
    throw new Error(msg)
}

// 2nd example

function  infiniteloop():never{
    while(true) {}
}

// 3rd example

let x:never;
function neverReturn() : never{
    while (true) {}
}
x = neverReturn()
