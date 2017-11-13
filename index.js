// Add your doToElementsInArray() function here:

  function doToElementsInArray(array, callback) {
  return   array.forEach(callback);
  }
  //evens.forEach(callback);

// Add your changeCompletely() function here:
function changeCompletely(element, index, array){
 return array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;

}
let arr = ["meat", "fish", "apple"]

 doToElementsInArray(arr, changeCompletely)
 console.log(arr);
