/*

This problem was asked by Apple.

A fixed point in an array is an element whose value is equal to its index. Given a sorted array of distinct elements, return a fixed point, if one exists. Otherwise, return False.

For example, given [-6, 0, 2, 40], you should return 2. Given [1, 5, 7, 8], you should return False.

*/

const fixedPoint = (list) => {

    let result = false;

    for (let x = 0; x < list.length; x++) {

        if (list[x] === x) {
            result = list[x];
            break;
        }
    }

    return result;
}


const testCases = [
    {
        input: [-6, 0, 2, 40],
        output: 2,
    },
    {
        input: [1, 5, 7, 8],
        output: false,
    },
    {
        input: [-3, -4, 2, 3, 4, 7],
        output: 2,
    },
    {
        input: [0, 3, 1, 2333, -550],
        output: 0,
    },
    {
        input: [434, 23, 53, 11, 4, -4, -3, 7],
        output: 4,
    },
    {
        input: [-4, 3, 2, 1, 1, 1, 1, 1, 3, 3232323, 11, 11],
        output: 2,
    },
    {
        input: [3, 1],
        output: 1,
    },
    {
        input: [2],
        output: false,
    },
    {
        input: [332, 41, 56, 123, 14, -44, -443, 4, 3, -3, 43, 453],
        output: false
    }
];

testCases.forEach(({ input, output }, i) => console.log(`Test #${i}: ${fixedPoint(input) === output ? "✅" : "❌"}`));
