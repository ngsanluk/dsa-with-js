// binary search implementation
// the array has to be sorted first (we will talk about sorting later)
// the searching range is halved on completion of each round
// and therefore the searching performance is log(N)

function binarySearch(arr, x, start, end) {
  start = start || 0;
  end = end || arr.length - 1;

  if (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] === x) {
      return mid;
    } else {
      if (arr[mid] < x) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return binarySearch(arr, x, start, end);
  }
  return -1;
}

numbers = [1, 3, 6, 7, 2, 8, 4, 9, 5, 10];
console.log("numbers before sorting: ");
console.log(numbers);

numbers = numbers.sort((a, b) => a - b);
console.log("numbers after sorting: ");
console.log(numbers);

x = 6;
console.log(`\nsearching for ${x} -> `);
console.log(binarySearch(numbers, x, 0, numbers.lenght - 1));

x = 10;
console.log(`\nsearching for ${x} -> `);
console.log(binarySearch(numbers, x, 0, numbers.lenght - 1));

x = 11;
console.log(`\nsearching for ${x} -> `);
console.log(binarySearch(numbers, x, 0, numbers.lenght - 1));
