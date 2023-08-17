// Arrow functions were introduced in the ES6 version of javascript.
// D--> They provide us with a new and shorter syntax for declaring functions
// Arrow functions can only be used as a function expression.

//D-->Arrow functions are declared without the function keyword.
//If there is only one returning expression then we don’t need to 
// use the return keyword as well


//first example
// function Person() {
//   age = 0;

//   setInterval(() => {
//     age++;
//     console.log(age);
//   }, 1000);
// }
// const person1 = new Person();


// //Second example 
// function balram() {
//   age = 0;
//   setInterval(() => {
//     age++;
//     console.log(age);
//   }, 1000);
// }
// const balram1 = balram();


function golu(){
  age=0;
  setInterval(()=>{
    age++;
    console.log(age);
    
  }, 1000);

}
const balram = new golu();