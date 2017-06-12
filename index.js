function changeCompletely(element, index, array){
  array[index] = Math.random().toString()
}
function doToElementsInArray(array, callback){
  array.forEach(callback)
}
