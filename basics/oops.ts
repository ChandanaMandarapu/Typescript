// Class properties annotations
// u can annotate class properties with a type this allows you to define the data type of the propery and ensure that it always consistent

class Person {
    name: string;
    age:number;

    constructor(name:string, age:number){
        this.name = name,
        this.age = age;
    }
}
const person = new Person("Chandu",20)
console.log(person)

// Acccess modifiers

// typescript u can access modifiesrs to control the visibility of class members (properties and methos) access modifiers determine the ways in which class member can be accessed from within and outside class

// PUBLC PRIVATE PROTECTED

// Public memmbers marked as public can be accessd from anywhere both inside and outside

// Private members marked as private can only be accessed frm within the class they are defined in

// Protected members marked as protected can be accessed from witihn class they are defined in as well as any subclass that extend the class

// example

class user {
    constructor(first:string,last: string){
     private   this.first = first;
     public  this.last = last
    }
}

let p1 = new User ("honey","bunny")
console.log(p1.first)