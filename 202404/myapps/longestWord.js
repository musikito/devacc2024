const declaration = "When in the Course of human events, it becomes necessary for one people to dissolve the political bands which have connected them with another, and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation.";

// Function to find the longest word
function findLongestWord(text) {
  const words = text.split(/\s+/); // Split on whitespace (one or more spaces)
  let longestWord = "";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

// Find and print the longest word
const longest = findLongestWord(declaration);
console.log(`Longest word is: ${longest}`);
