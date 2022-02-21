/* This problem was asked by Google.

Given a string, return the first recurring character in it, or null if there is no recurring character.

For example, given the string "acbbac", return "b". Given the string "abcdef", return null.

*/

const firstRecurringChar = (str) => {
  let chars = str.split("");
  let regexp = null;

  for (let x = 0; x < chars.length; x++) {
    regexp = new RegExp(`${chars[x]}{2,}`);
    if (regexp.test(str)) return chars[x];
  }

  return null;
};

const testCases = [
  {
    input: "acbbac",
    output: "b",
  },
  {
    input: "abcdef",
    output: null,
  },
  {
    input: "diow02sso2se",
    output: "s",
  },
  {
    input: "oiuytrevbakqp54dsqw",
    output: null,
  },
  {
    input: "aaaabbbbbbbb",
    output: "a",
  },
  {
    input: "jklmnopwpwwksj",
    output: "w",
  },
  {
    input: "9382912904822",
    output: "2",
  },
];

console.time("BENCHMARK");
testCases.forEach(({ input, output }, i) =>
  console.log(
    `Test #${i + 1}: ${firstRecurringChar(input) === output ? "✅" : "❌"}`
  )
);
console.timeEnd("BENCHMARK");
