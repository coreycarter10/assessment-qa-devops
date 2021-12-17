const {shuffleArray} = require('./utils')

const testArr = [1, 2, 3, 4];

describe('shuffleArray should return a random ordered array', () => {
    test('ShuffleArray returns an array', () => {
        expect(Array.isArray(shuffleArray(testArr))).toBe(true);
    });

    test('Should have the same length as the original array', () => {
        expect(shuffleArray(testArr)).toHaveLength(4);
    });

    test('All the items are the same as before', () => {
        expect(shuffleArray(testArr)).toEqual(expect.arrayContaining(testArr));
    });

    test('Items have been shuffled', () => {
        let result = shuffleArray(testArr);
        expect(result.join()).not.toEqual(testArr.join());
    });
})