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

class PrefixMapSum {
    constructor() {
        this.map = {};
    }
    insert(key, val) {
        this.map[key] = val;
    }
    sum(prefix) {
        let keys = Object.keys(this.map);
        let total = 0;
        keys.forEach((key) => {
            if (key.includes(prefix)) total += this.map[key];
        });

        return total;
    }
}

const result = new PrefixMapSum();
result.insert("test", 3);
result.insert("testing", 3);
result.insert("tester", 4);

result.insert("thunder", 2);
result.insert("thursday", 1);
result.insert("thought", 8);

console.log(result.sum('tes') === 10);
console.log(result.sum('th') === 11);
console.log(result.sum('thu') === 3);
