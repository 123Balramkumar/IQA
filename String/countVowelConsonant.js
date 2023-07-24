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
  