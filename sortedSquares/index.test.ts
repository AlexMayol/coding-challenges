import { sortedSquares } from './index'


const validations = [
    {
        input: [3, 2, 1],
        output: [1, 4, 9]
    },
    {
        input: [-9, -2, 0, 2, 3],
        output: [0, 4, 4, 9, 81]
    },
    {
        input: [-9, -2, 0, 3, 2],
        output: [0, 4, 4, 9, 81]
    },
    {
        input: [-9, -2, 0, 3, 2, 3, 2],
        output: [0, 4, 4, 4, 9, 9, 81]
    },
    {
        input: [-7, 4, 1, -1, 7, 99, -42],
        output: [1, 1, 16, 49, 49, 1764, 9801]
    },

]


test('Sorted list of integers, with squared elements', () => {
    validations.forEach(x => expect(sortedSquares(x.input)).toEqual(x.output))
})
