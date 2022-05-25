import { getOrientation } from './index'

const testCases = [
    {
        input: ".LR.",
        output: "LLRR",
    },
    {
        input: ".L.R....L",
        output: "LL.RRRLLL",
    },
    {
        input: "..R...L.L..",
        output: "..RR.LLLL..",
    },
    {
        input: ".RL..RLRL.RL.RL",
        output: ".RL..RLRL.RL.RL",
    },
    {
        input: "..L.L.R.L...R.R...LL.R.L",
        output: "LLLLL.R.L...RRRR.LLL.R.L",
    },
    {
        input: "...RRLL...L.LLL.RRL..RLLR.RRRL..LL.RRRL.RLLR..RLRLLR.",
        output: "...RRLLLLLLLLLL.RRL..RLLRRRRRLLLLL.RRRL.RLLRRRRLRLLRR"
    },
    {
        input: "LR...",
        output: "LRRRR",
    },
    {
        input: "....L",
        output: "LLLLL",
    },
    {
        input: "..LRLLR...LR...RLLR..LRLR.LR.RLR.",
        output: "LLLRLLRR.LLRRRRRLLRRLLRLR.LRRRLRR",
    },
    {
        input: "R..........L",
        output: "RRRRRRLLLLLL",
    },
    {
        input: "R...........L",
        output: "RRRRRR.LLLLLL",
    },
    {
        input: "R..L..R...L....R.....L.....RLLLRL......RLL...RLL...RR....L.....L",
        output: "RRLL..RR.LL....RRR.LLL.....RLLLRL......RLL...RLL...RRRRLLLLLLLLL",
    },
    {
        input: "R.................",
        output: "RRRRRRRRRRRRRRRRRR",
    },
    {
        input: "L.................",
        output: "L.................",
    },
    {
        input: ".................L",
        output: "LLLLLLLLLLLLLLLLLL",
    },
    {
        input: ".................R",
        output: ".................R",
    },

];



test('Falling dominoes function', () => {
    testCases.forEach(x => expect(getOrientation(x.input)).toEqual(x.output))
})
