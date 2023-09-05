// completed sorting algorithm -
// in the previous example, we got the smallest number at the front of the array
// turns out we just have to keep doing the same processing to remaining members
// for example: for the scond round of sorting, we have to place the
// second large number at the second place ...
// and third round, third large number at third place ... and so on and so on

numbers = [30, 50, 20, 40, 10]; // an array of 5 integer number

console.log("BEFORE SORTING: ");
console.log(numbers);

// we will have to do nested for-loop (for-loop inside another for-loop)
console.log("\nStart Sorting ...\n");
// outer for-loop
for (i = 0; i < numbers.length - 1; i++) {
  // inner for-loop
  for (j = i + 1; j < numbers.length; j++) {
    console.log(`Comparing ${numbers[j]} to the number at position #${i} ... `);
    if (numbers[j] < numbers[i]) {
      temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp;
    }
  } // end of inner-loop
  console.log(numbers);
  console.log();
} // end of outer-loop

console.log("\nAFTER SORTING: ");
console.log(numbers);
