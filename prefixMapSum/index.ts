/*

This problem was asked by Google.

Implement a PrefixMapSum class with the following methods:

    insert(key: str, value: int): Set a given key's value in the map. If the key already exists, overwrite the value.
    sum(prefix: str): Return the sum of all values of keys that begin with a given prefix.

For example, you should be able to run the following code:


mapsum.insert("columnar", 3)
assert mapsum.sum("col") == 3

mapsum.insert("column", 2)
assert mapsum.sum("col") == 5

*/

export class PrefixMapSum {
    private map: { [key: string]: number };
    constructor() {
        this.map = {};
    }
    insert(key: string, val: number) {
        this.map[key] = val;
    }
    sum(prefix: string) {
        let keys = Object.keys(this.map);
        let total = 0;
        keys.forEach((key) => {
            if (key.includes(prefix)) total += this.map[key];
        });

        return total;
    }
}

