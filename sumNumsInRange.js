/*
Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. 
The lowest number will not always come first.
For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/


// This only works for integers, as i is an integer
function sumAll(arr) {  
  let sumBetween = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sumBetween += i;
  }
  return sumBetween;
}

sumAll([1, 4]);

/* 
***** the incorrect route I was going down...
If I just use reduce() it will only do the 1st and last number, not the numbers between.

function sumAll(arr) {
  console.log(arr.reduce((a, b) => a + b));
  return arr.reduce((a, b) => a + b);
}

***** another solution:
function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sumBetween = 0;
  for (let i = min; i <= max; i++) {
    sumBetween += i;
  }
  return sumBetween;
}
*/
