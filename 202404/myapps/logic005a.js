/* Using Higher order functions
Filter
Reduce
*/

const declaration = "When in the Course of human events, it becomes necessary for one people to dissolve the political bands which have connected them with another, and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation.";

// Count words (using split and reduce)
// Split on whitespace (one or more spaces) using Regex
const words = declaration.split(/\s+/); 
const wordsCount = words.reduce((count, _) => count + 1, 0);

// Find specific words
// change this variable value to whatever you need to search for inside the array
let wordPrompt = 'the';
// Find all occurrences of the word "the" (using filter)
const wordCount = words.filter(word => word.toLowerCase() === wordPrompt).length;


// Count the character inputed
// change this variable value to whatever you need to search for inside the array
let charPrompt = 'i';
// Count 'i' characters (using filter and reduce)
const countChar = declaration.split('').filter(char => char.toLowerCase() === charPrompt).reduce((count, _) => count + 1, 0);

// Count words with 4 letters (using filter and reduce)
// Change it for the word length you want
let howManyletters = 4;
const fourLetterWords = words.filter(word => word.length === howManyletters).reduce((count, _) => count + 1, 0);

// Print results
// Total number of specific word
console.log(`Total number of character "${wordPrompt}" is ${wordCount}`);
// Total number of specific charater
console.log(`Total number of character "${charPrompt}" is ${countChar}`);
// Total numbers os complete words in array
console.log(`Total number of words in the array is ${wordsCount}`);
// Total number of words with with 4 letters/characters
console.log(`Total number of words with ${howManyletters} letters is ${fourLetterWords}`);
