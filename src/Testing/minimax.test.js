import minimaxMove from "../components/AIplayers/MinimaxAlg";
let initialBoard=[
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," ","B"," "," "," "," "," "," "," "," "," "," "],
    [" ","B","B"," "," ","B"," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," ","B"," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," ","B"," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "]
  ];

  test("minimax testing", ()=>{
    
    let actualMove=minimaxMove("B",0,1,1,initialBoard)
    let expectedMove=[3,3]
    expect(actualMove).toEqual(expectedMove)
    expectedMove=[3,4]
    actualMove=minimaxMove("B",0,2,2,initialBoard)


  })