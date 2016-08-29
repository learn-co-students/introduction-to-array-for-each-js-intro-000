var changeCompletely = (element, index, array) => {
  array[index] = (Math.random() * 100).toString() + '!!!'
}

var doToElementsInArray = (array, callback) => {
  array.forEach(callback)
}
