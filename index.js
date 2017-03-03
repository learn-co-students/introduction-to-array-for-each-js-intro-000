function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

function changeCompletely(element, index, array) {
  array[index] = (Math.random() * 100).toString() + "!!!"
}

var animals = ["dog", "cat", "fish"];

doToElementsInArray(animals, changeCompletely);

console.log(animals);
