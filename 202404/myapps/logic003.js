let numbers = [14,9,19,2,33,74,99,12, 82];
// Write code that will let us know number is the largest number

// Function to find the largest number
// function findLargest(arr) {
//     let largest = arr[0]; // Initialize largest with the first element
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > largest) {
//         largest = arr[i];
//       }
//     }
//     return largest;
//   }
  
//   // Find and print the largest number
//   const largestNumber = findLargest(numbers);
//   console.log("The largest number in the array is:", largestNumber);


let largestNum = numbers[0]; // Assume the first element is the largest initially

for (let i = 0; i < numbers.length; i++) {
    console.log('interaction' , i);
    console.log('index #',numbers[i]);
  if (numbers[i] > largestNum) {
    
    largestNum = numbers[i];
    
  }
}

console.log("The largest number in the array is:", largestNum);
