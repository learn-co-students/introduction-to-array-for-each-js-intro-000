// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callFunction){
  array.forEach(callFunction); // this is not very illustrative.
}

// Add your changeCompletely() function here:
function changeCompletely(element, index, array){ // these are givens in array.forEach.
  array[index] = 0; // all work consisted of visualizing what's being passed / exists where.
}
