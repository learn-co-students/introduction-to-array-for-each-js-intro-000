///////////////////////////////////////////////////////////////////////////////
/*
1)

describe('changeCompletely(element, index, array)', () => {
  it('is defined', () => {
    expect(changeCompletely).to.be.a('function')
  })

  it('completely alters an array in place when used with Array.prototype.forEach', () => {
    const array = [1, 2, 3]

    expect(array.forEach(changeCompletely)).not.to.eql([1, 2, 3])
  })
})

*/

function changeCompletely(element, index, array) {
  array[index] = (Math.random() * 100).toString() + '!!!'
}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/*
describe('doToElementsInArray(array, callback)', () => {
  it('is defined', () => {
    expect(doToElementsInArray).to.be.a('function')
  })

  it('performs `callback` on `array` using `Array.prototype.forEach`', () => {
    const callback = chai.spy()
    const array = [1, 2, 3]
    const forEach = chai.spy.on(array, 'forEach')

    doToElementsInArray(array, callback)

    expect(callback).to.have.been.called
    expect(forEach).to.have.been.called
  })
*/
function doToElementsInArray(array, callback) {
  array.forEach(callback)
}
