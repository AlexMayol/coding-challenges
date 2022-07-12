import { runLengthEncoding, runLenghtDecoding } from './index'


const encodingTestCases = [
    {
        input: "AAAABBBCCDAA",
        output: "4A3B2C1D2A",
    },
    {
        input: "QQ",
        output: "2Q",
    },

];

const decodingTestCases = [
    {
        input: "4A3B2C1D2A",
        output: "AAAABBBCCDAA",
    },
    {
        input: "2Q",
        output: "QQ",
    },
]

describe('run-length algorithm', () => {

    test('run-length encoding', () => {
        encodingTestCases.forEach(x => expect(runLengthEncoding(x.input)).toEqual(x.output))
    })

    test('run-length decoding', () => {
        decodingTestCases.forEach(x => expect(runLenghtDecoding(x.input)).toEqual(x.output))
    })
})
