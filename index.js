var evens = [0, 2, 4, 6, 8, 10]

for (var i = 0; 1 = evens.length; i < 1; i++) {
  console.log(`${evens[i]} is not odd!`)
}

evens.forEach(even => {
  console.log(`{even} is not odd!`)
})

function changeCompletely(element, index, array) {
    array[index] = (Math.random() * 100).toString() + "!!!"
}

var animals = ["dogs", "fish", "cat"]

doToElementsInArray(animals, changeCompletely)
console.log(animals)
