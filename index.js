// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callback){
    array.forEach(callback);

}

function changeCompletely(element,index, array){
  array[index] =` ${array[index]}!`;

}// Add your changeCompletely() function here:

var animals = ["dog", "cat", "squirrel"];

doToElementsInArray(animals, changeCompletely);
