const {createBoard, formatBoard, place, detectWin, boardIsFull} = require('../src/functions');

describe('We start with an empty board', () => {
    it('We should be able to create... ', () => {
        const board = createBoard();
        expect(board).toStrictEqual([[null,null,null],[null,null,null],[null,null,null]])
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
        expect(detectWin(board, 'X')).toBe(false);
    });
    it('No win when the board is:\n' + 
       'X--\n' +
       'X--\n' +
       '---', () => {
        var board = createBoard();
        board = place(board, 'X', 0, 0);
        board = place(board, 'X', 1, 0);
        expect(detectWin(board, 'X')).toBe(false);
    });
    it('No win when the board is:\n' + 
       'X--\n' +
       '---\n' +
       'X--', () => {
        var board = createBoard();
        board = place(board, 'X', 0, 0);
        board = place(board, 'X', 2, 0);
        expect(detectWin(board, 'X')).toBe(false);
    });
    it('We win when the board is:\n' + 
       'X--\n' +
       'X--\n' +
       'X--', () => {
        var board = createBoard();
        board = place(board, 'X', 0, 0);
        board = place(board, 'X', 1, 0);
        board = place(board, 'X', 2, 0);
        expect(detectWin(board, 'X')).toBe(true);
    });
});

describe('We want to detect X wins in other columns:', () => {
    it('We win when the board is:\n' + 
       '-X-\n' +
       '-X-\n' +
       '-X-', () => {
        var board = createBoard();
        board = place(board, 'X', 0, 1);
        board = place(board, 'X', 1, 1);
        board = place(board, 'X', 2, 1);
        expect(detectWin(board, 'X')).toBe(true);
    });
    it('We win when the board is:\n' + 
       '--X\n' +
       '--X\n' +
       '--X', () => {
        var board = createBoard();
        board = place(board, 'X', 0, 2);
        board = place(board, 'X', 1, 2);
        board = place(board, 'X', 2, 2);
        expect(detectWin(board, 'X')).toBe(true);
    });
    it('We don\'t win when the board is:\n' + 
       '--X\n' +
       '-X-\n' +
       '--X', () => {
        var board = createBoard();
        board = place(board, 'X', 0, 2);
        board = place(board, 'X', 1, 1);
        board = place(board, 'X', 2, 2);
        expect(detectWin(board, 'X')).toBe(false);
    });
});

describe('We want to detect column wins for O as well:', () => {
    it('O wins when the board is:\n' + 
       '-O-\n' +
       '-O-\n' +
       '-O-', () => {
        var board = createBoard();
        board = place(board, 'O', 0, 1);
        board = place(board, 'O', 1, 1);
        board = place(board, 'O', 2, 1);
        expect(detectWin(board, 'O')).toBe(true);
    });
    it('O doesn\'t win when the board is:\n' + 
       '-X-\n' +
       '-X-\n' +
       '-X-', () => {
        var board = createBoard();
        board = place(board, 'X', 0, 1);
        board = place(board, 'X', 1, 1);
        board = place(board, 'X', 2, 1);
        expect(detectWin(board, 'O')).toBe(false);
    });
});

describe('We want to detect horizontal wins:', () => {
    it('No win when the board is:\n' + 
       'X-X\n' +
       '---\n' +
       '---', () => {
        var board = createBoard();
        board = place(board, 'X', 0, 0);
        board = place(board, 'X', 0, 2);
        expect(detectWin(board, 'X')).toBe(false);
    });
    it('X wins when the board is:\n' + 
       'XXX\n' +
       '---\n' +
       '---', () => {
        var board = createBoard();
        board = place(board, 'X', 0, 0);
        board = place(board, 'X', 0, 1);
        board = place(board, 'X', 0, 2);
        expect(detectWin(board, 'X')).toBe(true);
    });
    it('X wins when the board is:\n' + 
       '---\n' +
       'XXX\n' +
       '---', () => {
        var board = createBoard();
        board = place(board, 'X', 1, 0);
        board = place(board, 'X', 1, 1);
        board = place(board, 'X', 1, 2);
        expect(detectWin(board, 'X')).toBe(true);
    });
    it('X wins when the board is:\n' + 
       '---\n' +
       '---\n' +
       'OOO', () => {
        var board = createBoard();
        board = place(board, 'O', 2, 0);
        board = place(board, 'O', 2, 1);
        board = place(board, 'O', 2, 2);
        expect(detectWin(board, 'O')).toBe(true);
    });
});

describe('We want to detect diagonal wins:', () => {
    it('X wins when the board is:\n' + 
       'X--\n' +
       '-X-\n' +
       '--X', () => {
        var board = createBoard();
        board = place(board, 'X', 0, 0);
        board = place(board, 'X', 1, 1);
        board = place(board, 'X', 2, 2);
        expect(detectWin(board, 'X')).toBe(true);
    });
    it('O wins when the board is:\n' + 
       '--O\n' +
       '-O-\n' +
       'O--', () => {
        var board = createBoard();
        board = place(board, 'O', 0, 2);
        board = place(board, 'O', 1, 1);
        board = place(board, 'O', 2, 0);
        expect(detectWin(board, 'O')).toBe(true);
    });
});

describe('We want to check if all fields are filled:', () => {
    it('Empty board: not filled', () => {
        var board = createBoard();
        expect(boardIsFull(board)).toBe(false);
    });
    it('Almost filled board (only the center empty): not filled', () => {
        var board = createBoard();
        board[0] = ['X', 'O', 'X'];
        board[1] = ['O', null, 'O'];
        board[2] = ['X', 'O', 'X'];
        expect(boardIsFull(board)).toBe(false);
    });
    it('All filled board: yes we have a filled board', () => {
        var board = createBoard();
        board[0] = ['X', 'O', 'X'];
        board[1] = ['O', 'X', 'O'];
        board[2] = ['X', 'O', 'X'];
        expect(boardIsFull(board)).toBe(true);
    });
});

describe('Check for the UAT scenarios', () => {
    it('With UAT scenario 2 X should win, and O should not:\n' + 
    'X--\n' +
    'XO-\n' +
    'X-O', () => {
        var board = createBoard();
        board = place(board, 'X', 0, 0);
        board = place(board, 'O', 1, 1);

        expect(detectWin(board, 'O')).toBe(false);
        expect(detectWin(board, 'X')).toBe(false);

        board = place(board, 'X', 1, 0);
        board = place(board, 'O', 2, 2);

        expect(detectWin(board, 'O')).toBe(false);
        expect(detectWin(board, 'X')).toBe(false);

        board = place(board, 'X', 2, 0);
        expect(detectWin(board, 'O')).toBe(false);
        expect(detectWin(board, 'X')).toBe(true);
    });

    it('With UAT scenario 3 O should win, and X should not:\n' + 
    'X-X\n' +
    'OOO\n' +
    'X--', () => {
        var board = createBoard();

        board = place(board, 'X', 0, 0);
        board = place(board, 'O', 1, 0);

        expect(detectWin(board, 'O')).toBe(false);
        expect(detectWin(board, 'X')).toBe(false);

        board = place(board, 'X', 0, 2);
        board = place(board, 'O', 1, 1);

        expect(detectWin(board, 'O')).toBe(false);
        expect(detectWin(board, 'X')).toBe(false);

        board = place(board, 'X', 2, 0);
        board = place(board, 'O', 1, 2);

        expect(detectWin(board, 'O')).toBe(true);
        expect(detectWin(board, 'X')).toBe(false);
    });

    it('With UAT scenario 4 X should win, and O should not:\n' + 
    'X--\n' +
    'OX-\n' +
    'O-X', () => {
        var board = createBoard();

        board = place(board, 'X', 0, 0);
        board = place(board, 'O', 1, 0);

        expect(detectWin(board, 'O')).toBe(false);
        expect(detectWin(board, 'X')).toBe(false);

        board = place(board, 'X', 1, 1);
        board = place(board, 'O', 2, 0);

        expect(detectWin(board, 'O')).toBe(false);
        expect(detectWin(board, 'X')).toBe(false);

        board = place(board, 'X', 2, 2);

        expect(detectWin(board, 'O')).toBe(false);
        expect(detectWin(board, 'X')).toBe(true);
    });

    it('With UAT scenario 5 the game should end in a draw:\n' + 
    'XOX\n' +
    'OOX\n' +
    'XXO', () => {
        var board = createBoard();


        board = place(board, 'X', 0, 0);
        board = place(board, 'O', 0, 1);
        board = place(board, 'X', 0, 2);
        board = place(board, 'O', 1, 0);
        board = place(board, 'O', 1, 1);
        board = place(board, 'X', 1, 2);
        board = place(board, 'X', 2, 0);
        board = place(board, 'X', 2, 1);
        board = place(board, 'O', 2, 2);

        expect(detectWin(board, 'O')).toBe(false);
        expect(detectWin(board, 'X')).toBe(false);
        expect(boardIsFull(board)).toBe(true);
    });
});

describe('We want to format the board:', () => {
    it('Format an empty board', () => {
        const board = createBoard();
        const formattedBoard = formatBoard(board);
        expect(formattedBoard).toBe(' | | \n' + 
                                    '-----\n' +
                                    ' | | \n' + 
                                    '-----\n' +
                                    ' | | ');
    });
    it('Format UAT 3', () => {
        const board = createBoard();
        board[0] = ['X', null, 'X'];
        board[1] = ['O', 'O', 'O'];
        board[2] = ['X', null, null];
        const formattedBoard = formatBoard(board);
        expect(formattedBoard).toBe('X| |X\n' + 
                                    '-----\n' +
                                    'O|O|O\n' + 
                                    '-----\n' +
                                    'X| | ');
    });
});