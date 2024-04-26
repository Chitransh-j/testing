const clonearray = require('./clonearray')

const arr = [1, 2, 3, 4]

test('It should return true if the duplicated array is same as the original array', () => {
    expect(clonearray(arr)).toEqual(arr)
})