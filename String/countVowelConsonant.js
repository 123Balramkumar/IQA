//Vovel count for the below sentence

var str="hello how are you today programiz website?"
var VowelCount=0;

for(let i=0;i<str.length;i++){
  if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
    VowelCount++
  }
}
console.log(VowelCount)

  
//this is the another way
function countVowelsAndConsonants(str) {
  const vowels = "aeiouAEIOU";
  let vowelCount = 0;
  let consonantCount = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      vowelCount++;
    } else if (/[a-zA-Z]/.test(char)) {
      consonantCount++;
    }
  }

  return { vowelCount, consonantCount };
}

// Example usage:
const inputString = "Hello, how are you?";

console.log(countVowelsAndConsonants(inputString)); // Output: { vowelCount: 7, consonantCount: 9 }

