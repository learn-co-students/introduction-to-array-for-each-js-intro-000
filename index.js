function doToElementsInArray(arr, funcCallBack) {
  if (typeof funcCallBack === 'function') {   // make sure is a function before call it
    arr.forEach(funcCallBack);
  }
}

function changeCompletely(elm, index, arr) {
  arr[index] = elm + 'aaa';
}
