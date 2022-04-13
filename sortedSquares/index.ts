// Given a sorted list of integers, square the elements and give the output in sorted order.

// For example, given [-9, -2, 0, 2, 3], return [0, 4, 4, 9, 81].

export const sortedSquares = (arr: number[]) => {
    return arr.map(num => num * num).sort((a, b) => a - b)
}
