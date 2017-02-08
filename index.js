var evens = [0, 2, 4, 6, 8, 10]
evens.forEach(evens=>{
  console.log(`${evens} is not odd!`)
})

evens.forEach((evens, index, array) =>{
  debugger
  console.log(`${evens} is not odd!`)
})

function square (n) {
  console.log(n*n)
}

function doToEvens(callback) {
  evens.forEach(callback)
}

function doToElementsInArray(array, callback) {
  array.forEach(callback)
}

function changeCompletely(element, index, array) {
  array[index] = (Math.random()*100).toString()+'!!!'
}

var animals = ["dog", "fish", "cat"]

doToElementsInArray(animals, changeCompletely)

console.log(animals)
