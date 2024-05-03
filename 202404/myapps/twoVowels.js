const declaration = "When in the Course of human events, it becomes necessary for one people to dissolve the political bands which have connected them with another, and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation.";

const words = declaration.split(/\s+/); // Split on whitespace (one or more spaces)

// Function to check if a word has exactly two vowels (using regular expression)
const hasTwoVowels = word => {
  const vowelCount = word.match(/[aeiou]/gi).length; // Count vowels (case-insensitive)
  return vowelCount === 2;
};

// Find words with two vowels (using filter)
const twoVowelWords = words.filter(hasTwoVowels);

console.log(`Words with exactly two vowels: ${twoVowelWords}`);