/*
Run-length encoding is a fast and simple method of encoding strings. 
The basic idea is to represent repeated successive characters as a single count and character. 
For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

Implement run-length encoding and decoding. 
You can assume the string to be encoded have no digits and consists solely of alphabetic characters. 
You can assume the string to be decoded is valid.
*/

export const runLengthEncoding = (a: string): string => {
    const arr = a.split('');
    const result = [];
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            count++;
        } else {
            result.push(count + arr[i]);
            count = 1;
        }
    }
    return result.join('');
}

export const runLenghtDecoding = (a: string): string => {
    const arr = a.split('');
    const result = [];
    let count = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].match(/[0-9]/)) {
            count += arr[i];
        } else {
            result.push(arr[i].repeat(Number(count)));
            count = '';
        }
    }
    return result.join('');
}
