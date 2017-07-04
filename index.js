function doToElementsInArray(array, callback){
  array.forEach(callback)
}


function changeCompletely(item, index, arr){
  arr[index] = item + "bobo"
}
