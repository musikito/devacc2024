
const declaration = "When in the Course of human events, it becomes necessary for one people to dissolve the political bands which have connected them with another, and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation.";

// Count words (using split and reduce)
// Split on whitespace (one or more spaces) using Regex
const words = declaration.split(/\s+/);
// words.sort((a,b) => b.length - a.length);

// // Using BubbleSort as in the logic004.js
// Bubble Sort implementation (longest to shortest)
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = 0; j < words.length - i - 1; j++) {
      if (words[j].length < words[j + 1].length) {
       const temp = words[j];
       words[j] = words[j+1];
       words[j+1] = temp;
       }
    }
  }
  
console.log('Words sorted by length (longest to shortest) :', words );
  



