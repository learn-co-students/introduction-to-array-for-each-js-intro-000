function changeCompletely(element, index, array) {
  array.forEach ( item =>
    item *= item
  )
}

function doToElementsInArray(array, callback){
  array.forEach (item => callback(item)) 
}
