    //this is for reverse sentence 

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

    //this is for reverse Word as string

      function reverse(str){
        var newstr = "";

        for(i=str.length-1;i>=0;i--){
          newstr+=str[i]
        }
        return newstr 
      }

      console.log(reverse("hello"))