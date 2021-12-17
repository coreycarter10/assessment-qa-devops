const {shuffleArray} = require('./utils')

describe('shuffleArray should return a random ordered array', () => {
    test('ShuffleArray returns an array', () => [
        expect(shuffleArray()).toBe(shuffleArray())
    ])

    test('Should have the same length as the original array', () => {
        expect(shuffleArray()).toHaveLength(5);
    })

    test('All the items are the same as before', () => {
        expect(shuffleArray()).toEqual(shuffleArray());
    })

    test('Items have been shuffled', () => {
        expect(shuffleArray()).toContain(shuffleArray());
    })
})