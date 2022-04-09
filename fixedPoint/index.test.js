const { fixedPoint } = require('./index')

const validations = [
    {
        input: [-6, 0, 2, 40],
        output: 2
    },
    {
        input: [1, 5, 7, 8],
        output: false
    },
    {
        input: [0, 0, 3, 1],
        output: 0
    },
    {
        input: [1, 8, 9, 66, 4],
        output: 4
    },
    {
        input: [1, 8, 2, 66, 4],
        output: 2
    },
    {
        input: [1, 8, 4, 66, 5],
        output: false
    },
]

test('Fixed point in array', () => {
    validations.forEach(x => expect(fixedPoint(x.input)).toEqual(x.output))
});
