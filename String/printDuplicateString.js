function printDuplicateCharacters(str) {
    const charFrequency = {};
    const duplicates = [];
  
    // Count the frequency of each character
    for (const char of str) {
      charFrequency[char] = (charFrequency[char] || 0) + 1;
    }
  
    // Find duplicate characters
    for (const char in charFrequency) {
      if (charFrequency[char] > 1) {
        duplicates.push(char);
      }
    }
  
    // Print duplicate characters
    console.log(duplicates.join(", "));
  }
  
  // Example usage:
  const inputString = "programming";
  printDuplicateCharacters(inputString);
  