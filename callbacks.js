// In javascript, functions are treated as first-class citizens, they can be used as an argument of another function,
//  can be returned by another function, and can be used as a property of an object.

//vvv D-->A callback is a function that is passed as an argument to another
//function and is called back at a later time when a particular event or task is completed.
//vvv D--> A callback is a function that will be executed after another function gets executed

function sayHello(){
    console.log("Hello");
}

function sayHi(){
    console.log("Hi..");
}
function add(n1,n2,callBack){
    // sayHello()  --> We can call in this way but we have to call every time if the no of function 
    // sayHi()  
    console.log(n1+n2);
    callBack()
}


add(5,10,sayHello);
add(5,20,sayHi); 


