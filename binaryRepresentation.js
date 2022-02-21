/*

This problem was asked by Stripe.

Given an integer n, return the length of the longest consecutive run of 1s in its binary representation.

For example, given 156, you should return 3.
*/

const getLongestRun = (num) => {
  let binary = (num >>> 0).toString(2);
  let array = binary.match(/(1)+/gi).sort();
  return array[array.length - 1].length;
};

const testCases = [
  {
    input: "156",
    output: 3,
  },
  {
    input: "233",
    output: 3,
  },
  {
    input: "45443",
    output: 2,
  },
  {
    input: "8",
    output: 1,
  },
];

testCases.forEach(({ input, output }, i) =>
  console.log(
    `Test #${i + 1}: ${getLongestRun(input) === output ? "✅" : "❌"}`
  )
);
