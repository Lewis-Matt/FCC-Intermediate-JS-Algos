/*
Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, 
return the symmetric difference of the two arrays.
Note: You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {

  const difference1 = arr1.filter(x => !arr2.includes(x));
  const difference2 = arr2.filter(x => !arr1.includes(x));
  // Testing
  console.log(difference1);
  console.log(difference2);
  // syntax array1.concat(array2, array3, ..., arrayX)
  const newArr = (difference1.concat(difference2));
  // Testing
  console.log(newArr);
  return newArr;
}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


// Easier way to do symmetric difference:
let difference = arr1
.filter(x => !arr2.includes(x))
.concat(arr2.filter(x => !arr1.includes(x)));
