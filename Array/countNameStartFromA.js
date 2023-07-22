
//count all those name start from a

var arr = [ "aman" ,"balram", "Arbaj","ahmad", "nishat", "Anu" ]
var count = 0;

for(let i=0; i<arr.length;i++){
    currentName=arr[i];
    if(currentName[0]==="a" ||currentName[0]==="A" ){
         count++
         console.log(currentName)
    }
}
console.log(count)


