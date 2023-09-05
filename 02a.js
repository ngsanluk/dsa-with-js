// linear search implementation
// match search value to array elements one by one
// returns the index of the number being searched if found
// returns -1 if not found

function search(arr, x) {
  console.log("Performing Linear Search ... ");
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      console.log("Found ... ");
      return i; //if found, returns the position (array index)
    }
  }
  console.log("Not found ... ");
  return -1; // if not found, returns -1
}

numbers = [1, 3, 6, 7, 2, 8, 4, 9, 5, 10];

x = 6;
console.log(`\nsearching for ${x} -> `);
console.log(search(numbers, x));

x = 10;
console.log(`\nsearching for ${x} -> `);
console.log(search(numbers, x));

x = 11;
console.log(`\nsearching for ${x} -> `);
console.log(search(numbers, x));
