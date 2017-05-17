var evens = [0, 2, 4, 6, 8, 10]

for (let i = 0; i < evens.length; i++) {
  console.log(`${evens[i]} is not odd!`)
}

evens.forEach(function(even, index, array) {
  console.log(`${even} is not odd!`)
})

function square(n) {
  console.log(n * n)
}

function doToElementsInArray(array, callback) {
  array.forEach(callback)
}

function changeCompletely(element, index, array) {
  array[index] = (Math.random() * 100).toString() + '!!!'
}

doToElementsInArray(evens, changeCompletely)

console.log(evens)
