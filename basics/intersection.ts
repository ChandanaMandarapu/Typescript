type UserInfo = {
    first : string,
    last : string,
    age : number;
}

type accDetails = {
    email: string,
    password: string;
}

// combine both of these

type User = UserInfo & accDetails

const hira: User = {
    first : "chandu",
    last: "web",
    age : 21,
    email: "chandu@gmail.com",
    password: "password"
}

console.log(
    `Name: ${hira.first} ${hira.last} Age: ${hira.age} email: {hira.email} password: {hira.password}`
)


// unions

let password: string | number = 20

type Userinfoo = {
    first: string,
    last: string,
    age: number
}
type details = {
    email: string,
    password: string
}

let user3: Userinfoo | details = {
    email : 'chandna@gmail.com',
    password : 'password'
}

const itemss : (number|string) [] = [1,2,4,5,'chandu']
console.log(itemss)