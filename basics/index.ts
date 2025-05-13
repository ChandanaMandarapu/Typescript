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

