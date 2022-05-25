import { PrefixMapSum } from './index'



test('PrefixMapSum class use cases', () => {
    const result = new PrefixMapSum();
    result.insert("test", 3);
    result.insert("testing", 3);
    result.insert("tester", 4);

    result.insert("thunder", 2);
    result.insert("thursday", 1);
    result.insert("thought", 8);

    expect(result.sum("tes")).toEqual(10);
    expect(result.sum("th")).toEqual(11);
    expect(result.sum("thu")).toEqual(3);
})
