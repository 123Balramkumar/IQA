//find the missing 
//This is the first way to find missing number  

 let arr= [1,2,3,4,6,7]
for(let i=1;i<arr.length;i++){
    if(arr.indexOf(i)===-1){
        console.log(i)
    }
}
// This is the second way to find missing 
console.log("-----------------------------------------------")
let total  = ((arr.length+1)*(arr.length+2))/2
for(let i=0;i<arr.length;i++){
    total=total - arr[i]
}
console.log(total)




