//find sum of all odd numbers

 const arr = [[3, 2], [1], [4, 12]] 

 sumOfOddNumber=0;

 for(let i =0 ; i<arr.length;i++){
    for(let j=0; j<arr[i].length; j++){
        num=arr[i][j]
        if(num%2 !==0 ){
            sumOfOddNumber += num
        }
    }
 }
console.log("sum of odd number =", sumOfOddNumber)