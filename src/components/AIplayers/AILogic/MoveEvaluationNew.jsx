import {swapColor} from "../../GameLogic.jsx";
import {copyTwoDimArray} from "../../GeneralLogic.jsx"
import {moveObject} from "./Objects";
function atkMoveEvaluation(move,pieceColor,board){
    let rowCoord=move[0];
    let colCoord=move[1];
    let score=0;

    let threeCount=0;
    let fourCount=0;
    let fourOneCount=0;
    let fiveCount=0;
    let vThreat=threatRecognise(verticalCheck(rowCoord,colCoord,pieceColor,board));
    // console.log("vThreat: "+vThreat)
    let hThreat=threatRecognise(horizontalCheck(rowCoord,colCoord,pieceColor,board));
    // console.log("hThreat: "+hThreat)
    let d1Threat=threatRecognise(leftBotToRightTopCheck(rowCoord,colCoord,pieceColor,board));
    // console.log("d1Threat: "+d1Threat)
    let d2Threat=threatRecognise(leftTopToRightBotCheck(rowCoord,colCoord,pieceColor,board));
    // console.log("d2Threat: "+d2Threat)

    let threats=[vThreat,hThreat,d1Threat,d2Threat];
    // let threats=[hThreat];
    let threatIndex;
    let threat;
    for (threatIndex=0;threatIndex<threats.length;threatIndex++){
        threat=threats[threatIndex]
        if (threat===2){
            score+=2;
        } else if(threat===21){
            score +=1;
        } else if(threat===31){
            score+=4;
        } else if(threat===3){
                score+=9            
        } else if(threat===4){
            score+=37
        } else if(threat===41){
            score+=20
    }   else if(threat===5){
        score+=150
    }
}
    // console.log("attack move evaluation:"+score)
    return {score:score, threats:threats}

}

function verticalCheck(rowCoord,colCoord,pieceColor,board){
    let sameColorCount=-1;
    let oppositeColorCount=0;
    let rowIndex=rowCoord;
    let colIndex=colCoord;
    let occupant;
    let counts;
    // console.log("rowIndex: "+rowIndex)
    // console.log("colIndex: "+colIndex)
    // console.log("board[rowIndex][colIndex]: "+board[rowIndex][colIndex])
    while( rowIndex>=0){
        occupant=board[rowIndex][colIndex];
        if (occupant!==" " ){
            // console.log("check top rowIndex: "+rowIndex)
            // console.log("check top colIndex: "+colIndex)
            
            if (occupant===pieceColor){
                sameColorCount++
            } else {
                oppositeColorCount++;
                break;
            }
            rowIndex--;
        } else {
            break;
        };

        }

    rowIndex=rowCoord;
    colIndex=colCoord;
    while(rowIndex<15){
        occupant=board[rowIndex][colIndex];
        if(occupant!==" "){
            // console.log("check bot rowIndex: "+rowIndex)
            // console.log("check bot colIndex: "+colIndex)
            
            if (occupant===pieceColor){
                sameColorCount++
            } else {
                oppositeColorCount++;
                break;
            }
            rowIndex++;

        } else{
            break;
        }

    }
    counts={sameColor:sameColorCount, oppositeColor:oppositeColorCount}
    // console.log("vertical same counts: "+counts.sameColor)
    // console.log("vertical opposite counts: "+counts.oppositeColor)
    return counts
}


function horizontalCheck(rowCoord,colCoord,pieceColor,board){
    let sameColorCount=-1;
    let oppositeColorCount=0;
    let rowIndex=rowCoord;
    let colIndex=colCoord;
    // console.log("rowCoord: "+rowCoord)
    // console.log("colCoord: "+colCoord)
    // console.log("pieceColor: "+pieceColor)
    let occupant;
    let counts;

    while( colIndex>=0){
        occupant=board[rowIndex][colIndex];
        if (occupant!==" "){
            
            if (occupant===pieceColor){
                sameColorCount++
                if(colIndex===0){
                    oppositeColorCount++;
                }
            } else {
                oppositeColorCount++;
                break;
            }

            colIndex--;
        } else {
            break;
        }

    };
    rowIndex=rowCoord;
    colIndex=colCoord;
    while(colIndex<15){
        occupant=board[rowIndex][colIndex];
        if(occupant!==" " ){
            if (occupant===pieceColor){
                sameColorCount++
                if(colIndex===14){
                    oppositeColorCount++;
                }
            } else {
                oppositeColorCount++;
                break;
            }
            colIndex++;
        } else {
            break;
        }

    }
    counts={sameColor:sameColorCount, oppositeColor:oppositeColorCount}
    // console.log("horizontal same counts: "+counts.sameColor)
    // console.log("horizontal opposite counts: "+counts.oppositeColor)
    return counts
}


function leftBotToRightTopCheck (rowCoord,colCoord,pieceColor,board){

    let sameColorCount=-1;
    let oppositeColorCount=0;
    let rowIndex=rowCoord;
    let colIndex=colCoord;
    let occupant;
    let counts;

    //to right top
        while(rowIndex>=0 && colIndex<15){
            occupant=board[rowIndex][colIndex];
            if(occupant!==" "){
                
                // console.log("rowIndex: "+rowIndex) 
                // console.log("colIndex: "+colIndex) 
                // console.log("occupant: "+occupant) 
                if (occupant===pieceColor){
                    sameColorCount++;   
                    if(colIndex===15 || rowIndex===0){
                        oppositeColorCount++;
                    } 
                    // console.log("sameColorCount: "+sameColorCount)        
                } else {
                    oppositeColorCount++;
                    break;
                }
                rowIndex--;
                colIndex++;
            } else{
                break;
            }

    }
    //to left bot
    rowIndex=rowCoord;
    colIndex=colCoord;
    while( colIndex>=0 && rowIndex<15){
        occupant=board[rowIndex][colIndex];
        if (occupant!==" "){
            if (occupant===pieceColor){
                sameColorCount++;   
                if(colIndex===0 || rowIndex===15){
                    oppositeColorCount++;
                }  
                // console.log(count)        
            } else {
                oppositeColorCount++;
                break;
            }
            colIndex--;
            rowIndex++;
        } else{
            break;
        }

    } 

    counts={sameColor:sameColorCount, oppositeColor:oppositeColorCount}
    return counts

}


function leftTopToRightBotCheck (rowCoord,colCoord,pieceColor,board){

    let sameColorCount=-1;
    let oppositeColorCount=0;
    let rowIndex=rowCoord;
    let colIndex=colCoord;
    let occupant;
    let counts;
    //to leftTop
        while(rowIndex>=0 && colIndex>=0){
        occupant=board[rowIndex][colIndex];
        if(occupant!==" " ){
            if (occupant===pieceColor){
                sameColorCount++;   
                if(colIndex===0 || rowIndex===0){
                    oppositeColorCount++;
                }  
                // console.log(count)        
            } else {
                oppositeColorCount++;
                break;
            }
            rowIndex--;
            colIndex--;
        } else{
            break;
        }

    }
    rowIndex=rowCoord;
    colIndex=colCoord;
    while(colIndex<15 && rowIndex<15){
        occupant=board[rowIndex][colIndex];
        if(occupant!==" " ){
            if (occupant===pieceColor){
                sameColorCount++;    
                if(colIndex===15 || rowIndex===15){
                    oppositeColorCount++;
                } 
                // console.log(count)        
            } else {
                oppositeColorCount++;
                break;
            }
            colIndex++;
            rowIndex++;
        } else{
            break;
        }

    }

    counts={sameColor:sameColorCount, oppositeColor:oppositeColorCount}
    return counts
}

function threatRecognise(counts){
    let sameColorCount= counts.sameColor;
    let oppositeColorCount=counts.oppositeColor;
    // console.log("threatRecognise sameColorCount: "+sameColorCount)
    // console.log("threatRecognise oppositeColorCount: "+oppositeColorCount)
    let threat=null;
    if (sameColorCount===2 && oppositeColorCount===0){
        threat=2
    } else if (sameColorCount===2 && oppositeColorCount===1) {
        threat=21
    } else if (sameColorCount===2 && oppositeColorCount===1) {
        threat=21
    } else if (sameColorCount===3 && oppositeColorCount===0) {
        threat=3
    } else if (sameColorCount===3 && oppositeColorCount===1) {
        threat=31
    } else if (sameColorCount===4 && oppositeColorCount===0) {
        threat=4
    } else if (sameColorCount===4 && oppositeColorCount===1) {
        threat=41
    } else if ( sameColorCount>=5){
    threat=5
    }

return threat
}

function moveEvaluation(move,pieceColor,defFactor,board){
    let offence=atkMoveEvaluation(move,pieceColor,board);
    let offenceScore=offence.score;
    let atkThreats=offence.threats;
    let oppositeColor=swapColor(pieceColor);
    board[move[0]][move[1]]=oppositeColor;
    let defence=atkMoveEvaluation(move,oppositeColor,board)
    let defenceScore=defence.score*defFactor;
    let defThreats=defence.threats;
    board[move[0]][move[1]]=pieceColor;
    let totalScore=offenceScore+defenceScore;
    let moveEntity=new moveObject(move,atkThreats,defThreats,totalScore);
    
    // let totalScore=offenceScore;
    // console.log("moveEvaluation function score:"+totalScore)
    return moveEntity
}



export default moveEvaluation;