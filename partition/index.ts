// This problem was asked by Amazon.

// Given a pivot x, and a list lst, partition the list into three parts.

//     The first part contains all elements in lst that are less than x
//     The second part contains all elements in lst that are equal to x
//     The third part contains all elements in lst that are larger than x

// Ordering within a part can be arbitrary.

// For example, given x = 10 and lst = [9, 12, 3, 5, 14, 10, 10], one partition may be [9, 3, 5, 10, 10, 12, 14].

export const partition = (x: number, list: number[]) => {
    const minorThan = [];
    const equalThan = [];
    const greaterThan = [];

    for (let i of list) {
        if (i - x < 0) minorThan.push(i);
        else if (i - x == 0) equalThan.push(i);
        else if (i - x > 0) greaterThan.push(i);
    }

    return [...minorThan, ...equalThan, ...greaterThan];
};
