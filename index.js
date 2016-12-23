var evens = [0, 2, 4, 6, 8, 10]
var animals = ["dog", "fish", "cat"]

function doToEvens(callback) {
  evens.forEach(callback)
}


function doToElementsInArray(array, callback) {
  array.forEach(callback)
}


function changeCompletely(element, index, array) {
  array[index] = (Math.random() * 100).toString() + '!!!'
}
 

 
doToElementsInArray(animals, changeCompletely)
 
// log out animals -- pretty cool, right?
console.log(animals)
