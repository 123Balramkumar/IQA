// function shortArray() {
//   const arr = [20, 10, 35, 5, 30, 15];

//   for (let i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {

//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//       }
//     }
//   }
//   console.log(arr);
// }
// shortArray();

//shorting an Array 
var arr = [25, 5, 20, 19, 72, 33, 46, 88, 55];

function sortArray() {
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = 0; j <= arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
}

sortArray();

// elemet with repeate with key and value format 

var myArr = [1,2,3,4,7,1,3,5,6,1,];
var count = {};
for(var i=0; i<myArr.length;i++){
  var num = myArr[i];

  count[num] = count[num]? count[num]+1 : 1;
}
 console.log(count);

 
