
var evens = [0, 2, 4, 6, 8, 10];
 
for (var i = 0; i < evens.length; i++) {
  console.log(`${evens[i]} is not odd!`);
}

//---vs---

	evens.forEach(evenNum => {
	console.log(`${evenNum} is not odd!`);
	});

//---or---

	evens.forEach((even, index, array) => {
  	console.log(`${even} is not odd!`);
	});

/////////////////////////////////////////////////

// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

/*function callback(){(fruit => {
	console.log(`Mmmm, ${fruit}!!!`);
	});
}
*/

// Add your changeCompletely() function here:

function changeCompletely(element, index, array) {
  array[index] = (Math.random() * 100).toString() + '!!!'
  return array
}