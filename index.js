var evens = [0, 2, 4, 6, 8, 10];

function doToEvens(callback){
  evens.forEach(callback);
  /*This sub is aimed at a particular, known array called evens*/
}

/*...so this:

doToEvens(function(n){console.log(n*10);})

should return each member of evens times 10.
...which it does.*/

function doToElementsInArray(array,callback){
  array.forEach(callback);
  /*This sub is generic*/
}

function changeCompletely(element, index, array){
  array[index] = (Math.random() * 100).toString() + '!!!'
}

var animals = ["dog", "fish", "cat"]

doToElementsInArray(animals, changeCompletely)

console.log(animals);
