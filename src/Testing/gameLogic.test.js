import { checkWinning, putDownPiece, checkDraw } from "../components/GameLogic";



let leftTopBoard=[
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" ","B"," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," ","B"," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," ","B"," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," ","B"," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "]
  ];


  let topRightBoard=[
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," ","B"," "],
    [" "," "," "," "," "," "," "," "," "," "," "," ","B"," "," "],
    [" "," "," "," "," "," "," "," "," "," "," ","B"," "," "," "],
    [" "," "," "," "," "," "," "," "," "," ","B"," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "]
  ]; 

  let HBoard=[
    [" ","B","B","B","B"," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "]
  ];

  let VBoard=[
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    ["B"," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    ["B"," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    ["B"," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    ["B"," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "]
  ];

  let VBBoard=[
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    ["B"," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    ["B"," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    ["B"," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    ["B"," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "]
  ];

  let VB6Board=[
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    ["B"," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    ["B"," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    ["B"," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    ["B"," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    ["B"," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "]
  ];

  let WBoard=[
    [" ","W","W","W","W"," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "]
  ];

  let drawCheckBoard=[
    ["B","B","B","W","W","W","B","B","B","W","W","W","B","B","B"],
    ["B","B","B","W","W","W","B","B","B","W","W","W","B","B","B"],
    ["B","B","B","W","W","W","B","B","B","W","W","W","B","B","B"],
    ["W","W","W","B","B","B","W","W","W","B","B","B","W","W","W"],
    ["B","B","B","W","W","W","B","B","B","W","W","W","B","B","B"],
    ["B","B","B","W","W","W","B","B","B","W","W","W","B","B","B"],
    ["B","B","B","W","W","W","B","B","B","W","W","W","B","B","B"],
    ["W","W","W","B","B","B","W","W","W","B","B","B","W","W","W"],
    ["B","B","B","W","W","W","B","B","B","W","W","W","B","B","B"],
    ["B","B","B","W","W","W","B","B","B","W","W","W","B","B","B"],
    ["B","B","B","W","W","W","B","B","B","W","W","W","B","B","B"],
    ["W","W","W","B","B","B","W","W","W","B","B","B","W","W","W"],
    ["B","B","B","W","W","W","B","B","B","W","W","W","B","B","B"],
    ["B","B","B","W","W","W","B","B","B","W","W","W","B","B","B"],
    ["B","B","B","W","W","W","B","B","B","W","W","W","B"," "," "]
  ];
test("check winning",()=>{
//1
    putDownPiece([0,0],"B",leftTopBoard)
    let whowin=checkWinning("B",[0,0],leftTopBoard)
    expect(whowin).toBe("B")
//2
    putDownPiece([0,14],"B",topRightBoard)
    whowin=checkWinning("B",[0,14],topRightBoard)
    expect(whowin).toBe("B")
//3
    putDownPiece([0,0],"B",HBoard)
    whowin=checkWinning("B",[0,0],HBoard)
    expect(whowin).toBe("B")
//4
    putDownPiece([0,0],"B",VBoard)
    whowin=checkWinning("B",[0,0],VBoard)
    expect(whowin).toBe("B")
//5
    putDownPiece([4,0],"B",VBBoard)
    whowin=checkWinning("B",[4,0],VBBoard)
    expect(whowin).toBe("B")

//6
putDownPiece([4,0],"B",VB6Board)
whowin=checkWinning("B",[4,0],VB6Board)
expect(whowin).toBe("B")

//7
putDownPiece([0,0],"W",WBoard)
whowin=checkWinning("W",[0,0],WBoard)
expect(whowin).toBe("W")
})

test("check Draw",()=>{
    putDownPiece([14,13],"B",drawCheckBoard)
    putDownPiece([14,14],"W",drawCheckBoard)
    let isDraw=checkDraw(drawCheckBoard);
    expect(isDraw).toBe(true)


})