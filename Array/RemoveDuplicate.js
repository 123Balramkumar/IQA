let arr = [1, 2, 3, 4, 5, 4, 3, 2, 7, 8, 9, 3, 2];
let uniqueArr = [];

for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < uniqueArr.length; j++) {
        if (arr[i] === uniqueArr[j]) {
            isDuplicate = true;
            continue; // skeep the inner loop since we found a duplicate
        }
    }

    if (!isDuplicate) {
        uniqueArr.push(arr[i]);
    }
}

console.log(uniqueArr); // [1, 2, 3, 4, 5, 7, 8, 9]
