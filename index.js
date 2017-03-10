function square(n) {
    return n*n
}

function changeCompletely(element, index, array) {
     array.forEach(square)
}
 function doToElementsInArray(array,callback) {
     array.forEach(callback)
}
