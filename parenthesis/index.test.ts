import { numberOfElementsToRemove } from './index'

const testCases = [
    {
        input: "()())()",
        output: 1,
    },
    {
        input: "()())()(",
        output: 2,
    },
    {
        input: "))))(()()))()(()()(",
        output: 7,
    },
    {
        input: "()()()",
        output: 0,
    },
    {
        input: "))))((((",
        output: 8,
    },
    {
        input: ")(",
        output: 2,
    },
    {
        input: ")())()((",
        output: 4,
    },
    {
        input: ")))(((",
        output: 6,
    },
    {
        input: ")())(",
        output: 3,
    },
    {
        input: "()()()()()()()()((((())))))",
        output: 1,
    },
    {
        input: "()))))(()((())",
        output: 6,
    },
];



test('Numbers of elements to remove function', () => {
    testCases.forEach(x => expect(numberOfElementsToRemove(x.input)).toEqual(x.output))
})
