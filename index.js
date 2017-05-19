var array = [1, 2, 3];
function changeCompletely(element, index, array){
    array[index] = element * element;
}

function doToElementsInArray(array, callback){
    array.forEach(callback);
}

doToElementsInArray(array, changeCompletely);