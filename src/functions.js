function createBoard() {
    return [[null, null, null],
            [null, null, null],
            [null, null, null]];
}

function formatBoard(board) {
    let formattedBoard = '';

    for (let row = 0; row < 3; row++) {
        for (let column = 0; column < 3; column++) {
            formattedBoard += board[row][column] || ' ';
        }
        if (row != 2) formattedBoard += '\n';
    }

    return formattedBoard;
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

    for (let row = 0; row < 3; row++) {
        if (board[row][0] == marker && board[row][1] == marker && board[row][2] == marker)
            return true;
    }

    return false
}

function boardIsFull(board) {
    for (let row = 0; row < 3; row++) {
        for (let column = 0; column < 3; column++) {
            if (board[row][column] == null) return false
        }
    }
    return true
}

module.exports = {
    createBoard,
    formatBoard,
    place,
    detectWin,
    boardIsFull
}