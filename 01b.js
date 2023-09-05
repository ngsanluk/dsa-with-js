// the right implementation for swapping two variables in programming

x = 100;
y = 200;
console.log("Before Swapping");
console.log(`x = ${x}`);
console.log(`y = ${y}`);

// introduce a temporary variable to store one of the variables
// that we are swapping
temp = x; // temp is created to replicate and preserve the variable x
x = y; // after this step, the previous value of x is gone
y = temp; // lucky we still have temp which is a replica of previous x

console.log("\nAfter Swapping");
console.log(`x = ${x}`);
console.log(`y = ${y}`);

// Question: why is swapping important to data structure and algorithm?
// Turns out swapping is critical to
// one of the most critical computation problem - sorting
// while sorting is critical in efficient searching
