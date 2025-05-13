// // type varName (annotations/types) = {property:value

const person : {firstName: string; lastName:string; age:number} = {
    firstName : 'chandu',
    lastName : "mndrpu",
    age : 33,
};

console.log(`Name: ${person.firstName} ${person.lastName} , Age:${person.age}`)

function printUser() : {name: string, age: number, location:string} {
    return{
        name : "Hina",
        age: 21,
        location: "India",
    };
}
const res = printUser();
console.log(res)

