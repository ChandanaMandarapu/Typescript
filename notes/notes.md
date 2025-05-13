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

intersection types is a way to combine multiple types into a single type includes all the properties and methods of each constituion type. An intersetion type is denoted by the & symbol

Unions

unions are used to declare a  type that can have one of several possible types unions are useful when we want to allow a variable or parameter to accept multiple types |

Literals

Literal types allow u to specify a value that can only be one specific literal value this means that a variable with a literal type can only have one specific value no ther

Tuples

Tuple is a type that reperesents an array with a fixed number of elements where each element can have a diff type. The order of the types in the tuple definition corresponds to the order of the value in the actual array . tuples are similar to arrays but they have a specific structure and can be used to mode finite sequences with known lengths

Enums

Enum is a way to define a set of named constants. Enums allow u to define a collection of related values that can be used interchangebaly in ur code