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