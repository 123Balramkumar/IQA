// function findMinMax(arr) {
//     let min = arr[0];
//     let max = arr[0];
  
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < min) {
//         min = arr[i];
//       }
//       if (arr[i] > max) {
//         max = arr[i];
//       }
//     }
//   console.log(min,max)
//     // return { min, max };
//   }
//   const arr = [10, 5, 8, 3, 15, 20];
//   findMinMax(arr)
//   const result = findMinMax(arr);
  
//   console.log('Minimum number:', result.min);
//   console.log('Maximum number:', result.max);
var arr = [10, 5, 8, 3, 15, 20];
var max = arr[0];
var min =arr[0];
function findMinMax(){
for(let i=0; i<arr.length;i++){
  if(arr[i]>max){
    max=arr[i]
  }
  if(arr[i]<min){
    min=arr[i]
  } 
}
console.log(max,min)
}
findMinMax(arr)