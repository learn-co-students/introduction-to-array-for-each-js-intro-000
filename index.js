var evens = [0, 2, 4, 6, 8, 10];

for (var i = 0, l = evens.length; i < l; i++) {
  console.log(`${evens[i]} is not odd!`)
}

evens.forEach((num, idx, arr) =>{
  console.log(`${num} is not odd!`);
})


function square(n) {
  console.log(n ** 2);
}


function doToEvens(callback) {
  evens.forEach(callback)
}

function doToElementsInArray(array, callback) {
  array.forEach(callback)
}


function changeCompletely(ele, idx, arr) {
  arr[idx] = (Math.random() * 100).toString() + "!!!"
}

var animals = ["dog", "fish", "cat"]

doToElementsInArray(animals, changeCompletely)

console.log(animals);
