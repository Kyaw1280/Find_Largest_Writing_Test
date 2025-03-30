const findLargest = (arr) => {
    if (!arr || arr.length===0) {
        return -1
    } 
    const MaxValue = Math.max(...arr)
    return arr.indexOf(MaxValue)
}



module.exports = {
    findLargest
}