//count Vowel in the given String
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let vowelCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelCount++;
    }
  }

  return vowelCount;
}
const String = "Hello, how are you?";
console.log(countVowels(String))