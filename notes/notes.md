Annotations
Annotations are used to specify the datatype of a variable parameter function return value, and other types of values. Annotations help developers catch errors in development by allowing them to specify what types of values can be assigned to a give variable or passed an argument to a function.
annotating the types like below
let myVar : type = value 

Type Inreference
Type Inference is a feature in Typescript that allows the compiler to automatically determine the type of a variable based on its value. In other words if u declare a variable without explicitly specifyinf its type, TS will try to infer they type based on the value u assign to it

Any Type
TS has a special any type that can be used to rep any type . when a variable is annotated with the any type ts will allow it to have any value and disable all type checking for that variable and its properties. also overuse of any can lead to untype cde and make it harder to catch type related bugs during dev

function parameters annotations
func parameter annotation.. in ts are used to specify the expected types of the paremeters that a func takes 

void in ts

void is a type that represents the absence of any value its is often used as the return type of functions that do not return a value

never in ts

never keyword is used to indicate that a function will not return anything or that a variable can never have a value the never type is ueful to indicating that certain code paths should never be reached or that certain values are impossible it can help catch errors at compile time instead of runtime

multi dimensional arrays
MDA array is an array that contains other arrays as its elements MDA can be defined using the same notation as one dimensioanl but with nested square brackets

objects 

objects in ts is a structured datatype that reperesents collection of properties each with a key and an an associateed value the properties of an object can have specific types and the obj itself can be annotated with a type and often defined using an interface of typealias . TS uses structural typing meaning that shape of object its structure or properties is what matters for type compatibility