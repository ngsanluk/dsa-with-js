// the algorithm to find the maximum number in an array of numbers

numbers = [30, 50, 20, 40, 10, 80, 90, 15]; // an array of 8 integer number

max = numbers[0];
console.log(`At the begining, max = ${max}`);
for (i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
    console.log(`The NEW max = ${max}`);
  }
}
console.log(`After looping, max = ${max}`);
