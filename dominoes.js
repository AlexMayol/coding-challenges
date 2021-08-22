/*

This problem was asked by Microsoft.

You are given an string representing the initial conditions of some dominoes. Each element can take one of three values:

    L, meaning the domino has just been pushed to the left,
    R, meaning the domino has just been pushed to the right, or
    ., meaning the domino is standing still.

Determine the orientation of each tile when the dominoes stop falling. Note that if a domino receives a force from the left and right side simultaneously, it will remain upright.

For example, given the string .L.R....L, you should return LL.RRRLLL.

Given the string ..R...L.L, you should return ..RR.LLLL

*/

const getOrientation = (string) => {
    return 'wip'
}
const test1 = ['.L.R....L']
const solution1 = ['LL.RRRLLL']
const test2 = ['..R...L.L']
const solution2 = ['..RR.LLLL']

console.log(getOrientation(test1) === solution1)
console.log(getOrientation(test2) === solution2)
