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
    const OUT = 'out';

    let pieces = string.split('');
    let checked = pieces.map((_) => false);

    let finished = false;
    let result = [...pieces];
    let iteration = [...result];

    const leftNeighbour = (index) => {
        switch (result[index - 1]) {
            case RIGHT:
                return RIGHT;
            case LEFT:
                return LEFT;
            case STILL:
                return STILL;
            case undefined:
                return OUT;
        }
    }

    const rightNeighbour = (index) => {
        switch (result[index + 1]) {
            case RIGHT:
                return RIGHT;
            case LEFT:
                return LEFT;
            case STILL:
                return STILL;
            case undefined:
                return OUT;
        }
    }


    while (!finished) {
        iteration.forEach((piece, index) => {


            if (checked[index]) return;

            if (piece !== STILL) {
                checked[index] = true;
                return;
            }
            if (leftNeighbour(index) === OUT && checked[index + 1]) {
                checked[index] = true;
                iteration[index] = STILL;
                return;
            }

            if (leftNeighbour(index) === LEFT && rightNeighbour(index) !== LEFT && checked[index + 1]) {
                checked[index] = true;
                iteration[index] = STILL;
                return;
            }

            if (leftNeighbour(index) === OUT && rightNeighbour(index) === LEFT) {
                checked[index] = true;
                iteration[index] = LEFT;
                return;
            }

            if (leftNeighbour(index) === OUT && checked[index + 1]) {
                checked[index] = true;
                iteration[index] = STILL;
                return;
            }
            if (leftNeighbour(index) === OUT && rightNeighbour(index) === RIGHT) {
                checked[index] = true;
                iteration[index] = STILL;
                return;
            }

            if (leftNeighbour(index) === RIGHT && rightNeighbour(index) === OUT) {
                checked[index] = true;
                iteration[index] = RIGHT;
                return;
            }


            if (leftNeighbour(index) === LEFT && rightNeighbour(index) === OUT) {
                checked[index] = true;
                iteration[index] = STILL;
                return;
            }
            if (leftNeighbour(index) === STILL && rightNeighbour(index) === OUT && checked[index - 2]) {
                checked[index] = true;
                iteration[index] = STILL;
                return;
            }

            if (leftNeighbour(index) === LEFT && rightNeighbour(index) === OUT && checked[index + 1]) {
                checked[index] = true;
                iteration[index] = STILL;
                return;
            }

            if (leftNeighbour(index) !== RIGHT && rightNeighbour(index) === LEFT) {
                checked[index] = true;
                iteration[index] = LEFT;
                return;
            }

            if (leftNeighbour(index) !== RIGHT && rightNeighbour(index) === RIGHT) {
                checked[index] = true;
                iteration[index] = STILL;
                return;
            }

            if (leftNeighbour(index) === RIGHT && rightNeighbour(index) !== LEFT) {
                checked[index] = true;
                iteration[index] = RIGHT;
                return;
            }

            if (leftNeighbour(index) === LEFT && rightNeighbour(index) !== LEFT) {
                checked[index] = false;
                iteration[index] = STILL;
                return;
            }

            if (leftNeighbour(index) === RIGHT && rightNeighbour(index) === LEFT) {
                checked[index] = true;
                iteration[index] = STILL;
                return;
            }

            if (leftNeighbour(index) === STILL && rightNeighbour(index) === STILL) {
                checked[index] = false;
                return;
            }

            if (leftNeighbour(index) === STILL && rightNeighbour(index) === RIGHT) {
                checked[index] = false;
                return;
            }

            if (leftNeighbour(index) === STILL && rightNeighbour(index) === LEFT) {
                checked[index] = true;
                iteration[index] = LEFT;
                return;
            }


        })
        finished = !checked.some(check => check === false);
        result = [...iteration];
    }

    return result.join('');
};

const test1 = '.LR.';
const solution1 = 'LLRR';
const test2 = '.L.R....L';
const solution2 = 'LL.RRRLLL';
const test3 = '..R...L.L..';
const solution3 = '..RR.LLLL..';
const test4 = '..R...L.L..';
const solution4 = '..RR.LLLL..';

console.log(getOrientation(test1) === solution1);
console.log(getOrientation(test2) === solution2);
console.log(getOrientation(test3) === solution3);
console.log(getOrientation(test4) === solution4);
