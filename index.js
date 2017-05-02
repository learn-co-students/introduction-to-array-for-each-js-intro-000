function square(n) {
  console.log(n * n)
}

var evens = [0, 2, 4, 6, 8, 10]

function doToEvens(callback) {
  evens.forEach(callback)
}

evens.forEach((even, index, array) => {
  debugger
  console.log(`${even} is not odd!`)
})

/*
function doToElementsInArray(array, callback) {
  array.forEach(callback)
}
*/

var animals = ["dog", "fish", "cat"];
function doToElementsInArray(animals, changeCompletely) {
  animals.forEach(doToElementsInArray);
  console.log(animals)
}

array[index] = (Math.random() * 100).toString() + '!!!';
function changeCompletely(element, index, array) {

  array.forEach(changeCompletely);
}
