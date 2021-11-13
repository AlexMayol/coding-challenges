/*

This problem was asked by Google.

Given a string of parentheses, write a function to compute the minimum number of 
parentheses to be removed to make the string valid (i.e. each open parenthesis is eventually closed).

For example, given the string "()())()", you should return 1.
Given the string ")(", you should return 2, since we must remove all of them.

*/

const REGEXP = /(\(\))/g;

const numberOfElementsToRemove = (parentheses) => {
    let state = parentheses;

    const canRemove = (str) => {
        const result = str.replace(REGEXP, "");

        if (result !== str) {
            state = result;
            canRemove(result);
        }

        return;
    };

    canRemove(parentheses);

    return state.length;
};

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

testCases.forEach(({ input, output }, i) => console.log(`Test #${i}: ${numberOfElementsToRemove(input) === output ? "✅" : "❌"}`));
