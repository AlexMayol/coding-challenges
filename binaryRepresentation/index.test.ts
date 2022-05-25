import { getLongestRun } from './index'


const validations = [
    {
        input: 156,
        output: 3,
    },
    {
        input: 233,
        output: 3,
    },
    {
        input: 45443,
        output: 2,
    },
    {
        input: 8,
        output: 1,
    },

]


test('Binary representation function', () => {
    validations.forEach(x => expect(getLongestRun(x.input)).toEqual(x.output))
})
