function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr   [i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  console.log(min,max)
    // return { min, max };
  }
  
  const arr = [10, 5, 8, 3, 15, 20];
//   const result = findMinMax(arr);
  
//   console.log('Minimum number:', result.min);
//   console.log('Maximum number:', result.max);
findMinMax(arr)