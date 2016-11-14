function changeCompletely(element,index,array){
  array.forEach((element,index,array)=>{index= Math.floor(Math.random()*array.length)})
}
function doToElementsInArray(array, callback){
  array.forEach(callback)
}
