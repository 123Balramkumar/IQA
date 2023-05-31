// Promise is something that is achieved or completed in the future.
// In JavaScript, a promise is an object and we use the promise constructor to initialize a promise.

var data = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("new state");
    }, 2000);
  
    setTimeout(function() {
      reject("An error occurred");
    }, 4000);
  });
  
  data
    .then(function(val) {
      console.log(val);
    })
    .catch(function(error) {
      console.log("Error:", error);
    });
  