function doToElementsInArray(arr, callback){
  return arr.forEach(callback)
}

function changeCompletely(element, index, arr){

  arr[index] = Math.floor(Math.random() * 100 + 2).toString() + `${arr[index]}s!!!`

}
