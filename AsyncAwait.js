
// D--> async/await is a pair of JavaScript keywords that 
// simplify working with asynchronous operations. 
// When you mark a function as async, it automatically returns a Promise.
// The await keyword is used inside an async function to pause its execution 
// until a Promise is resolved,

//this is short merthod
 
async function getData(){
    let data = await fetch("https://6476f2a69233e82dd53a9247.mockapi.io/gelAllUsers");
    data=await data.json()
    console.log(data)
} 
getData()
      
// this is long method 
async function getdata() {
    try {
      let response = await fetch("https://6476f2a69233e82dd53a9247.mockapi.io/gelAllUsers"); 
      if (!response) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    } 
  }
  
  getdata();
   
// async function getdata(){
//     let data = await fetch('https://6476f2a69233e82dd53a9247.mockapi.io/gelAllUsers')
//     data=await data.json()
//     console.log(data)
// }

// getdata()

