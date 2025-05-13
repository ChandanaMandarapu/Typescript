function uniqueDataTypesFunc<Type>(item:Type,defaultValue:Type) : [Type,Type]
{
    return [item,defaultValue]
}
// creating generic function
const res = uniqueDataTypesFunc<number>(10,20)
const st = uniqueDataTypesFunc<string>("hi","hello")
const bl = uniqueDataTypesFunc<boolean>(true,false)
console.log(res)
console.log(st)
console.log(bl)

// examples

interface fruit{
    name:string;
    color: string
}

const fruit1 = uniqueDataTypesFunc<fruit>(
    {name:"mango",color:"yellow"},
    {name:"kiwi",color:"green"}
)
console.log(fruit1)

// getting random key value pairs frm objects 

function getRandomKeyValuePair<T>(obj : {[key:string] : T}) : {
    key:String; value:T;
} {
    const keys = Object.keys(obj)
    const randKey = keys[Math.floor(Math.random()*keys.length)]
}

return{
    key:randKey , value: obj[randKey] 
}

const stringObject = {a: "apple",b:"banana",c:"cherry"}
const randomStringPair = getRandomKeyValuePair<string>(stringObject)
console.log(randomStringPair)

const numberObject = {one:1,two:2,three:3}