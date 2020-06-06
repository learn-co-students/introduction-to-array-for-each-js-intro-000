// Add your doToElementsInArray(array, callback) function here:
/**
 * defining a function that accepts two arguments: an array and a callback function that is invoked on every element of array using .forEach method 
 * we pass array parameter to doToElementsInArray and use it to invoke .forEach method on it. 
 * We pass callback as a parameter to .forEachmethod. This callback 
 **/
 
 
 function doToElementsInArray(array,callback) {
 array.forEach(callback);
}

 

/**
 * This function is passed as a callback function to Array.prototype's forEach method and changes every element of this array.
 * @function {changeCompletely ()} 
 * @params {element} the array element paramter that is passed to the changeCompletely () callback function. This is the element that changeCompletely will change through entire iteration through array.
 * @params {array} the array protype that is passed changeCompletely 
 */
// Add your changeCompletely() function here:


function changeCompletely(element, index, array) {
  // Defines changeCompletely () function and its parameters-- element, index, and array.
  // Sets array element to a different string, which
  // the .forEach method will do to every item in the array
  // when the changeCompletely callback is passed to the array.forEach method. 
  
  array[index] = `${element} is now different`;
  
  
  
}

