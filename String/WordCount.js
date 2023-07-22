//word count in any sentence 

var sentence = "india's greate prime minister Modi"

count= 0;
for(let i =0; i<sentence.length;i++){
    if(sentence[i]==" "){
        count++
    }
}
word = count+1
console.log("Word in above sentence =",word)