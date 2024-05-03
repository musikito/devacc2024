var array = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }];
console.log(array);
// Iterate over the array and modify each object
for (let i = 0; i < array.length; i++) {
  array[i].age = 50;
}

// Print the updated array
console.log(array);