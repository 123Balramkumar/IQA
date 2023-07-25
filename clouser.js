//D--> In JavaScript, a closure is a combination of a function and the 
// lexical environment within which that function was declared. 
//D--> It allows a function to access variables from its outer 
// scope even after the outer function has finished executing.
//  In simple terms, a closure "remembers" its outer variables and can access them later.
//D--> Closures are created when an inner function is defined within an outer 
// function and is returned or accessed outside of that outer function.
// D--> The inner function maintains a reference to its outer function's variables,
//  even when the outer function has completed execution.
function outer (){
    var outerVar = "i am from Outer Function"

    function inner(){
        console.log(outerVar)
    }
    return inner
}
var closuer = outer();
  closuer();