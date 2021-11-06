/* You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.
Note: You have to use the arguments object.

Arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.
The arguments object is a local variable available within all non-arrow functions. You can refer to a function's arguments inside that function by using its arguments object. 
It has entries for each argument the function was called with, with the first entry's index at 0.

For example, if a function is passed 3 arguments, you can access them as follows:

arguments[0] // first argument
arguments[1] // second argument
arguments[2] // third argument

The arguments object is not an Array. It is similar, but lacks all Array properties except length. 
The arguments object is useful for functions called with more arguments than they are formally declared to accept. */

// Using nested loops
function destroyer(arr) {
  // Create an array of valsToRemove using Object.values(arguments).slice(1) (the argument at index 0 is the arr, we want to slice the arguments after)
  // and store it in the variable valsToRemove. We’ll use this to check against arr.
  let valsToRemove = Object.values(arguments).slice(1);
  // Start a basic for loop to iterate through arr. Nest another for loop inside the first, changing the integer variable j and arr to valsToRemove. 
  // This second loop will iterate through valsToRemove .
  // Within the second loop create an if statement, checking strictly === that the current value of arr[i] is equal to valsToRemove[j].
  // If the value at the current index is equal in both arrays, use delete to remove it from arr.
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < valsToRemove.length; j++) {
      if (arr[i] === valsToRemove[j]) {
        delete arr[i];
      }
    }
  }
  // Outside of the nested loops: return the modified array, filtering out any null's created by the delete operator.
  return arr.filter(item => item !== null);
}

// Using array and from
function destroyer(arr) {
  // Declare a variable named valsToRemove and set it equal to a new Array object from() the arguments passed into the function. 
  // Use the slice() method on the array of arguments, starting from the second index, 1.
  var valsToRemove = Array.from(arguments).slice(1);
  // Return the filtered array, using includes() in the callback function to check if val is not in valsToRemove; 
  // returning true to keep the value in the original array or false to remove it.
  return arr.filter(function(val) {
    return !valsToRemove.includes(val);
  });
}

// Using spread operator
// Using spread operator to retrieve the arguments.
function destroyer(arr, ...valsToRemove) {
  // Return the filtered array, using includes().
  return arr.filter(elem => !valsToRemove.includes(elem));
}

/*
destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1]
destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], 
"yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65].
*/
