const { queryString } = require("../../lib/queryString");

describe('# Lib > queryString', () => {
    it('should create a valid query string', () => {
        const data = {
            name: 'Wellpinho',
            profession: 'Developer'
        };
        
        expect(queryString(data)).toBe('name=Wellpinho&profession=Developer');
    });
});