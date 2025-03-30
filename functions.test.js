const each = require('jest-each').default

const {findLargest} = require("./functions")

describe("findLarget", () => { 



it("exitsts", () => {
    expect(findLargest).toBeDefined()
})

it("is a function", () => {
    expect(findLargest instanceof Function).toEqual(true)
})

it(" returns a number", () => {
    expect(typeof findLargest() == "number").toEqual(true)
})

it("indentifys the largest value's index" ,() => {
    //Arrange
    const numbers = [1,1,4,1]
    //Act
    const result = findLargest(numbers)
    //Assert
    expect(result).toEqual(2)
    
     expect(findLargest([1,1,4,1])).toEqual(2)
})

test(" returns -1 if no value are passed in", () => {
    expect(findLargest([])).toEqual(-1)
})

each ([
    [2, [1,2,3]],
    [0, [-1, -10, -100]],
    [-1, []],
    [0, [1000000, 4, 5, 2, 5646, 23234, 234]],
    [4, [67, -999, 45, 999, 9992323]],
]).test(`Returns %S when passed %S`, (expected, arr) => {
    // Arrange
    const numbers = arr
    // Act
    const result = findLargest(numbers)
    //Assertion
    expect(result).toBe(expected)
})

})