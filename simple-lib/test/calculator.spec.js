const { sum } = require("../calculator");

describe('# Calculator', () => {
    it('-- should sum 2 and 2 and the result must be 4', () => {
        expect(sum(6,2)).toBe(8)
    });

    it('-- should sum 2 and 2 even if one them is a string should receive an error', () => {
        expect(sum('6','2')).toBe(8)
    });

    it('-- should throw an error if what is provided to the method cannot number', () => {
        expect(() => sum('a', 1)).toThrowError()
        expect(() => sum([2, 1])).toThrowError()
        expect(() => sum({a, b})).toThrowError()
        expect(() => sum({})).toThrowError()
        expect(() => sum()).toThrowError()
        expect(() => sum('', '')).toThrowError()
    });
});