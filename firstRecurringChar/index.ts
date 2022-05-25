/* This problem was asked by Google.

Given a string, return the first recurring character in it, or null if there is no recurring character.

For example, given the string "acbbac", return "b". Given the string "abcdef", return null.

*/

export const firstRecurringChar = (str: string) => {
    let chars = str.split("");
    let regexp = null;

    for (let x = 0; x < chars.length; x++) {
        regexp = new RegExp(`${chars[x]}{2,}`);
        if (regexp.test(str)) return chars[x];
    }

    return null;
};
