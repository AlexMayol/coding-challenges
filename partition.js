// This problem was asked by Amazon.

// Given a pivot x, and a list lst, partition the list into three parts.

//     The first part contains all elements in lst that are less than x
//     The second part contains all elements in lst that are equal to x
//     The third part contains all elements in lst that are larger than x

// Ordering within a part can be arbitrary.

// For example, given x = 10 and lst = [9, 12, 3, 5, 14, 10, 10], one partition may be [9, 3, 5, 10, 10, 12, 14].

const partition = (x, list) => {

    const minorThan = [];
    const equalThan = [];
    const greaterThan = [];

    for (let i of list) {

        if (i - x < 0)
            minorThan.push(i)
        else if (i - x == 0)
            equalThan.push(i)
        else if (i - x > 0)
            greaterThan.push(i)
    }

    return [...minorThan, ...equalThan, ...greaterThan]
}

x = 34;
lst = [34, 1, 33, 2, 10, 212, 10, 4, 55, 4, 20, 10, 9, 12, 3, 5, 14, 10, 10]

console.log(partition(x, lst));
