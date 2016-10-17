function doToElementsInArray(array, callback) {
  array.forEach(callback)
}

function changeCompletely(element, index, array) {
  array[index] = (Math.random() * 100).toString() + '!!!'
}

var animals = ['dog', 'fish', 'cat']

doToElementsInArray (amimals, changeCompletely)

console.log(animals)
