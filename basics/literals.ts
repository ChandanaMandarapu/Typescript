// literals tupils enums

let color : 'blue' | 'red' | 'black'
color = 'blue'
// color = 'green' // we will get a error here because green is not defined in the list 
console.log(color)

let isTrue : true | false
isTrue = true
console.log(isTrue)

let password: 'secret' = 'secret'
console.log(password)

// tuples
// destructuring individual element

let myTuple: [number,string]

myTuple = [2, 'apple']
// myTuple = ['apple',2] //throws an error its not structued at all 
console.log(myTuple)

const products: (number | string) []  = [ "item1" , 12]
console.log(products);

const games: [string,number,boolean] = ["tennis",2,true]
console.log(games)

// enums

enum Weatherconditions {
    Sunny= 'sunny',
    cloudy= 'clody',
    rainy= 'raniy'
}
console.log(Weatherconditions.Sunny) // returns 0 as it is at 0 index
console.log(Weatherconditions.cloudy)

const currentClimate = Weatherconditions.rainy
console.log('current weater is ${currentClimate}')