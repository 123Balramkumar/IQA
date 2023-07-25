function countOccurrences(arr) {
    const occurrences = {};
    
    for (let i = 0; i < arr.length; i++){
      const num = arr[i];
      
      if (occurrences[num]) {
        occurrences[num] += 1;
      } else {
        occurrences[num] = 1;
      }
    }
    
    return occurrences;
  }
  
  const arr = [1, 3, 5, 3, 7, 5, 1, 3, 7, 7, 2];
  console.log(countOccurrences(arr));Z
//const result = countOccurrences(arr);
  
  
  

//   function countOccurrences(arr){
//     const occurrence ={};

//     for(let i= 0;i<arr.length;i++){

//         const num = arr[i]

//         if(occurrence[num]){
//             occurrence[num] += 1;
//         }else{
//             occurrence[num]= 1;
//         }
//     } 
//     return occurrence
//   }
// const number =[1, 3, 5, 3, 7, 5, 1, 3, 7, 7, 2]
//   console.log(countOccurrences(number))