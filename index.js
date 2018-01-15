// Add your doToElementsInArray() function here:
function doToElementsInArray(array, func) {
  //console.log("in doToElementsInArray()");
  array.forEach(func);
}


// Add your changeCompletely() function here:
function changeCompletely(element, index, array) {
  //console.log("in changeCompletely()");
  array[index] = Math.floor(Math.random() * 100 + 2).toString()
    + ` ${array[index]}s!!!`;
}

var animals = ["bear", "pig", "platypus", "frog"];

doToElementsInArray(animals, changeCompletely);

console.log(animals);