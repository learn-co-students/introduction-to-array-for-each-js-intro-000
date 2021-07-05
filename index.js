var evens = [0, 2, 4, 6, 8, 10];

evens.forEach (element => {
  console.log(`${element} is not odd!`)
})

even => {
	console.log(`${even} is not odd!`);
}

evens.forEach((element, index, array) => {
	debugger;
	console.log(`${element} is not odd!`);
})

// This whole thing under here is basically the forEach() function.

function evenFn(even, index, array) {
	console.log(`${even} is not odd!!`);
}

for (let i = 0; i < evens.length; i++) {
	evenFn(evens[i], i, evens);
}

//New line

function square(n) {
	console.log (n*n);
}

evens.forEach(square)

function doToEvens(callback) {
	evens.forEach(calllback);
}


function doToElementsInArray (array, callback) {
	array.forEach(callback)
}

//more new line

function changeCompletely (element, index, array) {
	array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
}

var animals = ['dog', 'cat', 'squirrel']

console.log(doToElementsInArray(animals, changeCompletely));
