function doToElementsInArray(array, callback){
  return array.forEach(callback)
}

function changeCompletely(element, index, array) {
  array[index] = ` ${array[index]}s!!!`;
}
