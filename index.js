// define a function that accepts two arguments:
// an array and a callback function to pass to .forEach()
doToElementsInArray(array, changeCompletely) {
  console.log(array)
}

changeCompletely(element, index, array) {
  array[index] = `Mmmm, ${element}!!!`
}
