//change lower case into upper case 

var name = "balram"
var lower="abcdefghijklmnopqrstuvwxyz"
var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var output="";

for(let i=0; i<name.length;i++){
    for(let j=0; j<lower.length;j++){

        if(name[i]==lower[j]){
           output=output + upper[j]
        }
    }
}
console.log(output)