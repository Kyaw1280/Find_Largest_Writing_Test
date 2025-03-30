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

})