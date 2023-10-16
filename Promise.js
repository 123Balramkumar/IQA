// Promise is something that is achieved or completed in the future.
//A Promise is a special JavaScript object. It produces a value after an asynchronous
// operation completes successfully, or an error if it does not complete successfully due to time out, network error, and so on.


// Pending: The initial state, when the Promise is created and the asynchronous operation is still ongoing.
// Fulfilled: The state when the asynchronous operation successfully completes, and the result value is available.
// Rejected: The state when the asynchronous operation encounters an error or fails to complete.
// var data = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve("new state");
//     }, 2000);
  
//     setTimeout(function() {
//       reject("An error occurred");
//     }, 4000);
//   });
//   data 
//     .then(function(val){
//       console.log(val); 
//     })
//     .catch(function(error) {
//       console.log("Error:", error);
//     });
var data = new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve("state is completed ")
  },1000)
  setTimeout(function(){
    reject("error")
  },2000)
})
    data.then(function(val){
      console.log(val)
    }) 
    .catch(function(error){
      console.log(error)
    })
     