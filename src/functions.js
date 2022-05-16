function createBoard() {
    return [[null, null, null],
            [null, null, null],
            [null, null, null]];
}

function formatBoard(board) {
    return ' | | \n' + 
           '-----\n' +
           ' | | \n' + 
           '-----\n' +
           ' | | '
}

function place(board, marker, row, column) {
    board[row][column] = marker;
    return board;
}

function detectColumnWin(board) {
    return board[0][0] == 'X' &&
           board[1][0] == 'X' &&
           board[2][0] == 'X';
}

module.exports = {
    createBoard,
    formatBoard,
    place,
    detectColumnWin,
}