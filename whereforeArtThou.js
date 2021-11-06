/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs 
(second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains 
the name and its value, that was passed on as the second argument.

-Our two inputs are an array of objects (collection) and an object (source).
-We want our ouput to be an array.
-We need to check if the second argument exists in the first argument (check if the key(s) exists).

 The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would. 
 */

function whatIsInAName(collection, source) {
  let arr = [];
  // Only change code below this line
  // Create an array of keys
  const sourceKeys = Object.keys(source);
  // obj is each element (which is an object) in the collection array
  arr = collection.filter(function(obj) {
    // Loop through based on the number of keys in the source - this is the callback fn
    for (let i = 0; i < sourceKeys.length; i++) {
      // if obj doesnt have the key OR if obj key's value doesn't equal source key's value
      // return false so it get's filtered out
      if (!obj.hasOwnProperty(sourceKeys[i]) || obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
        return false;
      }
    }
    // If it passed the condition, returns true and passed into the arr
    return true;
  })
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
