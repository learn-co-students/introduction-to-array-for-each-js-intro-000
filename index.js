function changeCompletely(element, index, array){
    array[index] = element + "is awesome!!"
}

function doToElementsInArray(array, callback){
  array.forEach(callback)
}
