/*
What if there's numbers in the array?
What if there's more than one(1) space between words?
Should we take care of Uppercases/Lowercases?
Change it to all Uppercases.Lowercases?
 */
const declaration = "When in the Course of human events, it becomes necessary for one people to dissolve the political bands which have connected them with another, and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation.";

// Hold the length of the array
const arrLen = declaration.length;

// Count the character inouted
// Only all of the letter 'i' characters.
let countChar = 0;
// change this variable value to whatever you need to search for inside the array
let charPrompt = 'i';

for (let i = 0; i < arrLen; i++){
  if(declaration[i] == charPrompt){
    countChar++;
  } // End if
  
} // End of i
// End of characters count

// Count the total number of words in the string
// Split on spaces, but what if it has extra spaces???????
// What if the array has numbers?
// const words = declaration.split(" ");
// Using Regex
const words = declaration.split(/\s/);
let wordsCount = words.length;
// End of words count

// Just the words with 4 letters/characters.
let fourLetterWords = 0;
// Change it for the word length you want
let howManyletters = 4;
// We already know the words count and how many words are in the array, let's use it
for( let i = 0; i < wordsCount; i++){
  if(words[i].length === howManyletters){
    fourLetterWords++;
  } // End if

} // End of for i


// Print all rwsults
// Total number of charaters in array
console.log(`Total number of charaters in the array is ${arrLen}`);
// Total number of specific charater
console.log(`Total number of character "${charPrompt}" is ${countChar}`);
// Total numbers os complete words in array
console.log(`Total number of words in the array is ${wordsCount}`);
// Total number of words with with 4 letters/characters
console.log(`Total number of words with ${howManyletters} letters is ${fourLetterWords}`);

