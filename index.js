// Add your doToElementsInArray() function here:
function doToElementsInArray(array,fn){
  array.forEach(fn);
}

// Add your changeCompletely() function here:
function changeCompletely(element,index,array){
  array[index] += "a"
}
