let numbers = [14,9,19,2,33,74,99,12, 82];
// Write code that will let us know number is the largest number


// let largestNum = numbers[0]; 

// for (let i = 0; i < numbers.length; i++) {
//    // console.log('interaction' , i);
//    // console.log('index #',numbers[i]);
//   if (numbers[i] > largestNum) {
    
//     largestNum = numbers[i];
    
//   }
// }

// console.log("The largest number in the array is:", largestNum);

// // Homework work with 3 other people for Monday largest to smaller and viceversa
// for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < numbers.length; j++) {
//         if (numbers[i] < numbers[j]) {
//             const temp = numbers[j];
//             numbers[j] = numbers[i];
//             numbers[i] = temp;
//         }
//     }
// }
// console.log("sorted ", numbers);

for (let i = 0; i < numbers.length; i++){
    // console.log('index of ', i);
    for(let j = 0;j < numbers.length ; j++){
       //  console.log("j index of ", j);
        if(numbers[i] > numbers[j]){
            // Change the > sign for reverse sort
            // Use a temp var to do the swap
            const tempVar = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = tempVar;
        } // End of if for swaping the values
    } // End of second for(j)

} // End of first for (i)

console.log("sorted: ", numbers);
// console.log(largestNum);


