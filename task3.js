// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
const numbers = [3, 4, 5];
const size = numbers.length;
function make_avg(array, size) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  const avg = sum / size;
  return avg;
}
const avg = make_avg(numbers, size);
console.log(avg);
