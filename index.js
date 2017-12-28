// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

// Add your changeCompletely() function here:
function changeCompletely(element, index, array) {
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + `${array[index]}s!!`;
}


var evens = [0, 2, 4, 6, 8, 10];

evens.forEach(even => {
  console.log(`${even} is not odd!`);
});


function evenFn(even, index, array) {
  console.log(`${even} is not odd`);
}
// this is equal to
for (let i = 0; i < evens.length; i++) {
  evenFn(evns[i], i, evens);
}

//pass a function as an argument to another function so that it can serve as a callback

//callbacks - define a functiojn beut delegate control of when it should be invoked to another function

function square(n) {
  console.log(n * n);
}

var evens = [0, 2, 4, 6, 8, 10];

function doToEvens(callback) {
  evens.forEach(callback);
} // pass any function to doToEvens and that function will be invoked on every element of the evens array!

// if we don't know which array we'll be working on
