// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callback){
  array.forEach(callback);
}
var animals = ["dog", "cat", "squirrel"]
function changeCompletely(element, index, array){
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`
}
doToElementsInArray (animals, changeCompletely)
// Add your changeCompletely() function here:
