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

function placeX(board, row, column) {
    board[row][column] = 'X';
    return board;
}

module.exports = {
    createBoard,
    formatBoard,
    placeX
}