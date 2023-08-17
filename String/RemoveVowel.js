function removeVowels(str) {
    const vowels = "aeiouAEIOU";
    let result = "";
  
    for (let char of str) {
      if (!vowels.includes(char)) {
        result += char;
      }
    }
  
    return result;
  }
  
  // Example usage:
  const inputString = "Hello, how are you?";
  console.log(removeVowels(inputString)); // Output: "Hll, hw r y?"
  