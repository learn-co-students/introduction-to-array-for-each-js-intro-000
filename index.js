// Add your doToElementsInArray() function here:
//.forEach() method allows us to iterate over every element of the array without writing out a forLoop
 function doToElementsInArray(array, callback){
   array.forEach(callback)
 }
// Add your changeCompletely() function here:
function changeCompletely(element, index, array) {
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
}
