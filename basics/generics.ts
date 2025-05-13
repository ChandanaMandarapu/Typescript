// Generics - in ts generics allow u to create reusable components that can work with a variety of types.
// Generics make it possible for you to define functions, classes, and interfaces that can work with different data types without having to duplicate code

function printNumber(item:number,defaultValue:number): [number,number] {
    return [item,defaultValue]
}
function printString(item:string,defaultValue:string): [string,string] {
    return [item,defaultValue]
}
function printBool(item:boolean,defaultValue:boolean): [boolean,boolean] {
    return [item,defaultValue]
}
const num = printNumber(12,33)
const st = printString("hello","world")
const bl = printBool (true,false)
console.log(st)
console.log(num)
console.log(bl)

