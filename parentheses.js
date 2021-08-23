/*

This problem was asked by Google.

Given a string of parentheses, write a function to compute the minimum number of parentheses to be removed to make the string valid (i.e. each open parenthesis is eventually closed).

For example, given the string "()())()", you should return 1. Given the string ")(", you should return 2, since we must remove all of them.

*/

const numberOfElementsToRemove = (parenthesis) => {

    const length = parenthesis.length;
    const regExp = /(\(\))/g;
    const pairs = parenthesis.match(regExp) || [];
    const chars = pairs.length * 2;

    return length - chars;

};

const test1 = '()())()';
const result1 = 1;
const test2 = '()())()(';
const result2 = 2;
const test3 = '))))(()()))()(()()(';
const result3 = 9;
const test4 = '()()()';
const result4 = 0;
const test5 = '))))((((';
const result5 = 8;
const test6 = ')(';
const result6 = 2;
const test7 = ')())()((';
const result7 = 4;

console.log(numberOfElementsToRemove(test1) === result1);
console.log(numberOfElementsToRemove(test2) === result2);
console.log(numberOfElementsToRemove(test3) === result3);
console.log(numberOfElementsToRemove(test4) === result4);
console.log(numberOfElementsToRemove(test5) === result5);
console.log(numberOfElementsToRemove(test6) === result6);
console.log(numberOfElementsToRemove(test7) === result7);
