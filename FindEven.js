// function findEvenNumbers(arr) {
//     const evenNumbers = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//         evenNumbers.push(arr[i]);
//       }
//     }
  
//      console.log(evenNumbers);
//   }
  
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//    findEvenNumbers(numbers);
  
   
function findEven(arr){
  evenNumber=[];
  for(let i=0; i<arr.length;i++){
    if(arr[i]%2===0){
      evenNumber.push(arr[i])
    }
  }
  console.log(evenNumber)
}
const number = [1,2,3,4,5,6,7,8,9,20]
findEven(number)


  