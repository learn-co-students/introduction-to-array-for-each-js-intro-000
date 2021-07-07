// Add your doToElementsInArray() function here:

function doToElementsInArray(array, callback) {
    array.forEach(callback)
    console.log('running to do...')
}

// Add your changeCompletely() function here:

function changeCompletely(element, index, array) {
    array[index] = 'something else'
    console.log('i m changin something')
    console.log(`element: ${element}`)
    console.log(array)
}
