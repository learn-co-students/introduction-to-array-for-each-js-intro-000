// Add your doToElementsInArray() function here:
var doToElementsInArray =(arr,callback) =>{
  arr.forEach(callback);
}

// Add your changeCompletely() function here:
/*var changeCompletely =(arr,callback)=>{
  arr.forEach(el=>callback(el));
}*/
function changeCompletely(element, index, array) {
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
}
