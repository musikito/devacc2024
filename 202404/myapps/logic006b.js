let numbers = [14,9,19,2,33,74,99,12,102,18,145,7];
// console.log(numbers.indexOf(12));
// // console.log(numbers.indexOf(33));
// numbers.splice(numbers.indexOf(74),1);
// console.log(numbers);

let largestNum = 0;
let numSort = [];
for(j = 0; j < numbers.length; j++ ) {
    largestNum = 0;
    for(i = 0; i < numbers.length; i++) {
        // console.log(numbers[i]);
        if(numbers[i] > largestNum){
            largestNum = numbers[i];   
        }
    }
    j=0
    numSort.push(largestNum);
   numbers.splice(numbers.splice(largestNum),1);
}
console.log(numSort);
// console.log(`largest number is ${largestNum}`);
// console.log(`index ${i}`);
// console.log(`array content is  ${numbers}`);
// console.log('---------------------------------');

// console.log(largestNum);
// console.log(numbers);

