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

function detectWin(board, marker) {
    // Diagonal top left to bottom right
    if (board[0][0] == marker && board[1][1] == marker && board[2][2] == marker)
        return true;
        
    // Diagonal bottom left to top right
    if (board[0][2] == marker && board[1][1] == marker && board[2][0] == marker)
        return true;

    for (let column = 0; column < 3; column++) {
        if (board[0][column] == marker &&
            board[1][column] == marker &&
            board[2][column] == marker) return true;
    }
    
    return false
}

module.exports = {
    createBoard,
    formatBoard,
    place,
    detectWin,
}