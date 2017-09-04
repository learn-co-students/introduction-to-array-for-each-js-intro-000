// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callback){
  array.forEach(callback);
}

// Add your changeCompletely() function here:
function changeCompletely(element, index, array){
  var num = Math.floor(Math.random() * 100 + 2).toString();
  array[index] = num + `${array[index]}s!!!`
}
