/* This problem was asked by Google.

Given a string, return the first recurring character in it, or null if there is no recurring character.

For example, given the string "acbbac", return "b". Given the string "abcdef", return null.

*/

const firstRecurringChar = (str) => {
    let chars = str.split('')
    let regexp = null

    for (let x = 0; x < chars.length; x++) {
        regexp = new RegExp(`${chars[x]}{2,}`)
        if (regexp.test(str))
            return chars[x]
    }

    return null
}

const input1 = 'acbbac';
const output1 = 'b';
const input2 = 'abcdef';
const output2 = null;
const input3 = 'diow02sso2se';
const output3 = 's';
const input4 = 'oiuytrevbakqp54dsqw';
const output4 = null;
const input5 = 'aaaabbbbbbbb';
const output5 = 'a';
const input6 = 'jklmnopwpwwksj';
const output6 = 'w';
const input7 = '9382912904822';
const output7 = '2';


console.time('BENCHMARK')
console.log(firstRecurringChar(input1) === output1);
console.log(firstRecurringChar(input2) === output2);
console.log(firstRecurringChar(input3) === output3);
console.log(firstRecurringChar(input4) === output4);
console.log(firstRecurringChar(input5) === output5);
console.log(firstRecurringChar(input6) === output6);
console.log(firstRecurringChar(input7) === output7);
console.timeEnd('BENCHMARK')