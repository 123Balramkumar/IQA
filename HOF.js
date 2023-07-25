//In JavaScript, a higher-order function is a function that takes one or more functions 
// as arguments, returns a function as its result, or both. It allows functions to be
//  treated as values, enabling powerful functional programming paradigms.


// HOF is a function that takes function as a n argument or it return a function also it can be both
// A higher-order function (HOF) is a function that can both take a function as an argument and return a function.

function greet(name) {
  
    console.log('Hello, ' + name + '!');
  }
  
  function greetUser(greeterFunction) {

    greeterFunction('John');
  }
  
  greetUser(greet);
  
//another example



