// index doToElementsInArray(array, callback) is defined
// index doToElementsInArray(array, callback) performs `callback` on `array` using `Array.prototype.forEach`
function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

// index changeCompletely(element, index, array) is defined
// index changeCompletely(element, index, array) completely alters an array in place when used with Array.prototype.forEach
function changeCompletely(element, index, array) {
  array[index] = (Math.random() * 100).toString() + '!!!';
}

var animals = ["dog", "fish", "cat"];
doToElementsInArray(animals, changeCompletely);
// log out animals -- pretty cool, right?
console.log(animals);
