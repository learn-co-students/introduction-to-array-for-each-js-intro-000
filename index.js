// Add your doToElementsInArray() function here:
/*
function doToElementsInArray(arr){

  arr.forEach(changeCompletely)

}//end doToElementsInArray

function changeCompletely(){


}*/

function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

function changeCompletely(element, index, array) {
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
}
