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

export const getOrientation = (string: string): string => {
    const RIGHT = "R";
    const LEFT = "L";
    const STILL = ".";
    const OUT_OF_BOUNDS = undefined;

    let pieces = string.split("");
    let checked = pieces.map((_) => false);

    let result = [...pieces];
    let iteration = [...pieces];

    let changesThisIteration = false;
    let finished = false;

    const modifyBasedOnNeighbours = (index: number): string => {
        if (result[index - 1] === OUT_OF_BOUNDS) {
            if (result[index + 1] === LEFT) {
                changesThisIteration = true;
                checked[index] = true;
                return LEFT;
            }

            if (result[index + 1] === RIGHT) {
                changesThisIteration = true;
                checked[index] = true;
                return STILL;
            }

            return STILL;
        }

        if (result[index + 1] === OUT_OF_BOUNDS) {
            if (result[index - 1] === LEFT) {
                changesThisIteration = true;
                checked[index] = true;
                return STILL;
            }

            if (result[index - 1] === RIGHT) {
                changesThisIteration = true;
                checked[index] = true;
                return RIGHT;
            }

            return STILL;
        }

        if (result[index - 1] === LEFT) {
            if (result[index + 1] === LEFT) {
                changesThisIteration = true;
                checked[index] = true;
                return LEFT;
            }

            if (result[index + 1] === RIGHT) {
                changesThisIteration = true;
                checked[index] = true;
                return STILL;
            }

            return STILL;
        }

        if (result[index - 1] === RIGHT) {
            if (result[index + 1] === LEFT) {
                changesThisIteration = true;
                checked[index] = true;
                return STILL;
            }

            if (result[index + 1] === RIGHT || result[index + 1] === STILL) {
                changesThisIteration = true;
                checked[index] = true;
                return RIGHT;
            }
        }

        if (result[index - 1] === STILL) {
            if (result[index + 1] === LEFT) {
                changesThisIteration = true;
                checked[index] = true;
                return LEFT;
            }

            return STILL;
        }
        return ''
    };

    while (!finished) {
        result.forEach((piece, index) => {
            if (checked[index]) return;

            if (piece != STILL) {
                checked[index] = true;
                changesThisIteration = true;
                return;
            }

            iteration[index] = modifyBasedOnNeighbours(index);
        });

        if (!changesThisIteration) {
            finished = true;
        }
        result = [...iteration];
        changesThisIteration = false;
    }

    return result.join("");
};
