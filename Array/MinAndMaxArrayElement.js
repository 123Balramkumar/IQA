// function findMinMax(arr) {
//     let min = arr[0];
//     let max = arr[0];

//     for (let i = 0; i <= arr.length-1; i++) {
//       if (arr [i] < min) {
//         min = arr[i];
//       }
//       if (arr[i] > max) {
//         max = arr[i];
//       }
//     }
//   console.log(min,max)

//   }

//   const arr = [10, 5, 8, 3, 15, 20];

// findMinMax(arr)

const arr = [10, 5, 8, 3, 15, 20];

function MaxMin() {
  var Max = arr[0];
  var Min = arr[0];

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > Max) {
      Max = arr[i];
    }
    if (arr[i] < Min) {
      Min = arr[i];
    }
  }
  console.log(Max, Min);
}
MaxMin();
