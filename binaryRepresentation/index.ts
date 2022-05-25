/*

This problem was asked by Stripe.

Given an integer n, return the length of the longest consecutive run of 1s in its binary representation.

For example, given 156, you should return 3.
*/

export const getLongestRun = (num: number): number => {
    let binary = (num >>> 0).toString(2);
    let array = binary.match(/(1)+/gi)?.sort();
    if (!array)
        return 0
    return array[array.length - 1].length;
};
