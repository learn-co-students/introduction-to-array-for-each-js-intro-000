var evens = [2, 4, 6, 8, 10]

var animals = ["dog", "fish", "cat"]

evens.forEach(even => {
  console.log(`${even} is not odd!`)
})

evens.ForEach((even, index, array) => {
  debugger
  console.log(`${even} is not odd!`)
})

function doToElementsInArray(array, callback) {
    array.forEach(callback)
}

function changeCompletely(element, index, array) {
    array[index] = (Math.random() * 100).toString() + "!!!"}