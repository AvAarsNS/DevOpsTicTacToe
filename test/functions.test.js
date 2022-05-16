const {createBoard, formatBoard, place, detectColumnWin} = require('../src/functions');

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
        const boardAfterPlacing = place(board, 'X', 0, 0);
        expect(boardAfterPlacing).toStrictEqual([['X',null,null],[null,null,null],[null,null,null]])
    });
    it('Then in the top center', () => {
        const board = createBoard();
        const boardAfterPlacing = place(board, 'X', 0, 1);
        expect(boardAfterPlacing).toStrictEqual([[null,'X',null],[null,null,null],[null,null,null]])
    });
    it('And finally in the bottom right', () => {
        const board = createBoard();
        const boardAfterPlacing = place(board, 'X', 2, 2);
        expect(boardAfterPlacing).toStrictEqual([[null,null,null],[null,null,null],[null,null,'X']])
    });
});

describe('And we want to be able to place Os', () => {
    it('We just place one in the center', () => {
        const board = createBoard();
        const boardAfterPlacing = place(board, 'O', 1, 1);
        expect(boardAfterPlacing).toStrictEqual([[null,null,null],[null,'O',null],[null,null,null]])
    });
});

describe('We want to be able to detect wins in the first column', () => {
    it('No win when the board is:\n' + 
       'X--\n' +
       '---\n' +
       '---', () => {
        var board = createBoard();
        board = place(board, 'X', 0, 0);
        expect(detectColumnWin(board)).toBe(false);
    });
    it('No win when the board is:\n' + 
       'X--\n' +
       'X--\n' +
       '---', () => {
        var board = createBoard();
        board = place(board, 'X', 0, 0);
        board = place(board, 'X', 1, 0);
        expect(detectColumnWin(board)).toBe(false);
    });
    it('No win when the board is:\n' + 
       'X--\n' +
       '---\n' +
       'X--', () => {
        var board = createBoard();
        board = place(board, 'X', 0, 0);
        board = place(board, 'X', 2, 0);
        expect(detectColumnWin(board)).toBe(false);
    });
    it('We win when the board is:\n' + 
       'X--\n' +
       'X--\n' +
       'X--', () => {
        var board = createBoard();
        board = place(board, 'X', 0, 0);
        board = place(board, 'X', 1, 0);
        board = place(board, 'X', 2, 0);
        expect(detectColumnWin(board)).toBe(true);
    });
});