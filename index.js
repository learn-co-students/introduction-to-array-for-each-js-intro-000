function changeCompletely(element, index, array){
  array[index] = Math.floor(Math.random()*100);
}

function doToElementsInArray(array, callback){
  array.forEach(changeCompletely);
  callback();
}