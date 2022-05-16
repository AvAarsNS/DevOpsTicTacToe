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

function placeX(board) {
    board[0][0] = 'X';
    return board;
}

module.exports = {
    createBoard,
    formatBoard,
    placeX
}