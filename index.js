function changeCompletely(element, index, array){

  array[index] = (Math.random() * 100).toString() + '!!!'
  //Array.prototype.forEach()
//  done();

}

function doToElementsInArray(array, callback){

  Array.prototype.forEach(callback)
//  done();

}
