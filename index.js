

function square(n) {
  console.log(n*n);
}

function doToEvens(callback){
  evens.forEach(callback)
}

function doToElementsInArray(array, callback){
  array.forEach(callback)
}

function changeCompletely(element, index, array) {
  array[index]= (Math.random()*100).toString() + '!!!';
}

var animals = ["dog", "fish", "cat"];

doToElementsInArray(animals, changeCompletely)