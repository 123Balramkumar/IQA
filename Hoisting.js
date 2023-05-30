//Hoisting is the default behaviour of javascript where all the variable and function declarations are moved on top.
//This means that irrespective of where the variables and functions are declared, they are moved on top of the scope. The scope can be both local and global.




// outputs 3 even when the variable is declared after it is initialized	

"use strict"; //Note - To avoid hoisting, you can run javascript in strict mode by using “use strict” on top of the code:

hoistedVariable = 3;
console.log(hoistedVariable); 
var hoistedVariable;


 // Outputs " Hello world! " even when the function is declared after calling
hoistedFunction(); 

function hoistedFunction(){ 
  console.log(" Hello world! ");
} 


// Hoisting takes place in the local scope as well

doSomething();

function doSomething(){
    x = 33;
    console.log(x);
    var x;
  } 

//   Todo Task  30/05/2023  
//   Project ATM(WEB) 

//  - Fixing bug for the Admin side Add Comment for a Particular Task 
//  - Fixing bug for the Employee side Add Comment for a Particular Task 
//  - Delete Comment Needs Mofifications From Admin Side 
//  - Delete Comment  Needs  From Employee Side 
//  -Testing Whole WEB Flow Both side 



