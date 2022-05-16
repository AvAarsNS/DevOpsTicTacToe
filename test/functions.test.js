const {createBoard, formatBoard, placeX} = require('../src/functions');

describe('We start with an empty board', () => {
    it('We should be able to create... ', () => {
        const board = createBoard();
        expect(board).toStrictEqual([[null,null,null],[null,null,null],[null,null,null]])
    });
    it('and format!', () => {
        const board = createBoard();
        const formattedBoard = formatBoard(board);
        expect(formattedBoard).toBe(' | | \n' + 
                                    '-----\n' +
                                    ' | | \n' + 
                                    '-----\n' +
                                    ' | | ');
    });
});

describe('We want to be able to place Xes', () => {
    it('First in the top left', () => {
        const board = createBoard();
        const boardAfterPlacing = placeX(board, 0);
        expect(boardAfterPlacing).toStrictEqual([['X',null,null],[null,null,null],[null,null,null]])
    });
    it('Then in the top center', () => {
        const board = createBoard();
        const boardAfterPlacing = placeX(board, 1);
        expect(boardAfterPlacing).toStrictEqual([[null,'X',null],[null,null,null],[null,null,null]])
    });
});