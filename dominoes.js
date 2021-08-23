/*

This problem was asked by Microsoft.

You are given an string representing the initial conditions of some dominoes. Each element can take one of three values:

    L, meaning the domino has just been pushed to the left,
    R, meaning the domino has just been pushed to the right, or
    ., meaning the domino is standing still.

Determine the orientation of each tile when the dominoes stop falling. Note that if a domino receives a force from the left and right side simultaneously, it will remain upright.

For example, given the string .L.R....L, you should return LL.RRRLLL.

Given the string ..R...L.L, you should return ..RR.LLLL

*/

const getOrientation = (string) => {
    const RIGHT = 'R';
    const LEFT = 'L';
    const STILL = '.';
    const OUT_OF_BOUNDS = undefined;

    let pieces = string.split('');
    let checked = pieces.map((_) => false);

    let result = [...pieces];
    let iteration = [...pieces];

    let changesThisIteration = false;
    let finished = false;


    const modifyBasedOnNeighbours = (index) => {
        if (result[index - 1] === OUT_OF_BOUNDS) {
            if (result[index + 1] === LEFT) {
                changesThisIteration = true
                checked[index] = true
                return LEFT
            }

            if (result[index + 1] === RIGHT) {
                changesThisIteration = true
                checked[index] = true
                return STILL
            }

            return STILL
        }

        if (result[index + 1] === OUT_OF_BOUNDS) {
            if (result[index - 1] === LEFT) {
                changesThisIteration = true
                checked[index] = true
                return STILL
            }

            if (result[index - 1] === RIGHT) {
                changesThisIteration = true
                checked[index] = true
                return RIGHT
            }

            return STILL
        }

        if (result[index - 1] === LEFT) {
            if (result[index + 1] === LEFT) {
                changesThisIteration = true
                checked[index] = true
                return LEFT
            }

            if (result[index + 1] === RIGHT) {
                changesThisIteration = true
                checked[index] = true
                return STILL
            }

            return STILL

        }

        if (result[index - 1] === RIGHT) {
            if (result[index + 1] === LEFT) {
                changesThisIteration = true
                checked[index] = true
                return STILL
            }

            if (result[index + 1] === RIGHT || result[index + 1] === STILL) {
                changesThisIteration = true
                checked[index] = true
                return RIGHT
            }

        }

        if (result[index - 1] === STILL) {
            if (result[index + 1] === LEFT) {
                changesThisIteration = true
                checked[index] = true
                return LEFT
            }

            return STILL

        }

    }

    while (!finished) {

        result.forEach((piece, index) => {
            if (checked[index])
                return;

            if (piece != STILL) {
                checked[index] = true
                changesThisIteration = true
                return
            }

            iteration[index] = modifyBasedOnNeighbours(index)

        })

        if (!changesThisIteration) {
            finished = true
        }
        result = [...iteration];
        changesThisIteration = false
    }

    return result.join('');
};

const test1 = '.LR.';
const solution1 = 'LLRR';
const test2 = '.L.R....L';
const solution2 = 'LL.RRRLLL';
const test3 = '..R...L.L..';
const solution3 = '..RR.LLLL..';
const test4 = '.RL..RLRL.RL.RL';
const solution4 = '.RL..RLRL.RL.RL';
const test5 = '..L.L.R.L...R.R...LL.R.L';
const solution5 = 'LLLLL.R.L...RRRR.LLL.R.L';
const test6 = '...RRLL...L.LLL.RRL..RLLR.RRRL..LL.RRRL.RLLR..RLRLLR.';
const solution6 = '...RRLLLLLLLLLL.RRL..RLLRRRRRLLLLL.RRRL.RLLRRRRLRLLRR';
const test7 = 'LR...';
const solution7 = 'LRRRR';
const test8 = '....L';
const solution8 = 'LLLLL';
const test9 = '..LRLLR...LR...RLLR..LRLR.LR.RLR.';
const solution9 = 'LLLRLLRR.LLRRRRRLLRRLLRLR.LRRRLRR';
const test10 = 'R..........L';
const solution10 = 'RRRRRRLLLLLL';
const test11 = 'R...........L';
const solution11 = 'RRRRRR.LLLLLL';
const test12 = 'R..L..R...L....R.....L.....RLLLRL......RLL...RLL...RR....L.....L';
const solution12 = 'RRLL..RR.LL....RRR.LLL.....RLLLRL......RLL...RLL...RRRRLLLLLLLLL';
const test13 = 'R.................';
const solution13 = 'RRRRRRRRRRRRRRRRRR';
const test14 = 'L.................';
const solution14 = 'L.................';
const test15 = '.................L';
const solution15 = 'LLLLLLLLLLLLLLLLLL';
const test16 = '.................R';
const solution16 = '.................R';

console.time('BENCHMARK')
console.log(getOrientation(test1) === solution1);
console.log(getOrientation(test2) === solution2);
console.log(getOrientation(test3) === solution3);
console.log(getOrientation(test4) === solution4);
console.log(getOrientation(test5) === solution5);
console.log(getOrientation(test6) === solution6);
console.log(getOrientation(test7) === solution7);
console.log(getOrientation(test8) === solution8);
console.log(getOrientation(test9) === solution9);
console.log(getOrientation(test10) === solution10);
console.log(getOrientation(test11) === solution11);
console.log(getOrientation(test12) === solution12);
console.log(getOrientation(test13) === solution13);
console.log(getOrientation(test14) === solution14);
console.log(getOrientation(test15) === solution15);
console.log(getOrientation(test16) === solution16);
console.timeEnd('BENCHMARK')