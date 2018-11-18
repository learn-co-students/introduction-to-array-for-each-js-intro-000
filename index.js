// Add your doToElementsInArray() function here:


// Add your changeCompletely() function here:


var evens = [0, 2, 4, 6, 8, 10];

evens.forEach(
  even => {
  console.log(`${even} is not odd!`);
});

function square(n){
  console.log(n*n)
}

evens.forEach(square)

function doToEvens(callback){
  evens.forEach(callback)
}

function doToElementsInArray(array, callback){
  array.forEach(callback)
}

var animals = ["dog", "cat", "squirrel"];

function changeCompletely(element, index, array){
  array[index] = Math.floor(Math.random()*100+2).toString() + `${array[index]}s!!!`
}

doToElementsInArray(animals, changeCompletely)

console.log(animals)