
//  Currying in JavaScript is a technique that allows you to transform a
//  function that takes multiple arguments into a sequence of functions, 
//  each taking a single argument. This makes it easier to partially apply 
//  arguments to a function and create new functions based on the original one.
  
// this is simple Way to Do that 
// function sum(x,y,z){
//     return x+y+z;
// }
// console.log(sum(10,15,20));

//using Curring Function

function sum(x){
    return(y)=>{
        return(z)=>{ 
            return x+y+z
        }
    }
}
let data =sum(5)
 let data2= data(15)
console.log(data2(10))

// this in another Way to do that 
let total = sum(5)(4)(6)
console.log(total)


//  Q -->  Why is currying useful in JavaScript?

// --> It helps us to create a higher-order function
// --> It reduces the chances of error in our function by dividing it into multiple smaller functions that can handle one responsibility.
// --> It is very useful in building modular and reusable code
// --> It helps us to avoid passing the same variable multiple times
// --> It makes the code more readable



function add (a) {
    return function(b){
      return a + b;
    }
  }
  
  console.log(add(3)(4)) 