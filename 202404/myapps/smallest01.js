// Function to find the largest number
function findLargest(arr) {
    let largest = arr[0]; // Initialize largest with the first element
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    return largest;
  }
  
  // Find and print the largest number
  const largestNumber = findLargest(numbers);
  console.log("The largest number in the array is:", largestNumber);
