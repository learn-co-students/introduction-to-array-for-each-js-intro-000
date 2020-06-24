// Add your doToElementsInArray() function here:fu
function doToElementsInArray(array,callback){
  array.forEach(callback)
}

// Add your changeCompletely() function here:
function changeCompletely(element,index,array){
array[index]=`${array[index]}`+'2'
}
