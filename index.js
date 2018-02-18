function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

function changeCompletely(element, index, array) {
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
}

// riverdaleMainCharacters;
// => ["7 Jugheads!!!", "42 Bettys!!!", "11 Veronicas!!!", "35 Archies!!!", "50 Cheryls!!!"]
