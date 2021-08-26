/*

This problem was asked by Stripe.

Given an integer n, return the length of the longest consecutive run of 1s in its binary representation.

For example, given 156, you should return 3.
*/

const getLongestRun = (num) => {
    let binary = (num >>> 0).toString(2);
    let array = binary.match(/(1)+/ig).sort()
    return array[array.length - 1].length
}

const test1 = '156';
const solution1 = 3;
const test2 = '233';
const solution2 = 3;
const test3 = '45443';
const solution3 = 2;
const test4 = '8';
const solution4 = 1;

console.log(getLongestRun(test1) === solution1)
console.log(getLongestRun(test2) === solution2)
console.log(getLongestRun(test3) === solution3)
console.log(getLongestRun(test4) === solution4)