function doToElementsInArray(arr, callback){
  arr.forEach(callback);
}

function changeCompletely(elem, index, arr){
  arr[index] = Math.floor(Math.random() * 100 + 2).toString() + `${arr[index]}s!!!`;
}
