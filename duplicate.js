// function countDuplicates(arr) {
//     var array = [1, 2, 3, 2, 4, 1, 5, 2, 5, 5];
//     var countMap = {};
  
//     // Count occurrences of each element
//     for (var i = 0; i < arr.length; i++) {
//       var item = arr[i];
//       countMap[item] = (countMap[item] || 0) + 1;
//     }
  
//     // Convert countMap object to an array of objects
//     var duplicates = [];
//     for (var key in countMap) {
//       duplicates.push({ count: countMap[key], element: key });
//     }
  
//     return duplicates;
//   }
   
//   // Example usage

 
//   console.log(countDuplicates(array));
  