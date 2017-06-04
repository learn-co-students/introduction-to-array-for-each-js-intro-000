function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

var animals= ["dog", "cat", "rabbit"];

function changeCompletely(element, index, array) {
  array[index]= (Math.random() * 100).toString() + "!!!";
}

doToElementsInArray(animals, changeCompletely);
