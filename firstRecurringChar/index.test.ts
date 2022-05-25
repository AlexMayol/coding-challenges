import { firstRecurringChar } from './index'

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
test('first recurring character function', () => {
    testCases.forEach(x => expect(firstRecurringChar(x.input)).toEqual(x.output))
})
