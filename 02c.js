// remember we said swapping is important for sorting?
// let's do a half-bake sorting algorithm - find the smallest number
// and make it the first element of the array (partly sorted)

// we are using for-loop to visit each member (starting second member) and compare to the first member
// if that number is smaller than the first member, then swapping them
// otherwise, do nothing and continue till all elemember are compared

numbers = [50, 30, 20, 40, 10]; // an array of 5 integer number

console.log("BEFORE SORTING: ");
console.log(numbers);

// a little bit of sorting - making the smallest member the first element
console.log("\nSorting ...");
for (i = 1; i < numbers.length; i++) {
  console.log(`\nComparing ${numbers[i]} to the first number ... `);
  if (numbers[i] < numbers[0]) {
    temp = numbers[0];
    numbers[0] = numbers[i];
    numbers[i] = temp;
  }
  console.log(numbers);
}

console.log("\nAFTER SORTING: ");
console.log(numbers);
