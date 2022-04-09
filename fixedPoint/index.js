// A fixed point in an array is an element whose value is equal to its index.
// Given a sorted array of distinct elements, return a fixed point, if one exists. Otherwise, return False.

// For example, given [-6, 0, 2, 40], you should return 2. Given [1, 5, 7, 8], you should return False.

const fixedPoint = (arr) => {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] == index) {
            return arr[index]
        }
    }
    return false
}

module.exports = { fixedPoint }
