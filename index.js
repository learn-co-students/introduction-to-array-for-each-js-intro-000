//test 1 & 2
function doToElementsInArray(Array,callback){
  Array.forEach(callback);
};

// test 3 & 4
//index.js changeCompletely() is defined:
function changeCompletely(element, index, array){
  array[index] = Math.floor(Math.random()*100+2).toString()
  + `${array[index]}s!!!`;
}
var animals = ["dog", "cat", "squirrel"];
doToElementsInArray(animals, changeCompletely);
console.log(animals);
