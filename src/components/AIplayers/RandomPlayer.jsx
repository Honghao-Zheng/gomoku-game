

function avalibleMoves(board){
    let avalibleMoves=[];
    let row,col;
    for (row=0;row<board.length;row++){
        for (col=0;col<board[row].length;col++){
        if (board[row][col]===" "){
            avalibleMoves.push([row,col])
        }
        }
    }
    return avalibleMoves;
}

function avalibleMovesInit(board){
    let avalibleMoves=[];
    let row,col;
    for (row=4;row<board.length-4;row++){
        for (col=5;col<board[row].length-5;col++){
        if (board[row][col]===" "){
            avalibleMoves.push([row,col])
        }
        }
    }
    return avalibleMoves;
}

function chooseRandomMove(board){
    let possibleMoves=avalibleMoves(board);
    let numOfPossibleMoves= possibleMoves.length;
    let moveIndex=Math.floor(Math.random() * numOfPossibleMoves);
    let randomMoveChosen=possibleMoves[moveIndex];
    return randomMoveChosen;
}

function chooseRandomMoveInit(board){
    let possibleMoves=avalibleMovesInit(board);
    let numOfPossibleMoves= possibleMoves.length;
    let moveIndex=Math.floor(Math.random() * numOfPossibleMoves);
    let randomMoveChosen=possibleMoves[moveIndex];
    return randomMoveChosen;
}


export {chooseRandomMove,chooseRandomMoveInit};