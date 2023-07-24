//remove a from the given String var 

var name = "balram"
var outPut =" "

for(let i=0;i<name.length;i++){
    if(name[i]== "a"){
        continue;
       
    }
  
    outPut = outPut+name[i];
}
console.log(outPut);