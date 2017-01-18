function changeCompletely(x, i, a) {
  a[i] = (Math.random() * 100).toString() + '!!!'
}

function doToElementsInArray(array, callback) {
  array.forEach(callback)
}

