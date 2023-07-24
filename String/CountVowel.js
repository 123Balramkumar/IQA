function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
  
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    return count;
  }
  
  // Example usage:
  const inputString = "Hello, how are you?";
  console.log(countVowels(inputString)); // Output: 7 (o: 3, e: 2, a: 1, u: 1)
  