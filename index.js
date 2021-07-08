// Add your doToElementsInArray() function here:
function doToElementsInArray(anArray,callback){
  anArray.forEach(callback)
}

// Add your changeCompletely() function here:
function changeCompletely(element,index,array){
  array[index] += "changed"

}
