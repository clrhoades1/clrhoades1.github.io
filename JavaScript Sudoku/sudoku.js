let sudokuCell = {
    'numberInCell': 0,
    'isPermanentNumber': false
}

let sudokuBoard = {
    'board': [
        [sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell],
        [sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell],
        [sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell],
        [sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell],
        [sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell],
        [sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell],
        [sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell],
        [sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell],
        [sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell]
    ],
    'currentlyBacktracking': false,
    'columnWhenReturned': 0,



    isFull: function(sudokuBoard) {
        for(x = 0; x <= 8; x++) {
            for(y = 0; y<= 8; y++) {
                if(sudokuBoard[x][y].numberInCell === 0) {
                    return false;
                }
            }
        }
        return true;
    },
    printBoard: function(sudokuBoard) {
        console.log("\n-------------------------------------");

        for (count1 = 0; count1 < 9; count1++) {
            console.log("| ");
            for (count2 = 0; count2 < 9; count2++) {
                if (sudokuBoard.board[count1][count2].numberInCell() == 0) {
                    console.log("  | ");
                } else {
                    console.log(sudokuBoard.board[count1][count2].numberInCell() + " | ");
                }
            }
            console.log("\n-------------------------------------");
        }
    }
}

function printBoard(sudokuBoard) {
    console.log("\n-------------------------------------");
    //let outputArr = '';

    for (count1 = 0; count1 < 9; count1++) {
        let outputArr = '';
        //console.log("| ");
        outputArr = "".concat(outputArr,"| ");
        for (count2 = 0; count2 < 9; count2++) {
            if (sudokuBoard.board[count1][count2].numberInCell == 0) {
                //console.log("  | ");
                outputArr = "".concat(outputArr,'  | ');
            } else {
                //console.log(sudokuBoard.board[count1][count2].numberInCell + " | ");
                outputArr = "".concat(outputArr, sudokuBoard.board[count1][count2].numberInCell + " | ");
            }
        }
        console.log(outputArr);
        console.log("-------------------------------------");
    }
}

var board = {'board': [
    [sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell],
    [sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell],
    [sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell],
    [sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell],
    [sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell],
    [sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell],
    [sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell],
    [sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell],
    [sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell, sudokuCell]
], 'currentlyBacktracking': false, 'columnWhenReturned': 0};
printBoard(board);
//let 2Darray = new Array(x).fill(null).map(item =>(new Array(y).fill(null)))