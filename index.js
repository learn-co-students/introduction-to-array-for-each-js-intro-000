var changeCompletely = (el, index, arr) => {
  arr[index] = el+ '!!!'
}

var doToElementsInArray = (arr, callback) => {
  arr.forEach(callback)
}
