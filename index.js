// Add your doToElementsInArray() function here:
var doToElementsInArray = (array, doThis)=>
{
  array.forEach(doThis);
}

// Add your changeCompletely() function here:
function changeCompletely(element, index, array) {
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
}
