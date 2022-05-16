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

function placeX(board, position) {
    board[0][position] = 'X';
    return board;
}

module.exports = {
    createBoard,
    formatBoard,
    placeX
}