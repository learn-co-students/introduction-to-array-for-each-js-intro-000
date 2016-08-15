function changeCompletely(element, index, array) {
   // body...
   array[index] = (Math.random() * 100).toString() + '!!!';

};

function doToElementsInArray(array, callback) {
	// body...
	array.forEach(callback);
};

