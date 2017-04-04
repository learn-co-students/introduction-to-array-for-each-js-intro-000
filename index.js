function changeCompletely(element, index, array){
  var result = [];
  array.forEach(function(){
    result.push(index[element]);
  });
  return result;
}

function doToElementsInArray(array, callback){
  
}