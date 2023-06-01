function reverseWords(str) {
    // Split the string into an array of words
    const words = str.split(' ');
  
    // Reverse the order of the words

    const reversedWords = words.reverse();
  
    // Join the reversed words back into a string

    const reversedString = reversedWords.join(' ');
  
    return reversedString;
    
  }
  
  const str = "Hello, world! This is a sample sentence.";
  const result = reverseWords(str);
  
  console.log(result);
  