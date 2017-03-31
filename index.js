var even = [0, 2, 4, 6, 8, 10];


function changeCompletely(element, index, array) {
  array[index]= (Math.random() * 100).toString() + '!!!';
}

function doToElementsInArray(array, callback) {
  array.forEach(callback);
}
