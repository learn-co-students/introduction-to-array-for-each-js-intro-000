function doToElementsInArray(array, callback){
  array.forEach(callback)
}

function changeCompletely(element, index, array){
  array[index] = Math.floor(Math.random() * array.length -1)
}
