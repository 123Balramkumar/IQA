function reverseWords(str) {
    // Split the string into an array of words
    const words = str.split(' ');
    const reversed = words.reverse();

    const joined = reversed.join(' ');
    return joined;
    
  }
  const str = "Hello, world! This is a sample sentence.";
  const result = reverseWords(str);
  
  console.log(result);
  