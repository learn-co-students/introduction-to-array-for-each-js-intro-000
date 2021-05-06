// Add your doToElementsInArray() function here:
const doToElementsInArray = (arr, callback) => arr.forEach(callback);

// Add your changeCompletely() function here:

const changeCompletely = (e, i, arr) => arr[i] = Math.floor(Math.random() * 100 + 2).toString() + ` ${arr[i]}s!!!`
