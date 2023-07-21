const arr = [2, 5, 20, 8, 15, 10, 50, 22];
var max = 0;

for (let i = 0; i <= arr.length - 1; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);
