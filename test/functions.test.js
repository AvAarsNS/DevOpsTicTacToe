const {createBoard} = require('../src/functions');

describe('We start with an empty board', () => {
    it('We should be able to create... ', () => {
        const board = createBoard();
        expect(board).toBe([[null,null,null],[null,null,null],[null,null,null]])
    });
});