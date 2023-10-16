//this is another way to handle this problem

var string = "madam"
function palindrome(string){
for(let i=0;i<Math.floor(string.length/2);i++){
    if(string[i]==string[string.length-1-i]){
        sentence="Is palindrome"
    }else{
        sentence="not palindrome"
    }
}
console.log(sentence)
}
palindrome(string)
