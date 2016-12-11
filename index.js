var evens = [0,2,4,6,8,10];
var animals = ["dog", "fish", "cat"];

for (var i = 0; i < evens.length; i++){
  console.log(`${evens[i]} is not odd!`);
};
//Below is equivalent to above:
evens.forEach(even => {
  console.log(`${even} is not odd!`);
});

evens.forEach((even, index, array) => {
  debugger //globally available & opens debug console in brower when evaluated
  console.log(`${even} is not odd!`);
})

function square(n){
  console.log(n*n);
};
//Square all elements of var even:
evens.forEach(square);

function doToEvens(callback){
  evens.forEach(callback);
};

function doToElementsInArray(array, callback){
  array.forEach(callback);
};

function changeCompletely(element, index, array){
  array[index] = (Math.random() * 100).toString() +'!!!'
};

//Log out animals
doToElementsInArray(animals, changeCompletely);

console.log(animals);