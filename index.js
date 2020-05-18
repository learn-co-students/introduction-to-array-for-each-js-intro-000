// Add your doToElementsInArray() function here:// sets function  in globally scope to use callback for other functions
function doToElementsInArray(array, callback) { //to use callback for other functions
  array.forEach(callback);
}

// Add your changeCompletely() function here:
function changeCompletely(element, index, array) {// function uses array index parameter 
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;// to create greatest integer at random;
  //  multiplies by 100 adds 2 then changes to string to print string intorpalated 
}

var animals = ["dog", "cat", "squirrel"];// sets variable of array 

doToElementsInArray(animals, changeCompletely);// fuction uses previous function on array of animals
//in callback, passes another function, console log result
// log out animals -- pretty cool, right?
console.log(animals); // Array(3) ["8 dogs!!!", "44 cats!!!", "95 squirrels!!!"]
