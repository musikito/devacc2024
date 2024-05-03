let numbers = [14,9,19,2,33,74,99,12,102,18, 145];
let largestNum = 0;

for(i = 0; i < numbers.length; i++){
    // console.log(numbers[i]);
    if(numbers[i] > largestNum){
        largestNum = numbers[i];
       
    }
}
console.log(largestNum);