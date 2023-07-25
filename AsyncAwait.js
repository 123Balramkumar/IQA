//D-->A async function is a function declared with 
// the async keyword and await keyword is premitted within it
//  the async and await keyword enable asynchronous 
// promise based behaviour to be written in a clear style, 
// avoiding the need to explict configure promise chain 

// 
async function getData(){
    let data = await fetch("https://6476f2a69233e82dd53a9247.mockapi.io/gelAllUsers");
    data=await data.json()
    console.log(data)
}
getData()