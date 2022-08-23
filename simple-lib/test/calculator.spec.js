const { sum } = require("../calculator");

describe('# Calculator', () => {
    it('-- should sum 2 and 2 and the result must be 4', () => {
        expect(sum(6,2)).toBe(8)
    });
});