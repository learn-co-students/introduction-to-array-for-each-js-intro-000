// Add your doToElementsInArray() function here:
function doToElementsInArray(array, changeCompletely){
  array.forEach(changeCompletely);
}

// Add your changeCompletely() function here:
function changeCompletely(e, index, array){
  array[index] = e*e;
}
