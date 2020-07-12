// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callback) {
    array.forEach(callback);
}

// Add your changeCompletely() function here:
function changeCompletely(element, index, array) {
    array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
}

// // mdn Object.assign;

// let arr = [1,2,3,4,5];
// let sum = arr.map(function(num){
//     return num * 10;
// })
// console.log('object :>> ', sum);
// console.log( console );

// const new1 = 'object :>> ';
// console.log(new1);
// console.table