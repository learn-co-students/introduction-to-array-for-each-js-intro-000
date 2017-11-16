// Add your doToElementsInArray() function here:
function doToElementsInArray(array,callback) {
  array.forEach(callback);
  return array;
}

// Add your changeCompletely() function here
function changeCompletely(element,index,array) {
   array[index]=Math.floor(Math.random()*100).toString()+` ${array[index]}s!!!`;
  }
//doToElementsInArray(array,changeCompletely);
