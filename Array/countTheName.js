//count all those name which have "a" in them

var names = ["Arun", "sunil", "deepak", "sumit","khushi","Balram"]
var count = 0;

for(let i=0;i<names.length;i++){
    var currentName = names[i];

    for(let j=0;j<currentName.length;j++){

        if(currentName[j]==="a" || currentName[j]==="A"){
            count++;
          
            console.log(currentName)
            break;
        }
    }
}

console.log(count)


